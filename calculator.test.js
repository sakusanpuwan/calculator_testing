const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 50000;
    actual = sum(10000,40000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -10 ;
    actual = sum(-3,-7);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 10;
    actual = sum(0,10);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract one number from another', () => {
    expected = 7;
    actual = subtract(10,3);
    expect(actual).toBe(expected);
  })

  test('can subtract a negative number from a positive', () => {
    expected = 25;
    actual = subtract(20,-5);
    expect(actual).toBe(expected);
  })

  test('can subtract a negative number from a negative', () => {
    expected = 7;
    actual = subtract(-3,-10);
    expect(actual).toBe(expected);
  })

});

describe('multiply', () => {
  test('can multiply two numbers together', () => {
    expected = 50;
    actual = multiply(5,10);
    expect(actual).toBe(expected);
  })
});

describe('divide', () => {
  test('can divide two numbers', () => {
    expected = 6;
    actual = divide(30,5);
    expect(actual).toBe(expected);
  })

  test('can divide by zero', () => {
    expected = Infinity;
    actual = divide(10,0);
    expect(actual).toBe(expected);
  })
});

describe('modulus', () => {
  test('can return remainder', () => {
    expected = 3;
    actual = modulus(33,5);
    expect(actual).toBe(expected);
  })

});

describe('even', () => {
  test('can check if even number is even number',() => {
    expected = true;
    actual = even(32);
    expect(actual).toBe(expected);
  })

  test('can check if odd number is even number', () => {
    expected = false;
    actual = even(45);
    expect(actual).toBe(expected);
  })

  test('can check if negative even number is even number', () => {
    expected = true;
    actual = even(-42);
    expect(actual).toBe(expected);
  })
});

describe('odd', () => {
  test('can check if odd number is odd number', () => {
    expected = true;
    actual = odd(75);
    expect(actual).toBe(expected);
  })

  test('can check if even number is odd number', () => {
    expected = false;
    actual = odd(10);
    expect(actual).toBe(expected);
  })
});
