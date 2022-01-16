    var vetor = [];

    function add(){
        var msg = document.getElementById('msg');
        msg.innerText = '';
        let txtn = document.getElementById('numero');
        let num = Number(txtn.value);
        if(num >= 0 && num <= 50){
            vetor.push(num);
            msg.innerText += ` ${num} foi adicionado.\n
                                ${vetor}`
        }else{
            alert("Somente entre 0 e 50")
    }
        txtn.value = '';
        txtn.focus();


}
    function ver(){
        let tot = vetor.length
        let maior = Math.max.apply(null, vetor);
        let menor = Math.min.apply(null, vetor);
        let soma = vetor.reduce((acc,next) => acc + next);
        let avg = soma/vetor.length;

        return msg.innerText = `Total: ${tot}\n
                                 Maior: ${maior}\n
                                 menor: ${menor}\n
                                 Somando todos: ${soma}\n
                                 A média é: ${avg}\n\n
                                 [ ${ vetor } ]`

    }


