interface Foo {
  bar: number;
  bas: string;
}

var foo = {} as Foo;
foo.bar = 123;
foo.bas = "hello";

let x: unknown = "hello";
console.log((<string>x).length);

// let y = "hello";
//Double Casting
// console.log((y as unknown as number).length);