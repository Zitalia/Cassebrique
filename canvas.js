window.onload = function() {
    var canvas = document.getElementById('mon_canvas');
    if(!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }

    var context = canvas.getContext('2d');
    if(!context) {
        alert("Impossible de récupérer le context du canvas");
        return;
    }
    
    var Barre = {
           barY : 10,
           barX : 100,
           leftbar: 0,
           midbar: 0,
           rightbar: 0,
           vPX : 0,
           vPY : 0,
           xP : 0,
           yP : 0
    };

   Barre.xP = canvas.width / 2 - Barre.barX / 2;
   Barre.yP = canvas.height - 5 - Barre.barY;

   Barre.midbar = Barre.leftbar + Barre.barX / 3;
   Barre.rightbar = Barre.midbar + Barre.barX / 3;

    var Balle = {
            x : 425,
            y : 250,
            vx : -3,
            vy : -3,
            diamB: 10
    };
   
    window.addEventListener("keydown", function(e) {
        switch (e.key) {
            case "d":
            case "D":
                Barre.vPX = 3;
                Barre.xP += Barre.vPX;
                break;
            case "q":
            case "Q":
                Barre.vPX = -3;
                Barre.xP += Barre.vPX;
                break;
        }
    });
    window.addEventListener("keyup", function(e) {
        switch (e.key) {
            case "d":
            case "D":
                Barre.vPX = 0;
                Barre.xP += Barre.vPX;
                break;
            case "q":
            case "Q":
                Barre.vPX = -0;
                Barre.xP += Barre.vPX;
                break;
        }
    });


    var brique= [];
    createReseauBrique(brique);

    var myInterval = setInterval(animate, 1000/90);
    function animate() {
        Balle.x = deplacement(Balle.x, Balle.vx);
        Balle.y = deplacement(Balle.y, Balle.vy);
        
        Balle.vx = colision(Balle.x, Balle.diamB, canvas.width, Balle.vx);
        Balle.vy = colision(Balle.y, Balle.diamB, canvas.height, Balle.vy);

        Balle.vy = collisbarre(Barre.xP, Balle.x, Barre.barX, Balle.y, Barre.yP, Barre.barY, Balle.vy);

        if(Balle.vx > 0) {
           Balle.vx = collisbarre(Barre.xP, Balle.x, Barre.midbar, Balle.y, Barre.yP, Barre.barY, Balle.vx);
        } else {
           Balle.vx = collisbarre(Barre.xP + Barre.midbar, Balle.x, Barre.rightbar, Balle.y, Barre.yP, Barre.barY, Balle.vx);
        }

        for( i=0; i< brique.length ; i++) {
            if(collisbrique(brique[i], Balle)) {
                Balle.vy *= -1;
                brique[i].lifePoint = 0;
            }
        }

        Barre.xP = telepbarre(Barre.xP, Barre.barX +5, canvas.width, Barre.vPX);

        Barre.xP = Pdeplacement(Barre.xP, Barre.vPX);

        loose = loselalose(Balle.y, canvas.height - 5 );



        checkBriqueDead(brique);

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.beginPath();
        context.fillRect(Balle.x, Balle.y, Balle.diamB/2, Balle.diamB/2);
        context.fillRect(Barre.xP, Barre.yP, Barre.barX , Barre.barY);
        context.fill();

        for( i=0; i< brique.length ; i++) {
            if (brique[i].lifePoint==1) {
                context.beginPath();
                context.fillRect(brique[i].x , brique[i].y, 50 , 20);
                context.fill();
            }
        }


    }
}