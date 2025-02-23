function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

let result = add(5, 3); // 8
result = subtract(10, 4); // 6
result = multiply(7, 2); // 14

//This is the improved solution
try {
  result = divide(9, 3); // 3
  result = divide(10, 0);
} catch (e) {
  console.error("Error: ", e.message);
  result = 0; // Or handle the error as needed
}
console.log(result); // Output will be 3, then Error message, then 0