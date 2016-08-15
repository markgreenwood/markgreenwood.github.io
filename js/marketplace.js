/* Populate the marketplace with existing items */

var elMarket = document.getElementById('mkt-items');

function mktItem (item, sell_or_buy, description, price, contact_name, contact_phone) {
	this.item = item;
	this.sell_or_buy = sell_or_buy;
	this.description = description;
	this.price = price;
	this.contact_name = contact_name;
	this.contact_phone = contact_phone;
}

var mktItemArray = [];

mktItemArray.push(
	new mktItem(
		'Trek 5200 carbon road bike', 
		'Sell', 
		'21" frame, Ultegra components, good condition, carbon fiber frame/fork', 
		1000,
		'Mark',
		'999-999-9999'
		)
	);

mktItemArray.push(
	new mktItem(
		'Autographed "Shut Up, Legs!" jersey', 
		'Sell', 
		'Euro-fit jersey with "Shut Up, Legs", autographed by The Jensie, Jens Voigt', 
		300,
		'Jakob Fuglsang',
		'000-000-0000'
		)
	);

var mktItemTable = '<table id="mktItemTable">';
mktItemTable += "<tr><th colspan=5>Marketplace</th></tr>";
mktItemTable += "<tr><th>Buy/Sell</th><th>Item</th><th>Price</th><th>Contact</th><th>Phone</th>";

for (i = 0; i < mktItemArray.length; i++) {
	mktItemTable += "<tr>" +
		"<td>" + mktItemArray[i].sell_or_buy + "</td>" +
		"<td>" + mktItemArray[i].item + "</td>" +
		"<td>$" + mktItemArray[i].price + "</td>" +
		"<td>" + mktItemArray[i].contact_name + "</td>" +
		"<td>" + mktItemArray[i].contact_phone + "</td>" +
		"</tr>";
}

mktItemTable += "</table>";

elMarket.innerHTML = mktItemTable;

function addMktItem() {
	console.log('Called addMktItem');
	var mktTable = document.getElementById('mktItemTable');
	var mktTableLastRow = mktItemTable.lastChild;
	var newMktTableRow = document.createElement('tr');
	var newItem = document.createElement('td');
	var newItem_tn = document.createTextNode('Another item');
	newItem.appendChild(newItem_tn);
	newMktTableRow.appendChild(newItem);
	mktTable.appendChild(newMktTableRow);
}

elAddItem = document.getElementById('additembutton');
elAddItem.addEventListener('click', function() { event.preventDefault(); addMktItem(); });
