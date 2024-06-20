alert('Boas vindas ao jogo de número secreto!');

let chute = prompt('Escolha um numero de 1 a 10!');
console.log('o numero do chute foi:', chute);

let numeroSecreto = 4;
console.log(numeroSecreto)

// se(if) o chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Voce acertou o numero secreto ${numeroSecreto} !`);
} else {
    alert('Voce errou, o numero secreto era:' + numeroSecreto);
}
