let i = 0;
let sum = 0;

while (i <= 10) {
    if (i % 2 !== 0) { // Check if it's odd
        sum += i;
        console.log('Odd number:', i);
        console.log('Sum of odd numbers:', sum);
    }
    i++; // Increment normally
}