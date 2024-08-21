// JSON = (JavScript object Notation) data-interchanfe format
//        Used for exchanging data between a sever and a web aplication
//        JSON files {key:value} OR {value1,value2, value3}
// 
//        JSON.stringify()= converts a JS object to a JSON string.
//        JSON.parse()= converts a JSON string to a JS object
// 


// const names=`["spongebob","Alisher","Akobir","Ahmad","Hamidullox"]`;
// const person={
//     "name":"Spongebob",
//     "age":30,
//     "isEmployed":true,
//     "hobbies":["fishing","cooking","cmputer Games"]
// }

// const people=[{
//     "name":"Spongebob",
//     "age":30,
//     "isEmployed":true
// },
// {
//     "name":"Alisher",
//     "age":34,
//     "isEmployed":false
// },
// {
//     "name":"Sande",
//     "age":20,
//     "isEmployed":false
// }]
// const jsonString=JSON.parse(names);
// const jsonString1=JSON.stringify(person);
// const jsonString2=JSON.stringify(people);


// console.log(jsonString);
// console.log(jsonString1);
// console.log(jsonString2);










fetch("people.json")
      .then(responce =>responce.json())
      .then(value=>value.forEach(value=>console.log(value)))
      .catch(error=>console.error(error))
