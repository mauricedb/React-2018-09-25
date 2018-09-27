import Calculator from './Calculator';

let calc;


describe('The calculator', () => {
    beforeAll(() => {
    //   console.log('create calculator');
      calc = new Calculator();
    });

    describe('Addition', () => {

        test('Can add 0 + 0', () => {
            const sum = calc.add(0, 0);
            expect(sum).toBe(0);
        });
        
        test('Can add 1 + 1', () => {
            const sum = calc.add(1, 1);
            expect(sum).toBe(2);
        });
    })

    describe('Subtraction', () => {

        test('Can subtract 1 - 1', () => {
            const sum = calc.subtract(1, 1);
            expect(sum).toBe(0);
        });
    })
})

