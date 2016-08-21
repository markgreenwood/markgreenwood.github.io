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
