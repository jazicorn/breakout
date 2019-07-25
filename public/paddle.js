// var paddleHeight = 10;
// var paddleWidth = 75;
// const paddleX = (canvas.width-paddleWidth) / 2;
// move

// function drawPaddle() {
//     ctx.beginPath();
//     ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
//     ctx.fillStyle = "#FBE0BD";
//     ctx.fill();
//     ctx.closePath();
// }

class Paddle {
    constructor(xPos, color="#FBE0BD") {        
        this.color = color;
        this.x = xPos;
        this.height = 10;
        this.width = 75;
    }
    render(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, canvas.height-this.height, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
    move(dx){
        this.x += dx
    }
}