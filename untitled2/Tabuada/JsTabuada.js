function ver(){
    let xy = document.getElementById('inicio');
    let x = Number(xy.value);
    let msg = document.getElementById('msg')
    msg.innerText = `TABUADA DO ${x}:\n`
    for(let i = 0; i <= 10; i++){
        msg.innerText += `${x} * ${i} =   ${x*i}\n`;
    }

}

