function fizzBuzz(num) {
    if (num % 15 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz'
    return num;
}

// now while running the tests we could refactor the
// code with confidence that we didn't break anything

/*
function fizzBuzz(num) {
    let string = '';
    if (num % 3 == 0) string += 'fizz';
    if (num % 5 == 0) string += 'buzz';
    return string || num;
}
*/