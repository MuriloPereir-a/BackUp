/*let vet = [1,2,3,4,3,5,4,23,44]
let count = 0;
while(count < vet.length){
    console.log(vet[count])
    count++
}
console.log(Math.min.apply(null, vet))*/


/*function rep(item, quantidade){
    let vet = [];
    for(let i = 0; i < quantidade; i++){
        vet.push(item);
    }
    return console.log(vet);
}
rep('oi', 40);*/
/*function x(a){
    let b = '++';
    return console.log(b.repeat(a));
}
x(40);*/
/*function abbb([...rest]){
    let x = rest[0];
    let y = rest[rest.length - 1];
    let vet = [x,y]
    return console.log(vet)
}
abbb([7,14,'olá','brasukle']);*/
/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
Exemplos:*/
/*function recebe(...murilo){
    let oi = []
    for(let i = 0; i < murilo.length; i++){
        if(typeof murilo[i] === Number){
            oi.push(murilo[i])
        }
    }
    return console.log(oi);
}
recebe('oi',3,'4',20,'tudo')*/
/*function x(){
    let s = 0;
    for(i in arguments){
        s+=arguments[i];
    }
    return console.log(s);
}
x(4,5,6)*/

/*let vet = ['bmw','mercedes','redbull'];
vet.forEach(x => console.log(x));*/

/* FILTRAR ELEMENTOS DE UM ARRAY E JOGAR NOUTRO ARRAY:
let vet = [3.5, 4.0, 5.5, 6.1,7.2,1.0,200];
let vet2 = [];
console.log(vet.filter(murilo => murilo > 5).map(murilo => vet2.push(murilo)));
console.log(vet2);*/
/*
let notas = [3,4,5,6,7,8,9,10];
let notasAltas = notas.filter(num => num > 4);
console.log(notasAltas);
console.log(typeof notasAltas)
console.log(typeof notas)*/

/*function productCreator(name, price) {
    return {
        name: name,
        price: price
    }
}
console.log(productCreator("Blusa", 500));
console.log(productCreator("Celular", 1500));*/

let f = (a) => {
    let total = 1;
    for(let i = a; i > 1; i--){
        total *= i;
    }
    return total
}
console.log(f(5))