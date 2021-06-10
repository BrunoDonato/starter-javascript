// 1. Declare uma variável de nome weight

let weight

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight)

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/

let name = "Bruno"
let age = 20
let stars = 4.8
let isSubscribed = true




// 4. A variável student abaixo é de que tipo de dado?
let student = {};

// 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
let student = {
     name: "Bruno",
     age: 20,
     weight: 91.5,
     isSubscribed: true,
}

/* 4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
    
*/
console.log(`${student.name}, de idade ${student.age}, pesa ${student.weight} kg.`)

/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = []

/* 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student
]

// 7. Coloque no console o valor da posição zero do Array acima

console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students

const leo = {
    name: "Leo",
    age: 13,
    weight: 60,
    isSubscribed: true,
}

students = [
    student,
    leo,
]

// 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

// A resposta será undefined, porque a variável a ainda não está criada, após ela sofrer o hoisting, ela vai subir o " var a", e somente depois irá receber o 1.