const { sum, myRemove } = require('./sum.js');

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

describe('Testa a funcão myRemove', () => {
    it('Retorna a cópia do array removendo o item', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});
