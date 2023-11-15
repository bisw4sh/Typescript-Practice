// A curried function
let addd = (x: number) => (y: number) => x + y;

// Simple usage
addd(123)(456);

// partially applied
let addd123 = addd(123);

// fully apply the function
addd123(456);
console.log(addd123(456));