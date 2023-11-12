interface Student {
  roll_no: number;
  name: string;
  grade?: "A" | "B" | "C" | "D";
}

const bigyan: Student = {
  roll_no: 8,
  name: "Biswash",
};

const bikram: Student = {
  roll_no: 8,
  name: "Biswash",
  grade: "B",
};

const biswash: Student = {
  roll_no: 8,
  name: "Biswash",
  grade: "A",
};

console.log(biswash, bigyan, bikram);

type gender = "male" | "female" | "other embrassments";

const myGender: gender = "male";

console.log(myGender)

const addNumber = ( first : number, second : number): number => first + second

const addNum = ( first : number, second : number): number =>
{
  if( first === 0) 
    return 0;

  return first + second;
} 

console.log(addNumber(0,5))
console.log(addNumber(6, 6))
console.log(addNum(0,5))
console.log(addNum(6,5))
