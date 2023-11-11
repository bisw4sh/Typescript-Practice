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
