import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './index.js';

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize("anna")).toBe("Anna");
  });
});

describe('reverseString', () => {
  test('should reverse the string', () => {
    expect(reverseString("Hello, world!")).toBe("!dlrow ,olleH");
  });
});

describe('calculator', () => {
  test('should add two numbers', () => {
    expect(calculator.add(2, 4)).toBe(6);
  });

  test('should subtract two numbers correctly', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(3, 5)).toBe(-2);
  });

  test('should multiply two numbers correctly', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
  });

  test('should divide two numbers correctly', () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrowError('Cannot divide by zero');
  });
});

describe('caesarCipher', () => {
  test('should encrypt a string with a positive shift', () => {
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
    expect(caesarCipher('javascript', 10)).toBe('tkfkcmbszd');
  });

  test('should encrypt a string with a negative shift', () => {
    expect(caesarCipher('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
    expect(caesarCipher('tkfkcmbszd', -10)).toBe('javascript');
  });

  test('should preserve non-alphabetic characters', () => {
    expect(caesarCipher('Hello, World! 123', 5)).toBe('Mjqqt, Btwqi! 123');
    expect(caesarCipher('javascript 123!@#', -10)).toBe('zqlqishyfj 123!@#');
  });
});

describe('analyzeArray', () => {
  test('should return the correct object for a valid array of numbers', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test('should throw an error if the input is not an array', () => {
    expect(() => analyzeArray(123)).toThrowError('Input must be a non-empty array of numbers');
    expect(() => analyzeArray('hello')).toThrowError('Input must be a non-empty array of numbers');
  });

  test('should throw an error if the input array is empty', () => {
    expect(() => analyzeArray([])).toThrowError('Input must be a non-empty array of numbers');
  });

  test('should throw an error if the input array contains non-number values', () => {
    expect(() => analyzeArray([1, 2, 3, 'a'])).toThrowError('Input must be a non-empty array of numbers');
    expect(() => analyzeArray([1, 2, 3, null])).toThrowError('Input must be a non-empty array of numbers');
  });
});