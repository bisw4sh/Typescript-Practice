class Foo {
  foo = 123;
  common = "123";
}

class Bar {
  bar = 123;
  common = "123";
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // OK
    // console.log(arg.bar); //! Error!
  }
  if (arg instanceof Bar) {
    // console.log(arg.foo); //! Error!
    console.log(arg.bar); // OK
  }

  console.log(arg.common); // OK
//   console.log(arg.foo); //! Error!
//   console.log(arg.bar); //! Error!
}

doStuff(new Foo());
doStuff(new Bar());