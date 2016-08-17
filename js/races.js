/* Find races near you */

function raceItem(racename, state, racedate, racetype)
{
	this.racename = racename;
	this.state = state;
	this.racedate = racedate;
	this.racetype = racetype;
}

// Build up a list of races (would come from database or an API in the real app)
var raceItemArray = [];

raceItemArray.push(new raceItem("Cascade Cycling Classic", "OR", "June 21, 2008", "Stage Race"));
raceItemArray.push(new raceItem("Blue Lake Triathlon", "OR", "June 2, 2016", "Triathlon"));
raceItemArray.push(new raceItem("Doreena Lake Road Race", "OR", "Aug 12, 2016", "Road Race"));
raceItemArray.push(new raceItem("Fall Creek Road Race", "OR", "July 17, 2016", "Road Race"));
raceItemArray.push(new raceItem("OR State Championship TT", "OR", "July 27, 2016", "Time Trial"));
raceItemArray.push(new raceItem("Hagg Lake Triathlon", "OR", "July 7, 2016", "Triathlon"));
raceItemArray.push(new raceItem("Portland Twilight Criterium", "OR", "August 1, 2008", "Criterium"));
raceItemArray.push(new raceItem("Woodland Hills Road Race", "WA", "August 18, 2016", "Road Race"));
raceItemArray.push(new raceItem("Seattle Pike Place Criterium", "WA", "June 5, 2016", "Criterium"));
raceItemArray.push(new raceItem("Sea Otter Classic", "CA", "August 2, 2016", "Stage Race"));

// Filter criteria
var selected_state = "OR";
var selected_race_type = "";

// Build up the races table (TODO: refactor into function call so it can be used repeatedly)
var races = "<table>";
races += "<tr><th colspan=3>";

if (selected_race_type) {
	races += selected_race_type + "s available";
}
else {
	races += "Races available";
}

if (selected_state) {
	races += " in " + selected_state;
}

races += "</th></tr>";
races += "<tr><th>Race</th><th>Race Date</th><th>Race Type</th>";

for (i = 0; i < raceItemArray.length; i++) {
	//console.log(raceItemArray[i]);
	if (
			((!selected_state) || (raceItemArray[i].state == selected_state)) &&
			((!selected_race_type) || (raceItemArray[i].racetype == selected_race_type))
		) {
		//console.log("Found an Oregon race");
		races += "<tr><td>" + raceItemArray[i].racename + "</td><td>" + raceItemArray[i].racedate + "</td><td>" + raceItemArray[i].racetype + "</td>";
	}
}

races += "</table>";

elRaces = document.getElementById('race-table');
elRaces.innerHTML = races;

// Add event listener for Customize search button
function customizeSearch() {
	console.log("Customize (save search) button clicked");
}

elCustomizeButton = document.getElementById('customize-search-btn');
elCustomizeButton.addEventListener('click', function() { event.preventDefault(); customizeSearch(); }, false);

function stateSelected(e) {
	selected_state = e.target.value;
}

elRacetype = document.getElementById('racetype');
elRacetype.addEventListener('change', function(e) { selected_race_type = e.target.value; } )
/*
var bikereg_response = httpGet('https://www.bikereg.com/api/search?year=2016&eventtype=Road%20Race');
var race_data = JSON.parse(bikereg_response);
*/
