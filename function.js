
function createbrique(taillex, tailley, posx, posy) {

    var resultt = {};
    resultt.tailleX= taillex;
    resultt.tailleY= tailley;
    resultt.x = posx;
    resultt.y = posy;
    resultt.lifePoint = 1;

 
    return resultt;

}

function createReseauBrique(brique) {
    for (var k = 0; k < 2; k++) {
        for (var j = 0; j < 9; j++) {
            brique.push(createbrique(50, 20, j*50 +25*j+25*k, k*50));
        }
    }

}
function Pdeplacement(pos, vitesse) {
    pos += vitesse;
    return pos;
}

function deplacement(pos, vitesse) {
    pos += vitesse;
    return pos;
}

function colision(pos, diamBalle, limite, vitesse) {
    if(pos+diamBalle/2 >= limite || pos <= 0  )
    //Si on touche le bord 
    {
        vitesse *= -1;
    }
    return vitesse;
}
function telepbarre(pos, taillebarre, limite, vitesse) {
    if(pos+taillebarre >= limite || pos <= 0  ) {
        if(pos > 500) {
            pos = 15;    
        }else if(pos <= 10){
            pos = 1 + limite - taillebarre;
        }      
    }
    return pos;
}

function collisbarre(posP, pos, barre, pos2, PosP2, barreY, vitesse) {
    
    if(pos >= posP && pos <= posP + barre){
        if(pos2 >= PosP2 && pos2 <= PosP2 + barreY){
        vitesse *= -1;
        }
    }
    return vitesse;
}

function LALALALLAALLA(){
    LP *= 0;
    vitesse *= -1;
}


function collisbrique(brique, balle) {
    var resultcoli1 = false;
    if (brique.lifePoint==1){
        if(balle.x >= brique.x && balle.x <= brique.x + brique.tailleX){
            if(balle.y >= brique.y && balle.y <= brique.y + brique.tailleY){
                resultcoli1 = true;
            }
        }
    }
    return resultcoli1;
}


function loselalose(posY, limite){
    if(posY >= limite){
        //alert("U LOSE NOOB")
        document.location.reload(true);
    }
}

function checkBriqueDead(briques) {
    briques.forEach(function(uneBrique, key) {
        if(uneBrique.lifePoint === 0) {
            briques.splice(key, 1);
            checkWin(briques);
        }
    });
}

function checkWin(brique) {
    if(brique.length <= 0) {
        alert("C bien mon bro")
        document.location.reload(true);
    }
}