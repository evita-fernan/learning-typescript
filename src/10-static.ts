class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item));
  }
}

console.log(MyMath.PI);

console.log('Soy max', MyMath.max(1, 2, 4, 5, 8, 9));

const numbers = [1, 7, 5, 0, 8, 9, 12];
console.log('Soy max en forma de array', MyMath.max(...numbers));

console.log('Soy max', MyMath.max(-4, -5, -8, -9));
