interface Animal1 {
  name: string;
}

interface Bear1 extends Animal1 {
  honey: boolean;
}

interface Animal1{
    tail: boolean;
}

const bear1: Bear1 = {
  name: "Winnie",
  honey: true,
  tail: true
};
