
// Use the Fetch API
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
     // document.getElementById("scores").innerHTML = 'Šī kursa rezultāti ir ' + 'a= ' + data.scores.a + ' b= ' + data.scores.b + ' c= ' + data.scores.c;
    //});
      window.onload = function () {

        var chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          exportEnabled: true,
          theme: "light1", // "light1", "light2", "dark1", "dark2"
          title:{
            text: "Average results of students"
          },
            axisY: {
              includeZero: true
            },
          data: [{
            type: "column", //change type to bar, line, area, pie, etc
            //indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
                indexLabelFontSize: 16,
            indexLabelPlacement: "outside",
            dataPoints: [
              { y: data.scores.a },
              { y: data.scores.b, indexLabel: "\u2691 Lowest"},
              { y: data.scores.c, indexLabel: "\u2605 Highest" },
            ]
          }]
        });
        chart.render();
      
      }
    });
//console.log(person.name)