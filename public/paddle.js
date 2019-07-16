function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#FBE0BD";
    ctx.fill();
    ctx.closePath();
}

// class Paddle {
//     constructor() {
//         this.x = x;
//         this.y = y;
//     }
//     render(ctx) {
//         ctx.beginPath();
//         ctx.closePath();
//     }
// }