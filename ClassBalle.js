class classBalle{
    constructor(x, y, diamB){
        this.x = x,
        this.y = y,
        this.vx = 3,
        this.vy = 2,
        this.diamB = diamB
    }

    deplacement() {
        this.x += this.vx;
        this.y += this.vy;
    }
    colision(canvaswidth, canvasheight) {
        if(this.x + this.diamB / 2 >= canvaswidth || this.x <= 0  ) {
            this.vx *= -1;
        }
        if(this.y + this.diamB / 2 >= canvasheight || this.y <= 0  ) {
            this.vy *= -1;
        }
    }
    collisbarre(barx, larg, bary, hauteur) {
        let colidX = false;
        let colidY = false;

        if(this.y >= bary && this.y <= bary + hauteur){
            colidX = true;
        }


        if(this.x >= barx && this.x <= barx + larg){
            
            colidY = true;
        }

        if(colidX && colidY) {
            this.vy *= -1;
        }
    }

    draw(context){
        context.beginPath();
        context.fillStyle="#0000FF";
        context.fillRect(this.x, this.y, this.diamB/2, this.diamB/2);
        context.fill();
    }
}