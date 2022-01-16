function fff(){

    let msg = document.getElementById('msg');
    let foto = document.getElementById('imagem');
    let data = new Date();
    let sss = document.getElementById('sss');
    let hora = data.getHours();
    let min = data.getMinutes();
    let secs = data.getSeconds();

    if(hora >=0 && hora < 12){
        msg.innerText = `BOM DIA!!!\nAgora são: ${hora}:${min}:${secs}`
        foto.src = 'manha.jpg'
    }
    if(hora >=12 && hora < 19){
        msg.innerText = `BOA TARDE!!!\nAgora são: ${hora}:${min}:${secs}`
        foto.src = 'tarde.jpg'

    }
    if(hora >=19 && hora < 25){
        msg.innerText = `BOA NOITE!!!\nAgora são: ${hora}:${min}:${secs}`
        foto.src = 'noite.jpg'

    }
}