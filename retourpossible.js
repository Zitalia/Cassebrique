function animate(){
         context.clearRect(0, 0, canvas.width, canvas.height);
        
        context.beginPath();
        context.fillRect(posX, posY, diametreBalle / 2 , diametreBalle / 2);
        context.fillRect(posX2, posY2, diametreBalle / 2 , diametreBalle / 2);
        context.fillRect(posPX, posPY, taillebarre , barreY);
        context.fill();

        vitesseX = colision(posX, diametreBalle, canvas.width, vitesseX);
        vitesseY = colision(posY, diametreBalle, canvas.height, vitesseY);

        vitesseX2 = colision(posX2, diametreBalle, canvas.width, vitesseX2);
        vitesseY2 = colision(posY2, diametreBalle, canvas.height, vitesseY2);

        vitesseY = collisbarre(posPX, posX, taillebarre, posY, posPY, barreY, vitesseY);
        vitesseY2 = collisbarre(posPX, posX2, taillebarre, posY2, posPY, barreY, vitesseY2);
        //vitessePX = colision(posPX, taillebarre+5, canvas.width, vitessePX);
        posPX = telepbarre(posPX, taillebarre+5, canvas.width, vitessePX); 

        posX = deplacement(posX, vitesseX);
        posY = deplacement(posY, vitesseY);

        posX2 = deplacement(posX2, vitesseX2);
        posY2 = deplacement(posY2, vitesseY2);

        posPX = Pdeplacement(posPX, vitessePX);

        loose1 = loselalose(posY, canvas.height - 5 )
        loose2 = loselalose(posY2, canvas.height - 5 )

    }
  }
