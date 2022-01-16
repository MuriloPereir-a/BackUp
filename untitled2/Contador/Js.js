function ver(){
    let itxt = document.getElementById('inicio');
    let ftxt = document.getElementById('fim');
    let stxt = document.getElementById('pulo');

    let inicio = Number(itxt.value);
    let fim = Number(ftxt.value);
    let salto = Number(stxt.value);

    let msg = document.getElementById('msg');
    msg.innerText = `Contando: \n`;

    if(inicio < fim){
        for(var i = inicio; i <= fim; i += salto){
            msg.innerText += ` ${i} `;
        }
    }else if(inicio > fim){
        for(var j = inicio; j >= fim; j -= salto){
            msg.innerText += ` ${j} `;
        }
    }
}

