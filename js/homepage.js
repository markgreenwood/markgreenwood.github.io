/* Populate the marketplace with existing items */

var elMarket = document.getElementById('market');

function mktItem (item, sell_or_buy, description, price) {
	this.item = item;
	this.sell_or_buy = sell_or_buy;
	this.description = description;
	this.price = price;
}

var mktItemArray = [];

mktItemArray.push(
	new mktItem(
		'Trek 5200 carbon road bike', 
		'Sell', 
		'21" frame, Ultegra components, good condition, carbon fiber frame/fork', 
		1000
		)
	);

mktItemArray.push(
	new mktItem(
		'Autographed "Shut Up, Legs!" jersey', 
		'Sell', 
		'Euro-fit jersey with "Shut Up, Legs", autographed by The Jensie, Jens Voigt', 
		300
		)
	);

var mktItemTable = "<table><tr><th colspan=3>Marketplace</th></tr>";
mktItemTable += "<tr><th>Buy/Sell</th><th>Item</th><th>Price</th>";

for (i = 0; i < mktItemArray.length; i++) {
	mktItemTable += "<tr><td>" + mktItemArray[i].sell_or_buy + "</td><td>" + 
		mktItemArray[i].item + "</td><td>" + "$" + mktItemArray[i].price + "</td></tr>";
}

mktItemTable += "</table>";

elMarket.innerHTML = mktItemTable;

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