"use strict";
const user1 = {
    name: 'Biswash Dhungana',
    age: 24,
    adult: true,
    remarks: 'self'
};
const user2 = {
    name: 'Jewelry Bonney',
    age: 12,
    adult: false
};
const printUser = (users) => {
    console.log(users.name, users.age, users.adult, users.remarks);
};
printUser(user1);
printUser(user2);
