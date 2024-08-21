export function capitalize(myString) {
  return myString.charAt(0).toUpperCase() + myString.slice(1);
};

export function reverseString(myString) {
  return myString.split('').reverse().join('');
};

export const calculator = {
  add: function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('a and b must be numbers');
    };

    return a + b;
  },

  subtract: function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('a and b must be numbers');
    };

    return a - b;
  },

  multiply: function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('a and b must be numbers');
    };

    return a * b;
  },

  divide: function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('a and b must be numbers');
    };

    if (b === 0) {
      throw new Error("Cannot divide by zero");
    };

    return a / b;
  }
};

export function caesarCipher(str, num) {
  let result = '';
  if (num < 0) {
    num = 26 + (num % 26);
  }

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      const newCharCode = ((charCode - 65 + num) % 26) + 65;
      result += String.fromCharCode(newCharCode);
    } else if (charCode >= 97 && charCode <= 122) {
      const newCharCode = ((charCode - 97 + num) % 26) + 97;
      result += String.fromCharCode(newCharCode);
    } else {
      result += str.charAt(i);
    }
  };

  return result;
};

export function analyzeArray(array) {
  if (!Array.isArray(array) || array.length === 0 || array.some(item => typeof item !== 'number')) {
    throw new Error('Input must be a non-empty array of numbers');
  }

  const sum = array.reduce((acc, val) => acc + val, 0);
  const average = sum / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);

  return {
    average,
    min,
    max,
    length: array.length,
  };
}