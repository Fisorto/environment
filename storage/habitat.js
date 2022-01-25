
//Камень
function boulder() {

}
//Вода
function water() {
    ctx.fillStyle = "#02fafd";
    ctx.beginPath();
    ctx.rect(0, 200, 1100, 400)
    ctx.fill();
    ctx.stroke();
}
//Грунт
function bottom() {
    ctx.fillStyle = "gray";
    ctx.beginPath();
    ctx.rect(0, 540, 1100, 200)
    ctx.fill();
    ctx.stroke();
}