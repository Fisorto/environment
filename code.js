
const lake = document.getElementById("screen")
let ctx = lake.getContext("2d");
water();
bottom();

//ТИпо будущий массив взаимодействий
//let interactions = [];

setInterval(
    () => {
        ctx.clearRect(0, 0, 1100, 740);
        water();
        bottom();
        // игровой цикл
        for(let i = 0; i < arrayOfSpecies.length; i++){
            if (arrayOfSpecies[i].alive === "yes")
                arrayOfSpecies[i].drawFigure();
                // проверка на жизнь и охотника
            if (arrayOfSpecies[i].alive === "yes" && arrayOfSpecies[i].hunter === "no" ){
                arrayOfSpecies[i].move();   
            }
            if(arrayOfSpecies[i].hunter === "yes"){
                arrayOfSpecies[i].hunting(test2, test);
            }


            
            //Проверка на охотника и поиск его жертвы, не доделан, я пока не знаю как это решить, и думаю в будущем найду решение
            /*if (arrayOfSpecies[i].hunter === "yes") {
                for (let j = 0; j < arrayOfSpecies.length; j++) {
                    if (arrayOfSpecies[i] > arrayOfSpecies[j]) {
                        if(Math.abs(arrayOfSpecies[j].x - arrayOfSpecies[i].x) < 50 && Math.abs( arrayOfSpecies[j].y - arrayOfSpecies[i].y) < 50){
                            interactions.push([arrayOfSpecies[j], arrayOfSpecies[i]]);
                        }
                    }
                }            
            }*/
            // удаление мертвецов
            /*if (arrayOfSpecies[i].alive === "no"){
                if (i === 0) {
                    splice (arrayOfSpecies[i], arrayOfSpecies[i]);
                } else {
                    splice (arrayOfSpecies[i - 1], arrayOfSpecies[i]);
                }
                
            }   */
            
        }

        ctx.strokeRect(0, 0, 1100, 740);

    }, 100)



