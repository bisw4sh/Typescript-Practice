interface Adderr {
  a: number;
  b: number;
}

const AdditionOpp = ({ a, b }: Adderr): number => {
  //   a = "hello"; //! Error: cannot assign `string` to a `number`
  return a + b;
};

console.log(AdditionOpp({ a: 10, b: 15 }));