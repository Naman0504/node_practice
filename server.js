var fs = require('fs');
var os = require('os');
console.log("SERRVER FILE");
const notes = require('./notes.js')

const age = notes.age;
console.log(age)

var res = notes.addNumber(age + 20,20);
console.log(res)

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt','HI  ' + user.username + '.\n', ()=>{
//     console.log("file is created")
// })


const jsonString = '{"name": "Naman", "age":"24"}';
const jsonObject = JSON.parse(jsonString);
console.log("Object : ",jsonObject);

var jsonString2 = JSON.stringify(jsonObject);
console.log("Stringify : " ,jsonString2 )