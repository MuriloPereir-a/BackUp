function zika(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let body = document.getElementById('body');
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();


    if(hora => 0 && hora < 12) {
        msg.innerText = `BOM DIA!\nAgora são ${hora} horas e ${min} minutos!`
        img.src = 'manha.jpg'
        body.style.backgroundColor = 'yellow';
    }
    if(hora >=12 && hora <=18) {
        msg.innerText = `BOA TARDE!\nAgora são ${hora} horas e ${min} minutos!`
        img.src = 'tarde.jpg'
        body.style.backgroundColor = 'Orange';
    }
    if(hora >= 19 && hora <= 24){
        msg.innerText = `BOA NOITE!\nAgora são ${hora} horas e ${min} minutos!`
        img.src = 'noite.jpg'
        body.style.backgroundColor = 'darkblue';
    }
}
