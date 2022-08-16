let numero = Number(prompt("Digite um número para saber sua tabuada"))
let multiplicador = 0

for(let i=1;i<=10;i++){
    multiplicador = numero*i;
    console.log(numero+" x "+i+" = "+multiplicador)
}