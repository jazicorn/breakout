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

