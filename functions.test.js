const testFunctions = require('./functions')
const { greeting } = require('./functions')

test('Return two test', () => {
    expect(testFunctions.returnTwo()).toBe(2)
})

test('Greeting Test', () => {
    expect(testFunctions.greeting('Jill')).toBe('Hello Jill.')
})


describe('Math Functions', () => {
    test('Add Test', () => {
        expect(testFunctions.add(4, 2)).toBe(6)
    })
    
    test('Multiply Test', () => {
        expect(testFunctions.multiply(5, 3)).toBe(15)
    })
    
    test('Divide Test', () => {
        expect(testFunctions.divide(24, 6)).toBe(4)
    })
    
    test('Subtract Test', () => {
        expect(testFunctions.subtract(9,1)).toBe(8)
    })
})
