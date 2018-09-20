const functions = require('../src/index.js');

describe ('Multiply', function() {
    it('takes 2s and multiplies by 5', function() {
        const input = [2,2,2,2,2];
        const expectedOutput= [10,10,10,10,10];
    
        const result = functions.multiply(input,5);
        expect(result).toEqual(expectedOutput);
    }) 
    
    it('tests for purity', function() {
        const input = [2,2,2,2,2];
        const expectedInput = [2,2,2,2,2];
    
        const expectedOutput= [10,10,10,10,10];
        const result = functions.multiply(input,5);
    
        expect(result).toEqual(expectedOutput);
        expect(input).toEqual(expectedInput);
    }) 
})

describe ('Absolute Numbers', function() {
    it('making numbers absolute', function() {
        const input = [2,-2,2,-2,2];
        const expectedOutput= [2,2,2,2,2];
    
        const result = functions.absolute(input);
        expect(result).toEqual(expectedOutput);
    }) 
    
    it('tests for purity', function() {
        const input = [2,-2,2,-2,2];
        const expectedInput = [2,-2,2,-2,2];
    
        const expectedOutput= [2,2,2,2,2];
        const result = functions.absolute(input);
    
        expect(result).toEqual(expectedOutput);
        expect(input).toEqual(expectedInput);
    }) 
})

describe ('concatNames', function() {
    it('concatinate first and last names - output array', function() {
        const input = [
            {firstName: 'Joe',
            lastName: 'Blogs'}
        ,
            {firstName: 'Bill',
            lastName: 'Withers'}    
        ];
        const expectedOutput= ['Joe Blogs','Bill Withers'];
    
        const result = functions.concatNames(input);
        expect(result).toEqual(expectedOutput);
    }) 
    
    it('tests for purity', function() {
        const input = [
            {firstName: 'Joe',
            lastName: 'Blogs'}
        ,
            {firstName: 'Bill',
            lastName: 'Withers'}    
        ];
        const expectedInput = [
            {firstName: 'Joe',
            lastName: 'Blogs'}
        ,
            {firstName: 'Bill',
            lastName: 'Withers'}    
        ];
    
        const expectedOutput= ['Joe Blogs','Bill Withers'];
        const result = functions.concatNames(input);
    
        expect(result).toEqual(expectedOutput);
        expect(input).toEqual(expectedInput);
    }) 
})

describe('numbersToStrings', function() {
    it('convert numbers in array to strings', function() {
        const input = ['five', 5, 'six', 6];
        const expectedOutput = ['five','5', 'six','6'] ;
        const result = functions.numbersToStrings(input);

        expect(result).toEqual(expectedOutput);
    })
    it('tests for purity', function() {
        const input = ['five', 5, 'six', 6];
        const expectedInput =  ['five', 5, 'six', 6];

        const expectedOutput = ['five','5', 'six','6'] ;
        const result = functions.numbersToStrings(input);
    
        expect(result).toEqual(expectedOutput);
        expect(input).toEqual(expectedInput);
    })

})


describe('sort by length', function() {
    it('sort array of strings by length', function() {
        const input = ['one','two','three','million','five'];
        const expectedOutput = ['one','two','five','three','million'] ;
        const result = functions.sortByLength(input);

        expect(result).toEqual(expectedOutput);       
    })

    it('purity test', function() {
        const input = ['one','two','three','million','five'];
        const expectedInput =  ['one','two','three','million','five'];

        const expectedOutput = ['one','two','five','three','million'] ;
        const result = functions.sortByLength(input);

        expect(result).toEqual(expectedOutput);
        expect(input).toEqual(expectedInput);
    
    })

})