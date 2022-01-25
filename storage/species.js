
//Конструктор видов
function Species(number, name, type, size, speedMetabolism, speed, color, alive, hunter) {
    this.number = number;
    this.name = name;
    this.type = type;
    //this.placeOfLife = placeOfLife;
    this.size = size;
    this.speedMetabolism = speedMetabolism;
    this.speed = speed;
    this.color = color;
    this.alive = alive;
    this.hunter = hunter
    
if(this.type === "бенталь"){
        this.x = Math.floor(Math.random() * 1100);
        this.y = 540; //Math.floot(Math.random() * 1100);

    }

    if(this.type === "пелагиаль"){
        this.x = Math.floor(Math.random() * 1100);
        this.y = Math.floor(Math.random() * 140) + 200;

    }

    this.drawFigure = function() {
        if(this.type === "бенталь"){
            arca(this.x, this.y, this.color, this.size);
        }

        if(this.type === "пелагиаль"){
            circle (this.x, this.y, this.color, this.size)
        }
    }

    
}

//Движение видов
Species.prototype.move = function() {
    if(this.type === "бенталь"){
        if (this.x < 5) {
            this.x += this.speed
        }else if (this.x > 1090) {
            this.x += this.speed * -1
        } else {
            this.x += this.speed * posOrNeg(); 
        }   
    }

    if(this.type === "пелагиаль"){
        if (this.x < 5) {
            this.x += this.speed
        }else if (this.x > 1090) {
            this.x += this.speed * -1
        } else {
            this.x += this.speed * posOrNeg(); 
        } 
        if (this.y < 205) {
            this.y += this.speed
        }else if (this.x > 540) {
            this.y += this.speed * -1
        } else {
            this.y += this.speed * posOrNeg(); 
        } 
        
    }
}

//Движение охотников
Species.prototype.hunting = function (victim, hunter) {
    
    let summ = [victim.x - hunter.x, victim.y - hunter.y];

    if(summ[0] > 0) {
        hunter.x += 5
    }

    if(summ[0] < 0) {
        hunter.x -=5
    }
    
    if(summ[1] > 0) {
        hunter.y += 5
    }

    if(summ[1] < 0) {
        hunter.y -= 5
    }
    distanceOfEat (victim, hunter);
}
 
//Функция поедания
{let tick = 0;
function distanceOfEat (victim, hunter) {
    let summ = [Math.abs(victim.x - hunter.x), Math.abs( victim.y - hunter.y)];
    if (summ[0] < 7 && summ[1] < 7 && tick < 3) {
        tick++;
    }

    if (tick === 3) {
        victim.alive = "no";
    }
}}

// Функция выбора места обитания 
function choise(n){
    if(n === 1){
        return "бенталь";
    } else {
        return "пелагиаль";
    }
}
const test = new Species(0, "Инфузория", "пелагиаль", 5, 1000, 5, "yellow", "yes", "yes")
const test2 = new Species(2, "Бактерия",  "пелагиаль", 5, 1000, 3, "black", "yes","no"); 
 

//Создатель существ и массива из них
const arrayOfSpecies = [test,test2];
/*for(let i = 0; i < 100; i++) {
    let n = randomNumber(5);
    for(let j = 0;j < 5; j++ ){
        if(n === 0 ) {
            arrayOfSpecies[i] = new Species(0, "Инфузория", choise(posOrNeg ()), 5, 1000, 5, "yellow", "yes", "yes");    
        }
        if(n === 1 ) {
            arrayOfSpecies[i] = new Species(1, "Амеба", "бенталь", 7, 1000, 1, "white", "yes", "yes");    
        }
        if(n === 2 ) {
            arrayOfSpecies[i] = new Species(2, "Бактерия",  choise(posOrNeg ()), 1, 1000, 3, "black", "yes","no");    
        }
        if(n === 3 ) {
            arrayOfSpecies[i] = new Species(3, "Зеленая водоросль",  choise(posOrNeg ()), 2, 1000, 0, "green", "yes", "no");    
        }
        if(n === 4 ) {
            arrayOfSpecies[i] = new Species(4, "Коловратка", choise(posOrNeg ()), 12, 1000, 10, "gray", "yes", "yes");    
        }
    }
}*/
//console.log(arrayOfSpecies)

// значит ца так, я смог сделать так, чтобы они псаунились в разных местах, и принимали разные формы, 
//завтра нужно прописатьдвижение охотников за добычей
//Ну и дальше по идеям