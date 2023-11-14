//! Partial changes all the properties in an object to be optional.
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

//! Required changes all the properties in an object to be required.
interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000, // `Required` forces mileage to be defined
};

//! Record is a shortcut to defining an object type with a specific key type and value type.
const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};

// Record<string, number> is equivalent to { [key: string]: number }

//! https://www.w3schools.com/typescript/typescript_utility_types.php for more info
