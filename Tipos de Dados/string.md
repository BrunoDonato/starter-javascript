# String

* Cadeia de caracteres
 "" // aspas duplas
 '' // aspas simples
 `` // template literals ou template strings

 ```js
 /* "" // aspas duplas, posso usar aspas simples dentro das aspas duplas */
console.log(" 'Bruno' 'Amaral' ")

/* '' // aspas simples, posso usar aspas duplas dentro das aspas simples */
console.log(' "Bruno" "Amaral" ')

/* `` // template literals ou template strings, posso usar aspas duplas e aspas simples dentro das crases, posso quebrar linha, posso colocar expressões de linguagem */
console.log(` "'Bruno' 'Amaral'" `)

console.log(` "'Bruno' 

'Amaral'" `)

console.log(`Bruno Amaral ${1 + 1}`)
 ```