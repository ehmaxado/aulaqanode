const test = require('tape')
const index = require('./index')

test('Teste 1', (t) => {
    t.assert(index.validarumero(-10) === 'negativo',
    "Validar se funciona com negativo")
    t.end()
})

test('Teste 2', (t) => {
    t.assert(index.validarumero(0) === 'zero',
    "Validar se funciona com zero")
    t.end()
})

test('Teste 3', (t) => {
    t.assert(index.validarumero(100) === 'positivo',
    "Validar se funciona com positivo")
    t.end()
})

test('Teste 4', (t) => {
    t.assert(index.cordisponive('branco') === 1,
    "Cor disponível")
    t.end()
})

test('Teste 5', (t) => {
    t.assert(index.cordisponive('cinza') === 0,
    "Cor não disponível")
    t.end()
})

test('Teste 6', (t) => {
    t.assert(index.cordisponive('preto') === 1,
    "Cor disponível")
    t.end()
})

test('Teste 7', (t) => {
    t.assert(index.numeroprimo(11) === 0,
    "É primo")
    t.end()
})

test('Teste 8', (t) => {
    t.assert(index.numeroprimo(8) === 1,
    "não é primo")
    t.end()
})

test('Teste 9', (t) => {
    t.assert(index.numeroprimo(5) === 0,
    "é primo")
    t.end()
})