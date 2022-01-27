
//Функция для рисования кругов
function circle (x, y, color, radius) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, false);
    ctx.fill();
    ctx.stroke();
}
//Функция для рисования полуругов
function arca (x, y, color, radius) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI, true);
    ctx.fill();
    ctx.stroke();
}

//Функция для выбора 1 или -1
function posOrNeg () {
    let j = Math.floor(Math.random() * 2);
    if(j === 0){
        return -1;
    } else if ( j === 1){
        return 1;
    }
    
}

//Функция для выбора рандомного числа
function randomNumber (n){
    return Math.floor(Math.random() * n);
}

function choise(n){
    if(n === 1){
        return "bental";
    } else {
        return "pelagial";
    }
}

function coordX(){
    return  Math.floor(Math.random() * 1100);
}

function coordY(type){
 if (type === "bental"){
    return  540;
 } else if (type === "pelagial") {
    return Math.floor(Math.random() * 140) + 200;
 }
}
