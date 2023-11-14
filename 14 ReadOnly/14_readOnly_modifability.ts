let foooo: {
  readonly bar: number;
} = {
  bar: 123,
};

function iMutateFoo(foooo: { bar: number }) {
  foooo.bar = 456;
}

iMutateFoo(foooo); // The foo argument is aliased by the foo parameter
console.log(foooo.bar); // 456!

//TODO: This is the example that shows how it isn't modifiable
interface Fooooo {
    readonly barr: number;
}
let fooooo: Fooooo = {
    barr: 123
};

function iTakeFoo(fooooo: Fooooo) {
    // fooooo.barr = 456; //! Error! bar is readonly
}

iTakeFoo(fooooo); // The foo argument is aliased by the foo parameter