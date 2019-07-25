// status
// draw

class Ball {
    constructor(radius, color = "#289C99", x = 0, y = 0) {
        this.radius = radius;
        this.color = color;
        this.x = x
        this.y = y
    }
    render(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}
