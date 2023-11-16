type Per = {
  name: string;
};

const printName = (person?: Per) => {
  console.log(`Name is ${person!.name}`);
};

printName( {name : "Biswash"})
printName({name: ""})