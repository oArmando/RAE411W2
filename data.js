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

        var chart = new CanvasJS.Chart("chartContainer2", {
            exportEnabled: true,
            animationEnabled: true,
            title:{
                text: "Answers to the questions"
            },
            subtitles: [{
                text: "Click Legend to Hide or Unhide Data Series"
            }], 
            axisX: {
                title: "Questions"
            },
            axisY: {
                title: "Positive answers",
                titleFontColor: "#4F81BC",
                lineColor: "#4F81BC",
                labelFontColor: "#4F81BC",
                tickColor: "#4F81BC",
                includeZero: true
            },
            axisY2: {
                title: "Negative answers",
                titleFontColor: "#C0504E",
                lineColor: "#C0504E",
                labelFontColor: "#C0504E",
                tickColor: "#C0504E",
                includeZero: true
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                itemclick: toggleDataSeries
            },
            data: [{
                type: "column",
                name: "Answers Yes",
                showInLegend: true,      
                yValueFormatString: "#,##0.# Units",
                dataPoints: [
                    { label: "Do you like your job?",  y: 11 },
                    { label: "Does your salary satisfies you?", y: 22 },
                    { label: "Would you like to becoma freelancer?", y: 33 },
                    { label: "Do you feel happy?",  y: 44 },
                    
                ]
            },
            {
                type: "column",
                name: "Answers no",
                axisYType: "secondary",
                showInLegend: true,
                yValueFormatString: "#,##0.# Units",
                dataPoints: [
                    { label: "Do you like your job?", y: 2 },
                    { label: "Does your salary satisfies you?", y: 4 },
                    { label: "Would you like to becoma freelancer?", y: 1 },
                    { label: "Do you feel happy?", y: 5 },
                   
                ]
            }]
        });
        chart.render();
        
        function toggleDataSeries(e) {
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }
            e.chart.render();
      
      }
    };});