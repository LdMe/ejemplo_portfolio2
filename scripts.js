let frutas = ["manzana","pera","platano","melon"];
 //             0         1           2       3


// for(let i = 0;i < frutas.length;i++){
//     if(frutas[i] !== "pera"){
//         console.log(frutas[i])
//     }else {
//         console.log("no me gusta esta fruta");
//     }
// }

// for(let i = 1; i<=10;i++){
//     console.log(i * 2);
// }

const numeroFinal = 100;

let resultado = 1;
for(let i = 1; i<=numeroFinal; i++){
    //resultado = resultado + i;
    resultado *= i;
}
console.log("El valor del factorial es:",resultado);

// fizzbuzz
// nos dan un numero y tenemos que mostrar todos los numeros anteriores, incluyendo este numero
// pero si el numero es multiplo de 3 mostramos "Fizz", si es multiplo de 5 mostramos "Buzz"
// si es multiplo de 3 y 5 mostramos "FizzBuzz"

const numeroFizzBuzz = 20;

for(let i = 1;i <= numeroFizzBuzz; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else {
        console.log(i);
    }
}

for(let i = 1;i <= numeroFizzBuzz; i++){
    let result ="";
    if(i % 3 === 0){
        result +="Fizz";
    }

    if(i % 5 === 0){
        result += "Buzz";
    }
    
    if(i % 3 !== 0 && i %5 !== 0){
        result = i;
    }
    console.log(result);
}



