class Classbarre{
    constructor( barY, barX, xP, yP, canvaswidth, canvasheight ) {
        this.barY =barY;
        this.barX = barX;
        this.leftbar = 0;
        this.midbar = 0;
        this.rightbar = 0;
        this.vPX = 0;
        this.vPY = 0;
        this.xP = xP;
        this.yP = yP;

        this.xP = canvaswidth / 2 - this.barX / 2;
        this.yP = canvasheight - 5 - this.barY;
        this.midbar = this.leftbar + this.barX / 3;
        this.rightbar = this.midbar + this.barX / 3;

        this.canvasMargin = 15;
        this.canvasReplaceMargin = 20;
    }

    draw(context) {
        context.beginPath();
        context.fillRect(this.xP, this.yP, this.barX , this.barY);
        context.fill();
    }

    // Barre.xP = Pdeplacement(Barre.xP, Barre.vPX);
    telepbarre(canvaswidth) {
        if(this.colisionCanvas(canvaswidth)) {
            if(this.xP > canvaswidth - this.barX - this.canvasMargin ) {
                this.xP = this.canvasReplaceMargin;    
            }else if(this.xP <= this.canvasMargin){
                this.xP = canvaswidth - this.barX - this.canvasReplaceMargin;
            }  
        }
    }

    colisionCanvas(canvaswidth) {
        let res = false;
        if(this.xP+(this.barX + this.canvasMargin) >= canvaswidth || this.xP <= 0  ) {
            res = true;     
        }
        return res;
    }

    deplacement() {
        this.xP += this.vPX;
    }
    // Barre.xP = telepbarre(Barre.xP, Barre.barX +5, canvas.width, Barre.vPX);
    


}