// Function to generate the Fibonacci sequence
function fibonacciSequence(n) {
    if (n <= 0) {

        // Throw an error for invalid input
        throw new Error("n must be a non-negative integer");
    } else if (n === 1) {
        return [0]; // Base case: Fibonacci sequence with n = 1, return [0]
    } else if (n === 2) {
        return [0, 1]; // Base case: Fibonacci sequence with n = 2, return [0, 1]
    } else {
        // Recursive call to generate the Fibonacci sequence
        const sequence = fibonacciSequence(n - 1); // Generate sequence for n-1
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]); // Add the sum of last two terms
        return sequence; // Return the generated sequence
    }
}

const n = parseInt(prompt("Enter a positive integer:")); // Prompt the user for input
console.log("The Fibonacci sequence up to the", n, "the term is:"); // Print the message

const result = fibonacciSequence(n); // Generate Fibonacci sequence

console.log("Fibonacci sequence is:", result); // Print the Fibonacci sequence