/* Find races near you */

function raceItem(racename, state, racedate, racetype)
{
	this.racename = racename;
	this.state = state;
	this.racedate = racedate;
	this.racetype = racetype;
}

function raceList() {
	this.races = [];
	this.addRace = function(raceItem) {
		this.races.push(raceItem);
	}
	this.getRaceListAsHTMLTable = function(state, racetype) {
		var title;
		if (!racetype) {
			title = "Races";
		}
		else {
			title = racetype + "s";
		}
		if (state) {
			title += " in " + state;
		}
		var raceListHTMLTable = '<table>';
		raceListHTMLTable += '<tr><th colspan=5>' + title + '</th></tr>';
		raceListHTMLTable += '<tr><th>Race</th><th>Race date</th><th>Location</th><th>Race type</th></tr>';

		for (i = 0; i < this.races.length; i++) {
			if (
					((!racetype) || (racetype === this.races[i].racetype)) &&
					((!state) || (state === this.races[i].state))
				)	{
				raceListHTMLTable += '<tr>' +
					'<td>' + this.races[i].racename + '</td>' +
					'<td>' + this.races[i].racedate + '</td>' +
					'<td>' + this.races[i].state + '</td>' +
					'<td>' + this.races[i].racetype + '</td>' +
					'</tr>';
			}
		}
		return raceListHTMLTable;
	}
}

var racesList = new raceList();
racesList.addRace(new raceItem("Cascade Cycling Classic", "OR", "June 21, 2008", "Stage Race"));
racesList.addRace(new raceItem("Blue Lake Triathlon", "OR", "June 2, 2016", "Triathlon"));
racesList.addRace(new raceItem("Doreena Lake Road Race", "OR", "Aug 12, 2016", "Road Race"));
racesList.addRace(new raceItem("Fall Creek Road Race", "OR", "July 17, 2016", "Road Race"));
racesList.addRace(new raceItem("OR State Championship TT", "OR", "July 27, 2016", "Time Trial"));
racesList.addRace(new raceItem("Hagg Lake Triathlon", "OR", "July 7, 2016", "Triathlon"));
racesList.addRace(new raceItem("Portland Twilight Criterium", "OR", "August 1, 2008", "Criterium"));
racesList.addRace(new raceItem("Woodland Hills Road Race", "WA", "August 18, 2016", "Road Race"));
racesList.addRace(new raceItem("Seattle Pike Place Criterium", "WA", "June 5, 2016", "Criterium"));
racesList.addRace(new raceItem("Sea Otter Classic", "CA", "August 2, 2016", "Stage Race"));

var selected_state = "";
var selected_racetype = "";
elRaces = document.getElementById('race-table');
elRaces.innerHTML = racesList.getRaceListAsHTMLTable(selected_state, selected_racetype); // display the full race list

// Add event listener for Customize search button
function customizeSearch() {
	console.log("Customize (save search) button clicked");
}

elCustomizeButton = document.getElementById('customize-search-btn');
elCustomizeButton.addEventListener('click', function() { event.preventDefault(); customizeSearch(); }, false);

function stateSelected(e) {
	selected_state = e.target.value;
}

elState = document.getElementById('state');
elState.addEventListener('change', function(e) {
	selected_state = e.target.value;
	elRaces.innerHTML = racesList.getRaceListAsHTMLTable(selected_state, selected_racetype);
});

elRacetype = document.getElementById('racetype');
elRacetype.addEventListener('change', function(e) {
	selected_racetype = e.target.value;
	elRaces.innerHTML = racesList.getRaceListAsHTMLTable(selected_state, selected_racetype);
});

/*
var bikereg_response = httpGet('https://www.bikereg.com/api/search?year=2016&eventtype=Road%20Race');
var race_data = JSON.parse(bikereg_response);
*/
