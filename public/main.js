// Question. Is there a better way than having all these variables?

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
// what the heck dx = 2? why? Is it two spaces? milimeters?
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1};
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}

function collisionDetection() {
    // look up again what the ++ does in c++
    // I think the c++ is how javascript does loops
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x< b.x+brickWidth && y > b.y && y < b.y + brickHeight) {
                    // what does dy = -dy do?
                    dy = -dy;
                    //why does status 0 make brick dissapear?
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#289C99";
    ctx.fillText("Score: "+score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#289C99";
    ctx.fillText("Lives: "+lives, canvas.width-65,20);
}


function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                // I get bricks array is being spliced but how does that make the bricks show up?
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;

                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                
                if( c == 0 ) {
                    // fill style is blue
                     ctx.fillStyle = "blue"
                } else if( c == 1 ) {
                     // fill style green
                     ctx.fillStyle = "purple"
                } else if( c == 2 ) {
                     // fill orange
                     ctx.fillStyle = "magenta"
                } else if( c == 3 ) {
                    // fill orange
                    ctx.fillStyle = "red"
                } else {
                    // fill orange
                    ctx.fillStyle = "gold"
                }

                ctx.fill();
                ctx.closePath(); 
            }
        }
    }
}

const arr = [1,2,3]
console.log(arr[0]) // 1
const barr = [[1,2,3], [11,22,33], [333,111,222]]
barr[0][1]

class Ball {
    constructor(radius, color = "#289C99") {
        this.radius = radius;
        this.color = color;
    }
    render(ctx) {
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI *2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

const sball = new Ball(5);

// function drawBall() {
//     // ctx.beginPath();
//     // // x-axis, y-axies, radias, starting angle
//     // ctx.arc(x, y, ballRadius, 0, Math.PI*2);
//     // ctx.fillStyle = "#289C99";
//     // ctx.fill();
//     // ctx.closePath();
// }

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#FBE0BD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    // drawBall();
    sball.render(ctx)
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
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
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }
    if(rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

draw();
