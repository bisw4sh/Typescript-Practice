let _obj = {
  toString() {
    console.log("toString called");
    return "Hello";
  },
};

let fuu: any = {};
fuu[_obj.toString()] = "World"; // toString called
console.log(fuu[_obj.toString()]); // toString called, World
console.log(fuu["Hello"]); // World