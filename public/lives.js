function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#289C99";
    // ctx.fillText("Lives: "+lives, canvas.width-65,20);
    ctx.fillText(`${x} ${y} Lives: ${lives}`, canvas.width-65,20);
}

// class Lives {
//     constructor() {
//         //
//     }
//     render(ctx) {
//         ctx.beginPath();
//         //
//         ctx.closePath();
//     }
//     loseLife() {
//         //
//     }
//     reset() {
//         //
//     }
// }