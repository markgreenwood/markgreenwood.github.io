/* Find races near you */

function raceItem(racename, state, racedate, racetype)
{
	this.racename = racename;
	this.state = state;
	this.racedate = racedate;
	this.racetype = racetype;
}

var raceList = [];
raceList.push(new raceItem("Cascade Cycling Classic", "OR", "June 21, 2008", "Stage Race"));
raceList.push(new raceItem("Blue Lake Triathlon", "OR", "June 2, 2016", "Triathlon"));
raceList.push(new raceItem("Doreena Lake Road Race", "OR", "Aug 12, 2016", "Road Race"));
raceList.push(new raceItem("Fall Creek Road Race", "OR", "July 17, 2016", "Road Race"));
raceList.push(new raceItem("OR State Championship TT", "OR", "July 27, 2016", "Time Trial"));
raceList.push(new raceItem("Hagg Lake Triathlon", "OR", "July 7, 2016", "Triathlon"));
raceList.push(new raceItem("Portland Twilight Criterium", "OR", "August 1, 2008", "Criterium"));
raceList.push(new raceItem("Woodland Hills Road Race", "WA", "August 18, 2016", "Road Race"));
raceList.push(new raceItem("Seattle Pike Place Criterium", "WA", "June 5, 2016", "Criterium"));
raceList.push(new raceItem("Sea Otter Classic", "CA", "August 2, 2016", "Stage Race"));
raceList.push(new raceItem("AMGEN Tour of California", "CA", "May 15, 2016", "Stage Race"));
raceList.push(new raceItem("Tour de France", "France", "July 2, 2016", "Stage Race"));

// Code below can be moved into homepage.html
function createFilteredRaceListAsHTMLTable(filter, racelist) {
	var elRaceListTable = document.createElement('table');
	var title;
	if (!filter.racetype) {
		title = "racelist";
	}
	else {
		title = filter.racetype + "s";
	}
	if (filter.state) {
		title += " in " + filter.state;
	}
	var tblContent = '<tr><th colspan=5>' + title + '</th></tr>';
	tblContent += '<tr><th>Race</th><th>Race date</th><th>Location</th><th>Race type</th></tr>';

	for (i = 0; i < racelist.length; i++) {
		if (
				((!filter.racetype) || (filter.racetype === racelist[i].racetype)) &&
				((!filter.state) || (filter.state === racelist[i].state))
			)	{
			tblContent += '<tr>' +
				'<td>' + racelist[i].racename + '</td>' +
				'<td>' + racelist[i].racedate + '</td>' +
				'<td>' + racelist[i].state + '</td>' +
				'<td>' + racelist[i].racetype + '</td>' +
				'</tr>';
		}
	}

	elRaceListTable.innerHTML = tblContent;
	return elRaceListTable;
}

//localStorage.removeItem('race_filter');
var race_filter = (JSON.parse(localStorage.getItem('race_filter')) || { state: "", racetype: "" });

elRaces = document.getElementById('race-table');
elRaces.removeChild(elRaces.firstChild);
elRaces.appendChild(createFilteredRaceListAsHTMLTable(race_filter, raceList)); // display the full race list

// Add event listener for Customize search button
function saveSearchParameters(filter) {
	localStorage.setItem('race_filter', JSON.stringify(filter));
}

elCustomizeButton = document.getElementById('customize-search-btn');
if(elCustomizeButton.addEventListener) {
	elCustomizeButton.addEventListener('click', function(e) {
		if (!e) {
			e = window.event;
		}
		e.preventDefault();
		saveSearchParameters(race_filter);
	}, false);
}
else {
	elCustomizeButton.attachEvent('onclick', function() {
		window.event.preventDefault();
		saveSearchParameters(race_filter);
	});
}

elState = document.getElementById('state');
elState.value = race_filter.state;
if (elState.addEventListener) {
	elState.addEventListener('change', function(e) {
		race_filter.state = e.target.value;
		elRaces.removeChild(elRaces.firstChild);
		elRaces.appendChild(createFilteredRaceListAsHTMLTable(race_filter, raceList)); // display the full race list
	});
}
else {
	elState.attachEvent('onchange', function() {
		race_filter.state = window.event.target.value;
		elRaces.removeChild(elRaces.firstChild);
		elRaces.appendChild(createFilteredRaceListAsHTMLTable(race_filter, raceList)); // display the full race list
	});
}

elRacetype = document.getElementById('racetype');
elRacetype.value = race_filter.racetype;
if (elRacetype.addEventListener) {
	elRacetype.addEventListener('change', function(e) {
		race_filter.racetype = e.target.value;
		elRaces.removeChild(elRaces.firstChild);
		elRaces.appendChild(createFilteredRaceListAsHTMLTable(race_filter, raceList)); // display the full race list
	});
}
else {
	elRacetype.attachEvent('onchange', function() {
		race_filter.racetype = window.event.target.value;
		elRaces.removeChild(elRaces.firstChild);
		elRaces.appendChild(createFilteredRaceListAsHTMLTable(race_filter, raceList)); // display the full race list
	});
}
