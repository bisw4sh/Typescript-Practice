type User = {
    name : string
    age : number
    class?: boolean
}

const user1 : User = {
    name : 'Biswash',
    age: 24
}

const printer = ( someone : User) : void => {
    console.log(`The person is ${someone.name} of age ${someone.age} with class ${someone?.class || 'no class'}`)
}

printer(user1)

type Gender = {
    sex : "pole" | "hole"
}

const noNonsence = ( data : Gender) : void => {

    if ( data?.sex === "pole"){
        console.log(`You're male`)
    }
    else{
        console.log(`You're female`)
    }
}

noNonsence({sex : "pole"})