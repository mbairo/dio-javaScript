const precoGasolina = 6.66;
const precoEtanol = 5.79;
let tipoCombustivel = 'Gasolina'
let kmPorLitro = 10;
let distanciaPercorrida = 100;

console.log('--- Progrma para calcular o gasto de uma viagem de carro ---')


if (tipoCombustivel === 'Gasolina') {
    
    console.log('Total gasto utilizando Gasolina: R$',(distanciaPercorrida/kmPorLitro) * precoGasolina.toFixed(2));
} else if (tipoCombustivel === 'Etanol') {
    console.log('Total gasto utilizando Etanol: R$',(distanciaPercorrida/kmPorLitro)*precoEtanol.toFixed(2));
} else {
    console.log('Erro ao informar tipo de gasolina!');
}
