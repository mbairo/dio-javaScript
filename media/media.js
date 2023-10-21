const nota1 = 10;
const nota2 = 4;
const nota3 = 8;
let media = (nota1 + nota2 + nota3) / 3;
console.log('Sua média foi de:', media.toFixed(2));
if (media < 5) {
    console.log('Reprovado');
} else if ( media >= 5 && media <=7) {
    console.log('Recuperanção');
} else {
    console.log('Passou de semestre');
}