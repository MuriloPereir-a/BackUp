/*const bodyParser = require('body-parser')
const express = require('express')

const app = express()*/

const _velocidade = Symbol(/*é opcional essa descrição*/'velocidade');
class Carro{
    constructor(modelo){
        this.modelo = modelo;
        this[_velocidade] = 0;
        this.atual;
    }
    get velocidade(){
        return this[_velocidade]
    }
    acelerar(){
        if(this[_velocidade] < 250){
            for(let i = 0; i <= 250; i += 3){
                this[_velocidade] += 3;
                if(this[_velocidade] >= 250){
                    this[_velocidade] = 250;
                    this.atual = this[_velocidade];
                }
                console.log(this[_velocidade]);
            }
        }
    }
    desacelerar(){
        console.log(`---- DESACELERANDO ----`)
        if(this[_velocidade] > 0){
            for(let i = this.atual; i > 0; i -= 5){
                this[_velocidade] -= 5;
                console.log(this[_velocidade]);
                this.atual = this[_velocidade];
                console.log(`atual ${this.atual}`)
            }
        }
    }

}
let p1 = new Carro('Fusquinha');
p1.acelerar()
p1.desacelerar()
