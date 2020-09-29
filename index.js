console.log('Hello world')
let name = 'Mosh ';
let age = 30;
let person = {
    name: 'Mosh',
    age: 30
}
// Use the Fetch API & ES6
fetch('data.json')
  .then(response => response.json())
  .then(data => {
  	// Do something with your data
  	console.log(data);
  });
//console.log(person.name);