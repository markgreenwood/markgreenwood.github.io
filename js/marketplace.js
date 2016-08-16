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

// Refactor displayMktItems into a function
function displayMktItemTable(mktItems) {
	var elMktItemTable = document.createElement('table');
	var elMktItems = document.getElementById('mkt-items');
	elMktItems.removeChild(elMktItems.firstChild);
	elMktItems.appendChild(elMktItemTable);

	var tblContent = '<tr><th colspan=5>Marketplace</th></tr>';
	tblContent += '<tr><th>Buy/Sell</th><th>Item</th><th>Price</th><th>Contact</th><th>Phone</th></tr>';

	for (i = 0; i < mktItems.length; i++) {
		tblContent += '<tr>' +
			'<td>' + mktItems[i].sell_or_buy + '</td>' +
			'<td>' + mktItems[i].item + '</td>' +
			'<td>$' + mktItems[i].price + '</td>' +
			'<td>' + mktItems[i].contact_name + '</td>' +
			'<td>' + mktItems[i].contact_phone + '</td></tr>';
	}

	elMktItemTable.innerHTML = tblContent;
}

displayMktItemTable(mktItemArray);
/*
var mktItemTable = '<table id="mktItemTable">';
mktItemTable += "<tr><th colspan=5>Marketplace</th></tr>";
mktItemTable += "<tr><th>Buy/Sell</th><th>Item</th><th>Price</th><th>Contact</th><th>Phone</th></tr>";

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
*/
// end refactor displayMktItems

function addMktItem(mktItems) {
	console.log('Called addMktItem');
	var elItem = document.getElementById('item');
	var elBuySell = document.getElementById('buysell');
	var elDescription = document.getElementById('description');
	var elPrice = document.getElementById('price');
	var elContactName = document.getElementById('contact-name');
	var elContactPhone = document.getElementById('contact-phone');

	itemToAdd = new mktItem(
		elItem.value,
		elBuySell.value,
		elDescription.value,
		elPrice.value,
		elContactName.value,
		elContactPhone.value
	)

	// clear controls
	elItem.value = '';
	elBuySell.value = '';
	elDescription.value = '';
	elPrice.value = '';
	elContactName.value = '';
	elContactPhone.value = '';

	mktItems.push(itemToAdd);

	displayMktItemTable(mktItems);
}

elAddItem = document.getElementById('additembutton');
elAddItem.addEventListener('click', function() {
	event.preventDefault();
	addMktItem(mktItemArray);
});
