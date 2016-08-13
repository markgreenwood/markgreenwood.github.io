/* Find races near you */

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

elRaces = document.getElementById('races');

var bikereg_response = httpGet('https://www.bikereg.com/api/search?year=2016&eventtype=Road%20Race');

var race_data = JSON.parse(bikereg_response);