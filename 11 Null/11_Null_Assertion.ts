//! Just like casting, this can be unsafe and should be used with care.

function getValue(): string | undefined {
  return "hello";
}
let _value = getValue();
console.log("value length: " + _value!.length);
