var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1};
    }
}

const ball = new Ball(10, 'red', x, y);

const paddle = new Paddle((canvas.width-75) / 2)

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    // drawBall();
    ball.render(ctx);
    // paddle.render(ctx);
    // drawPaddle();
    paddle.render(ctx);
    // score.render(ctx);
    drawScore();
    // live.render(ctx);
    drawLives();
    collisionDetection();

    if(x + dx > canvas.width-ball.radius || x + dx < ball.radius) {
        dx = -dx;
    }
    if(y + dy < ball.radius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ball.radius) {
        if(x > paddle.x && x < paddle.x + paddle.width) {
            dy = -dy;
        }
        else {
            lives--;
            if(!lives) {
                alert("GAME OVER");
                document.location.reload();
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 2;
                dy = -2;
                paddle.x = (canvas.width-paddle.width)/2;
            }
        }
    }
    if(rightPressed && paddleX < canvas.width - paddleWidth) {
        paddle.move(7);
    }
    else if(leftPressed && paddleX > 0) {
        paddle.move(-7);
    }
    x += dx;
    y += dy;
    
    ball.move(dx, dy) //

    requestAnimationFrame(draw);
}

draw();