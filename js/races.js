/* Find races near you */

function raceItem(racename, state, racedate, racetype)
{
	this.racename = racename;
	this.state = state;
	this.racedate = racedate;
	this.racetype = racetype;
}

var raceItemArray = [];

raceItemArray.push(new raceItem("Cascade Cycling Classic", "OR", "June 21, 2008", "Stage Race"));
raceItemArray.push(new raceItem("Blue Lake Triathlon", "OR", "June 2, 2016", "Triathlon"));
raceItemArray.push(new raceItem("Doreena Lake Road Race", "OR", "Aug 12, 2016", "Road Race"));
raceItemArray.push(new raceItem("Fall Creek Road Race", "OR", "July 17, 2016", "Road Race"));
raceItemArray.push(new raceItem("OR State Championship TT", "OR", "July 27, 2016", "Time Trial"));
raceItemArray.push(new raceItem("Hagg Lake Triathlon", "OR", "July 7, 2016", "Triathlon"));
raceItemArray.push(new raceItem("Portland Twilight Criterium", "OR", "August 1, 2008", "Criterium"));

var selected_state = "OR";
var races = "<table>";
races += "<tr><th colspan=3>Races in " + selected_state + "</th></tr>";
races += "<tr><th>Race</th><th>Race Date</th><th>Race Type</th>";

for (i = 0; i < raceItemArray.length; i++) {
	console.log(raceItemArray[i]);
	if (raceItemArray[i].state == selected_state) {
		console.log("Found an Oregon race");
		races += "<tr><td>" + raceItemArray[i].racename + "</td><td>" + raceItemArray[i].racedate + "</td><td>" + raceItemArray[i].racetype + "</td>";
	}
	else {
		console.log("Race state: " + raceItemArray[i].state + " -- not a " + selected_state + " race");
	}
}

races += "</table>";

elRaces = document.getElementById('races');
elRaces.innerHTML = races;

/*
var bikereg_response = httpGet('https://www.bikereg.com/api/search?year=2016&eventtype=Road%20Race');
var race_data = JSON.parse(bikereg_response);
*/