describe('Hello ironhack function', function () {
    it('Should be a function', function () {
        expect(typeof helloIronhack).toBe('function');
    });
    it('Should return greeting', function () {
        expect(helloIronhack()).toEqual('hello ironhack');
    });
});

// Syntax
// describe - this is called a suite, meaning a group of tests
// it - this is called a spec (specification) 
// expect - the expectation where you check if the result is as expected
// toEqual() - a matcher 