//Domanda numero 1:
//    un'algoritmo è una serie di istruzioni atta a risolvere un problema date le richieste; esempio: dati 2 numeri, 
//    creami un algoritmo che ne calcoli la somma, la sottrazione, la moltiplicazione e la divisione .

let nr1 = 2
let nr2 = 3

somma = nr1+nr2;
sottrazione = nr1-nr2
moltiplicazione = nr1 * nr2
divisione = nr1 / nr2

console.log (somma)
console.log (sottrazione)
console.log (moltiplicazione)
console.log (divisione)

// fine domanda 1 

//Domanda numero 2:
//      una variabile è un contenitore di dati (che in informatichese si traduce nello spazio di memoria dedicato a conterere questi dati); questo contenitore, tramite operazioni logiche
//      aritmetiche e semantice, può subire variazioni a seconda delle necessità; la variabile NON può essere dichiarata 2 volte ma può esssere richiamata n volte. Si dichiara con "let"
//      le variabili non sono tipizzate quindi let può assumere valori interi, float e stringhe

let variabileContenenteNome = "Catalin"
let variabileContenenteCognome = "Radoi"
let variabileContenenteNomeIntero = variabileContenenteNome +" "+ variabileContenenteCognome

console.log(variabileContenenteNomeIntero); //stamperà "Catalin Radoi"

//Domanda numero 3:

//      undefined e null NON sono la stessa cosa in quanto undefined è come se fosse una ciotola vuota a disposizione ma non sul tavolo, mentre null la ciotola è sul tavolo ma vuota
let variabile_undefined
console.log(typeof(variabile_undefined))
variabile = 2 
console.log(typeof(variabile))