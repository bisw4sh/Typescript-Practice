enum Capital {
  India = "New Delhi",
  USA = "Washington",
  Germany = "Berlin",
  England = "London",
}

console.log("The values initialized by string enum is as follows:");
console.log(Capital.India);
console.log(Capital.USA);
console.log(Capital.Germany);
console.log(Capital.England);


//can't assign 
enum Cards {
  A = 1,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  J,
  Q,
  K,
}

//In cards logic false, but here true
console.log(Cards.K > Cards.A)

let card: Cards = Cards.A;
console.log(card); // Output: 1

enum EvidenceTypeEnum {
  UNKNOWN = "",
  PASSPORT_VISA = "passport_visa",
  PASSPORT = "passport",
  SIGHTED_STUDENT_CARD = "sighted_tertiary_edu_id",
  SIGHTED_KEYPASS_CARD = "sighted_keypass_card",
  SIGHTED_PROOF_OF_AGE_CARD = "sighted_proof_of_age_card",
}
``
// Where `someStringFromBackend` will be '' | 'passport_visa' | 'passport' ... etc.
const someStringFromBackend = "passport_visa";
const value = someStringFromBackend as EvidenceTypeEnum; 

// Sample use in code
if (value === EvidenceTypeEnum.PASSPORT){
    console.log('You provided a passport');
    console.log(value); // `passport`
}

enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
namespace Weekday {
    export function isBusinessDay(day: Weekday) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true;
        }
    }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;
console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun)); // false