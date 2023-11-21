/* Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21.... */
let timesExecuted = 0;

const MathX = {
  findNthFibonacci: (n, sequence = [1, 1]) => {
    timesExecuted++;
    if (n <= 0) {
      return 0; // пометка: В некоторых теориях опускают 0 из последовательности, что мы тоже сделаем, дабы упростить наши условия. Также опускаем отрицательные числа, так как это совсем отдельная история и подход
    } else if (n <= 2) {
      return 1;
    }

    const lastInSequence = sequence[sequence.length - 1]; // обозначаем последний элеиент в списке
    const preLastInSequence = sequence[sequence.length - 2]; // предпоследний элемент

    if (sequence.length === n) {
      return sequence[sequence.length - 1]; // если реурсия дошла до n-ого числа, возвращаем результат
    }

    sequence.push(preLastInSequence + lastInSequence); // иначе добавляем следующее число фибоначчи в массив

    return MathX.findNthFibonacci(n, sequence); // вызываем рекурсию.
  },

  FibSequence: (n, sequence = [1, 1]) => {
    if (n < 2) {
      return 1;
    }

    const lastInSequence = sequence[sequence.length - 1];
    const preLastInSequence = sequence[sequence.length - 2];

    if (sequence.length === n) {
      return sequence;
    }

    sequence.push(preLastInSequence + lastInSequence); // практически то же самое, что и в первом методе, только возвращаем сам массив

    return MathX.FibSequence(n, sequence);
  },

  findNthPrime: (function () {
    // Helper функция для проверки является ли число простым.
    function isPrime(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false; // возвращаем false, если число делится на другие числа, кроме себя,
        }
      }
      return num > 1; // 1 делится на себя и только на себя, поэтому исключаем вариант
    }

    return function (n) {
      const primes = [];
      let currentNum = 2; // также начинаем с 1

      while (primes.length < n) {
        if (isPrime(currentNum)) {
          primes.push(currentNum); // проходимся по массиву и добавляем туда простые числа, после проверки
        }
        currentNum++; // итерация для цилка
      }

      return primes[n - 1]; // возвращаем последний элемент, который является искомым, после остановки цикла
    };
  })(),

  findPrimesUpTo: (function () {
    function isPrime(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    }

    return function (n) {
      const primes = [];
      let currentNum = 2;

      while (primes.length < n) {
        if (isPrime(currentNum)) {
          primes.push(currentNum);
        }
        currentNum++;
      }

      return primes; // все то же самое, возвращаем сам массив
    };
  })(),
};

// примеры
console.log(MathX.findNthFibonacci(40)); //
// проверим количество раз, когда вызывается эта функция с помощью рекурсии
console.log(
  `кол-во вызовов функция нахождения н-ого числа фибоначчи: ${timesExecuted}`
); // 39

console.log(MathX.FibSequence(9)); // [1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(MathX.findNthPrime(5)); // 11
console.log(MathX.findPrimesUpTo(5)); //  [ 2, 3, 5, 7, 11 ]
