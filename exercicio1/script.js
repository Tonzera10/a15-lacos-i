let coxinha = prompt("Deseja comer uma coxinhas? 'S(sim)/N(não)'").toUpperCase();
let conta = 0;

while(coxinha==="S"){
    conta++
    coxinha = prompt("Deseja comer mais uma coxinhas? 'S(sim)/N(não)'").toUpperCase();
}
console.log("O valor total é: R$ "+ conta*2.5)