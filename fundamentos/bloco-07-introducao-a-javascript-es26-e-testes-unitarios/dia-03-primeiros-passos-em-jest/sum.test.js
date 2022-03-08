const sum  = require('./sum.js');

describe('The function sum', () => {
    it('Retorna o resultado da soma', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).tobe(0);
    });

    it('Disparar um error caso a funcão receba uma string', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    });


});