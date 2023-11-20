const somatorioDivisiveis3e5 = require('./index.js');

test('somatorioDivisiveis3e5 retorna o somatório correto para um número dado', () => {
  expect(somatorioDivisiveis3e5(10)).toBe(23); 
  // O somatório dos valores divisíveis por 3 ou 5 inferiores a 10 é 3 + 5 + 6 + 9 = 23
  expect(somatorioDivisiveis3e5(15)).toBe(45);
   // O somatório dos valores divisíveis por 3 ou 5 inferiores a 15 é 3 + 5 + 6 + 9 + 10 + 12 = 45
});

test('somatorioDivisiveis3e5 retorna 0 para números menores ou iguais a 0', () => {
  expect(somatorioDivisiveis3e5(0)).toBe(0);
  expect(somatorioDivisiveis3e5(-5)).toBe(0);
});
