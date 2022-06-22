function fizzBuzz(n: number): string[] {
  const a = Array.from({ length: n }, (_, i) => i + 1);
  return a.map((e) => {
    if (e % 15 === 0) { return 'FizzBuzz'; } if (e % 5 === 0) { return 'Buzz'; } if (e % 3 === 0) { return 'Fizz'; } return e.toString();
  });
}

export default fizzBuzz;
