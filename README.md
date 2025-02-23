# Unhandled Exception in TypeScript Arithmetic Functions

This repository demonstrates a common error in TypeScript: failing to handle exceptions properly. The `bug.ts` file contains a set of arithmetic functions (`add`, `subtract`, `multiply`, `divide`). The `divide` function correctly throws an error when division by zero is attempted. However, the main part of the code does not include a `try...catch` block to handle this exception, resulting in the program crashing if `divide` is called with a zero divisor.

The solution, shown in `bugSolution.ts`, addresses this by wrapping the call to `divide` in a `try...catch` block.  This allows the program to gracefully handle the exception and continue execution.