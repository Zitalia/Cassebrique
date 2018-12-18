class ClassBrique{
    constructor(tailleX, tailleY, posx, posy){
        this.taillex = tailleX;
        this.tailley = tailleY;
        this.x = posx;
        this.y = posy;
        this.lifePoint = 1;
    }

    createReseauBrique(Brique) {
        for (var k = 0; k < 2; k++) {
            for (var j = 0; j < 10; j++) {
                Brique.push(createbrique(50, 20, j*50 +25*j+25*k, 25+ k*50));
            }
        }
    
    }
}