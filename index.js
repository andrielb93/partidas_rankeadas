let vitorias = 15
let derrotas = 7

let saldo = vitorias - derrotas

rank(saldo)

function rank(saldo){

    switch(true){
        case (saldo < 10):
            classe = "Ferro"
            break;
    
            case (saldo >= 11 && saldo <= 20):
            classe = "Bronze"
            break;
    
            case (saldo >= 21 && saldo <= 50):
            classe = "Prata"
            break;
    
            case (saldo >= 51 && saldo <= 80):
            classe = "Ouro"
            break;
    
            case (saldo >= 81 && saldo <= 90):
            classe = "Diamante"
            break;
    
            case (saldo >= 91 && saldo <= 100):
            classe = "Lendário"
            break;
    
            case (saldo >= 101):
            classe = "Imortal"
            break;
    }
    
    return classe

}

console.log("O Herói tem saldo de " + saldo + " e está no nível de " + classe);