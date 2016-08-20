/* Populate the marketplace with existing items */

var elMarket = document.getElementById('mkt-items');

function mktItem (item, sell_or_buy, description, price, contact_name, contact_phone) {
	mktItem.obj_count = mktItem.obj_count || 0;
	mktItem.obj_count++;

	this.item_id = mktItem.obj_count; // quick & dirty experiment to assign id's to each item
	this.item = item;
	this.sell_or_buy = sell_or_buy;
	this.description = description;
	this.price = price;
	this.contact_name = contact_name;
	this.contact_phone = contact_phone;
}

localStorage.removeItem('mktItems');
var mktItemList = (JSON.parse(localStorage.getItem('mktItems')) || []);

if (mktItemList.length === 0) { // populate a mktItemList with some items for demo
	mktItemList.push(
		new mktItem(
			'Trek 5200 carbon road bike',
			'Sell',
			'21" frame, Ultegra components, good condition, carbon fiber frame/fork',
			1000,
			'Mark',
			'999-999-9999'
			)
		);

	mktItemList.push(
		new mktItem(
			'Autographed "Shut Up, Legs!" jersey',
			'Sell',
			'Euro-fit jersey with "Shut Up, Legs", autographed by The Jensie, Jens Voigt',
			300,
			'Jakob Fuglsang',
			'000-000-0000'
			)
		);

	mktItemList.push(
		new mktItem(
			'Jens Voigt\'s coffee maker',
			'Sell',
			'Kept The Jensie going through training rides, chauffering kids around, and just getting through the day',
			400,
			'Stuart O\'Grady',
			'444-444-4444'
		)
	);
}

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
			'<td class="buysell">' + mktItems[i].sell_or_buy + '</td>' +
			'<td class="item">' + mktItems[i].item + '</td>' +
			'<td class="price">$' + mktItems[i].price + '</td>' +
			'<td class="contactname">' + mktItems[i].contact_name + '</td>' +
			'<td class="contactphone">' + mktItems[i].contact_phone + '</td></tr>';
	}

	elMktItemTable.innerHTML = tblContent;
}

displayMktItemTable(mktItemList);

function addMktItem(mktItems) {
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

	// add the new item to the list
	mktItems.push(itemToAdd);

	// store the modified list in localStorage
	localStorage.setItem('mktItems', JSON.stringify(mktItems));

	// update the view (table)
	displayMktItemTable(mktItems);
}

elAddItem = document.getElementById('add-item-btn');
elAddItem.addEventListener('click', function() {
	event.preventDefault();
	addMktItem(mktItemList);
});
