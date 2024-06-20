alert('Boas vindas ao jogo de número secreto!');

let numeroSecreto = 4;
console.log(numeroSecreto)
let chute = prompt('Escolha um numero de 1 a 10!');

// se(if) o chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Voce acertou o numero secreto ${numeroSecreto} !`);
} else {
    alert('Voce errou, tente de novo...');
}
