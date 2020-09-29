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
      
      document.getElementById("kurss").innerHTML = 'Šī kursa numurs ir ' + data.course;
      document.getElementById("nosaukums").innerHTML = 'Šī kursa nosaukums ir ' + data.courseName;
      document.getElementById("gads").innerHTML = 'Šī kursa realizācijas gads  ir ' + data.releaseYear;
      document.getElementById("statuss").innerHTML = 'Šī kursa statuss ir ' + data.courseActivity;
      document.getElementById("drops").innerHTML = 'Šī kursa izkritušie studenti ir ' + data.droppedStudents;
      document.getElementById("datums").innerHTML = 'Šī kursa datums ir ' + data.date;
      document.getElementById("datukopa").innerHTML = 'Šī kursa datukopa ir ' + data.data;
      document.getElementById("scores").innerHTML = 'Šī kursa rezultāti ir ' + 'a= ' + data.scores.a + ' b= ' + data.scores.b + ' c= ' + data.scores.c;
    });
  
  var carName = 'data.course';
  document.getElementById("demo").innerHTML = person.age + 'vārds';
  document.getElementById("demo2").innerHTML = age + 'vārds';
//console.log(person.name