function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#289C99";
    ctx.fillText("Score: "+score, 8, 20);
}

// class Score {
//     constructor() {
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.score = score;
//         this.font = font;
//     }
//     render(ctx) {
//         ctx.beginPath();
//         ctx.closePath();
//     }
//     update(points) {
//         //
//     }
//     reset() {
//         //
//     }
// }