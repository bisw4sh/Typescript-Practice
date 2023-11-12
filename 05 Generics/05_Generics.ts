type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const names: StringArray = ["Biswash", "Bikram", "Bigyan"];
const roll_no: NumberArray = [8, 7, 6];
const namesObj: ObjectWithNameArray = [
  { name: "Biswash" },
  { name: "Bikram" },
  { name: "Bigyan" },
];

console.log(names)
console.log(roll_no)
console.log(namesObj)