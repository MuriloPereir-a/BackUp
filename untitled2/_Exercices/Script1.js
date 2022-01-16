
/*somando apenas os menores de 20:
var c = [1,2,3,4,5,6,7,8,21,4,16]
var sum = 0;
var x = c.filter(value => value < 20).map(value => sum += value);
console.log(sum);*/

/*somando com "reduce":
var c = [1,2,3,4,5,6,7,8,21,4,16,3]
var z = c.reduce((sum, next) => sum += next);
console.log(z)*/

/*Acrescentando +1 aos ímpares:
var c = [1,2,3,4,5,6,7,8,21,4,16,15,17];
console.log(c);
var impares = c.filter(nums => nums %2 != 0).map(nums => nums + 1)
console.log(impares);*/
//var c = [1,2,3,4,5,6,7,8,21,4,16]
/*
const obj = JSON.parse('{"name":"MurilO","age":23}');
console.log(obj);
console.log(typeof obj);*/

/*var vet = [1,2,3,4,5,6,7,8,9,10];
vet.forEach(i =>{
    if(i % 2 == 1){
        i = 0
    }
    console.log(i)
})
console.log(vet.reverse());
*/
/*function getLetter(s) {
    let letter;
    let char = s.charAt(0);
    console.log(char);
    // Write your code here
    switch(char){
        case 'a': case 'e': case 'i': case 'o': case 'u':
            letter = 'A';
            break
        case 'b': case 'c': case 'd': case 'f': case 'g':
            letter = 'B';
            break
        case 'h': case 'j': case 'k': case 'l': case 'm':
            letter = 'C';
        default:
            letter = 'D';
    }

    return console.log(letter);
}
getLetter('hdhsd')*/

/*function vowelsAndConsonants(s) {
    let v = [], c = [];
    for(let i = 0; i < s.length; i++){
        let char = s.charAt(i);
        if(char == 'a' || char == 'e' ||
            char == 'i' || char == 'o' || char == 'u'){
            v += char;
        }else{
            c += char;
        }
    }
    for(let j = 0; j < v.length; j++){
        console.log(v.charAt(j));
    }
    for(let x = 0; x < c.length; x++){
        console.log(c.charAt(x));
    }
}
vowelsAndConsonants('java')*/


/*let x = 7;
try{
    if(x < 6) throw `Não aceitamos x menor que 6`; console.log(x);
}catch (e){
    console.log(`erro: ${e}`)
}*/
/*
function reverseString(s) {
    try{
        console.log(s.split('').reverse().join(''));
    }
    catch(e){
        console.log(e.message)
        console.log(s)
    }
}
reverseString(123)*/
function fata(fatorial){
    let tot = 1;
    for(let i = fatorial; i > 1; i++){
        tot *= i
    }
    return console.log(tot);
}
fata(5)