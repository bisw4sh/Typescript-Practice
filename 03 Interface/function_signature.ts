interface Pers {
  name: string;
  age: number;
  speak(sentence: string): void;
}

const person1: Pers = {
  name: "John",
  age: 48,
  speak: (sentence) => console.log(sentence),
};
