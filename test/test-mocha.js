const assert = require('chai').assert;
//const soma1mais1 = require('../mocha').soma1mais1;

describe('Testes', function(){
    it('1 + 1 é igual a 2',function(){
        assert.equal(1+1, 2);
    });

    it('1 + 1 não é igual a 7',function(){
        assert.notEqual(1+1, 7);
    });

    it('No array [1,2,3,4,5] o elemento 3 está contido',function(){
        assert.include([1,2,3,4,5], 3);
    });

    it('No array [6,7,8,9] o elemento TDD é Top não está contido',function(){
        assert.notInclude([6,7,8,9], 'TDD é Top');
    });

    it('O objeto { attr1: 13 } possui o atributo attr1', function(){
        assert.hasAllKeys({ attr1: 13}, 'attr1');
    });

    it('O objeto { attr3: 13 } não possui o atributo attr1', function(){
        assert.doesNotHaveAnyKeys({ attr3: 13}, 'attr1');
    });
});