
const jsonString = '{"name": "Naman", "age":"24"}';
const jsonObject = JSON.parse(jsonString);
console.log("Object : ",jsonObject);

var jsonString2 = JSON.stringify(jsonObject);
console.log("Stringify : " ,jsonString2 )