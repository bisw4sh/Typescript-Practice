type Adder = (a: number, b: number) => number;
const AdditionOp: Adder = (a, b) => {
//   a = "hello"; //! Error: cannot assign `string` to a `number`
  return a + b;
};