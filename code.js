
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
        for(let i = 0; i < arraySpecies.length ;i++){
            arraySpecies[i].drawFigure();
            if(arraySpecies[i] instanceof Plants === false ){
               arraySpecies[i].move(); 
            }
        }

        ctx.strokeRect(0, 0, 1100, 740);

    }, 100)



