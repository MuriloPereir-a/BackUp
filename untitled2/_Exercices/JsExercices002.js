/*01) Crie uma forma que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
let zzz = {
    somar(a,b){
        return console.log(a+b);
    },
    subt(a,b){
        return console.log(a-b);
    },
    div(a,b){
        return console.log(a/b);
    },
    mult(a,b){
        return console.log(a*b);
    }
}
zzz.mult(3,4)*/
/*Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
function valor(x){
    let y = x.toLocaleString('pt-BR',{style:'currency', currency:'BRL'});
    console.log(y)
}
*/

/* 02) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
function juroS(cI, tx, temp){
    let j = (cI * tx * temp)/100
    let m = cI + j;
    return console.log(m.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'}));
}
juroS(300,0.25,6);
-----
function juroC(cI, tx, tempo){
    tempo /= 12;
    tx /= 100;
    let m = cI*Math.pow((1+tx),2)
    return console.log(m.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}));
}
juroC(1400, 7, 24);
*/

/* 03) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
function dia(x){
    switch (x){
        case 1: case 7:
            console.log('FDS');
            break
        case 2: case 3: case 4: case 5: case 6:
            console.log('Útil');
            break
        default:
            console.log('Inválido');
            break
    }
}
dia(9)*/

/* 04) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
function fruta(f){
    switch (f){
        case 'maçã':
            console.log('Não vendemos esta fruta aqui');
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis');
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('Faliu')
    }
}
fruta('melancia');
*/
/* 05) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.
let count = 0;
while(count <= 10){
    console.log("Hello World");
    count++
}
*/
/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
function vet(...rest){
    let cDen = 0;
    let cFora = 0;
    rest.forEach(i =>{
        if(i >= 10 && i <= 20){
            cDen++
        }else{
            cFora++
        }
        }
    )
    console.log(`Dentro: ${cDen}... Fora: ${cFora}`)
}
vet(3,4,5,6,1,11,12,13,14,15)*/

/*const q = [2,3,4,5,6];
function tot() {
    let x = q.reduce((acc,next)=>{
        console.log(acc)
        return acc+next;
    })
}
tot();*/

//Fatorial
function fat(fatorial){
    let tot = 1;
    for(let i = fatorial; i > 1; i++){
        tot *= i
    }
    return console.log(tot);
}
fat(5)
console.log('oi')