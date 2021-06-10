// objeto or object

const person = {
    name: 'Bruno',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos e ${person.weight} de altura`)

// array

const animals = [
    'Lion',
    'Monkey',

    {
        name: 'Cat',
        age: 3
    }
]

// acessar valores
console.log(animals[0].name)

// total de elementos do array
console.log(animals.length)