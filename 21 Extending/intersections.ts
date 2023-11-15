type Animal2 = {
  name: string;
};

type Bear2 = Animal2 & {
  honey: boolean;
};

const bear2: Bear2 = {
  name: "Winnie",
  honey: true,
};

// type Animal2 = {
//   tail: boolean
// }
//! ERROR: Duplicate identifier 'Animal'.