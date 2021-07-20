const imagem1 = document.getElementById('img_principal')
const botao1 = document.getElementById('botao')


/* função que muda as figuras em cada click */
botao1.onclick = function(){
    if (botao1.value === "click1"){
        imagem1.src='img/chaves.png'
        botao1.value ="click2"
    
    }
    else if (botao1.value === "click2"){
        imagem1.src='img/kiko_bravo.jpg'
        botao1.value ="click3"
        
    }

    else if (botao1.value === "click3"){
        imagem1.src='img/Chiquinha.png'
        botao1.value ="click4"
        
    }
    else if (botao1.value === "click4"){
        imagem1.src='img/seu_madruga_ironico.jpg'
        botao1.value ="click5"
    }
    else if (botao1.value === "click5"){
        imagem1.src='img/barril_do_chaves.jpg'
        botao1.value ="click1"
    }


    
}
/* 
botao1.onclick = function(){
    if (botao1.value === "estado1"){
        imagem1.src='img/chimbinha sorrindo.png'
        botao1.value ="estado2"
        humor = "Barril"
    }
    else if (botao1.value === "estado2"){
        imagem1.src='img/mau_humor.png'
        botao1.value ="estado1"
        humor = "Arretado"
    }

    
}

 */