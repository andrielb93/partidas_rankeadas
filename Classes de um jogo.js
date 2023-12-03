/*class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    assar(){
        console.log("Bolo assando de " + this.saborDaMassa)
    }


}

let boloFesta = new formaDeBolo("chocolate" , "nutella")
let boloPremium = new formaDeBolo("baunilha" , "coco")

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()*/


class char {
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo

        perClasse(tipo)
    } 
}   

function perClasse(tipo){
    switch(tipo){
        case ("guerreiro"):
        console.log(`O ${tipo} atacou usando espada`)
        break;

        case ("mago"):
        console.log(`O ${tipo} atacou usando magia`)
        break;

        case ("monge"):
        console.log(`O ${tipo} atacou usando artes marciais`)
        break;

        case ("ninja"):
        console.log(`O ${tipo} atacou usando shuriken`)
        break;
    
        default:
        break;
    }
}

let personagem1 = new char("smith","105","guerreiro")