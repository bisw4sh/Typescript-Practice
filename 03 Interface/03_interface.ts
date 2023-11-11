type User = {
    name : string;
    age : number;
    adult : boolean;
    remarks? : string;
}

const user1: User = {
    name: 'Biswash Dhungana',
    age: 24,
    adult: true,
    remarks: 'self'
}

const user2: User = {
    name: 'Jewelry Bonney',
    age: 12,
    adult: false
}

const printUser = ( users: User): void => {
    console.log(users.name, users.age, users.adult, users.remarks)
}

printUser( user1 )
printUser( user2 )