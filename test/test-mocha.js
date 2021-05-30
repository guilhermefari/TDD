const assert = require('chai').assert;
//const soma1mais1 = require('../mocha').soma1mais1;

describe('Testes', function(){
    it('1 + 1 é igual a 2',function(){
        assert.equal(1+1, 2);
    });
    it('1 + 1 não é igual a 7',function(){
        assert.notEqual(1+1, 7);
    });
});