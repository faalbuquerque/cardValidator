const assert = require('chai').assert;
const cardSearch = require('../lib/index');
const cardTest = cardSearch.cardValidator;

describe('Testes da funcao cardValidator', () => {

    it('Se o numero do cartao for menor que o necessario deve retornar false', () => {
	
        assert.equal(cardTest('532117112479119'), false);
		
    });

    it('Se o numero do cartao for maior que o necessario deve retornar false', () => {
	
        assert.equal(cardTest('45321171124791190'), false);
		
    });

    it('Se o numero do cartao for invalido', () => {
	
        assert.equal(cardTest('3532117112479119'), false);
		
    });

    it('Se o numero do cartao for valido deve retornar true', () => {
	
        assert.equal(cardTest('4532117112479119'), true);
		
    });

    it('Se forem digitadas letras deve retornar false', () => {
	
        assert.equal(cardTest('4532a1b112479119'), false);
		
    });

    it('Se forem digitadas caracteres especiais deve retornar false', () => {
	
        assert.equal(cardTest('4532?1b11.247911{9'), false);
		
    });

    it('Se houver espaco em branco deve retornar false', () => {
	
        assert.equal(cardTest('453 211 711 247 911 9'), false);
		
    });

    
});