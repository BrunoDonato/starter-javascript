/* 
    function() constructor

        * expressão new
        * criar um novo objeto
        * this keyword

*/

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando "
    }
}
const bruno = new Person("Bruno")
const leo = new Person("Leo")

console.log(bruno.walk())
console.log(leo.walk())