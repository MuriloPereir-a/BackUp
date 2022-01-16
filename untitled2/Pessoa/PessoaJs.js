function calcular() {
    let anoPes = document.getElementById('anoNas');
    let anoDigitado = Number(anoPes.value);
    let msg = document.getElementById('msg');
    let data = new Date();
    let ano = data.getFullYear();
    let age = ano - anoDigitado;


    if (anoDigitado >= ano || anoDigitado <= 1800) {
        alert('Deu ruim: Ou não nasceu ainda, ou muito velho.\n limite -> 1800 :)')
    } else {
        let genero = '';
        let img = document.getElementById('imagem');
        let sexo = document.getElementsByName('radsex');
        if(sexo[0].checked){
            genero = 'Homem';
            if(age >=0 && age < 13){
                msg.innerText = `Um homemzinho de ${age} anos :')`
                msg.style.textAlign = 'center';
                img.src = 'crianca_M.jpg'
            }else if(age >= 13 && age <40){
                msg.innerText = `Um homem de ${age} anos`
                msg.style.textAlign = 'center';
                img.src = 'eu.jpg'
            }else if(age > 40){
                msg.innerText = `Um senhor de ${age} anos`
                msg.style.textAlign = 'center';
                img.src = 'idosOOO.jpg'
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if(age >=0 && age < 13){
                msg.innerText = `Uma garotinha de ${age} anos :')`
                msg.style.textAlign = 'center';
                img.src = 'crianca_F.jpg'
            }else if(age >= 13 && age <40){
                msg.innerText = `Uma mulher de ${age} anos`
                msg.style.textAlign = 'center';
                img.src = 'Jovem-F.jpg'
            }else if(age > 40){
                msg.innerText = `Uma senhora de ${age} anos`
                msg.style.textAlign = 'center';
                img.src = 'idosAAA.jpg'
            }
        }
    }


}
