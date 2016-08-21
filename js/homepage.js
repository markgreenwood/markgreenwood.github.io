// homepage.js requires the following to be loaded first:
// marketplace-model.js
// races-model.js

// Refactor displayMktItems into a function so it can be called whenever an update is needed
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

// add event listener to add a new market item when required fields are filled in
// and the Add Item button is clicked
elAddItem = document.getElementById('add-item-btn');
elAddItem.addEventListener('click', function() {
	event.preventDefault();
	var elItem = document.getElementById('item');
	var elBuySell = document.getElementById('buysell');
	var elDescription = document.getElementById('description');
	var elPrice = document.getElementById('price');
	var elContactName = document.getElementById('contact-name');
	var elContactPhone = document.getElementById('contact-phone');
	if (!elItem.value ||
			!elBuySell.value ||
			!elPrice.value ||
			!elContactName.value ||
			!elContactPhone.value) {
		alert("Please make sure all required fields are filled in before posting!");
	}
	else {
		itemToAdd = new mktItem(
			elItem.value,
			elBuySell.value,
			elDescription.value,
			elPrice.value,
			elContactName.value,
			elContactPhone.value
		);

		// clear controls
		elItem.value = '';
		elBuySell.value = '';
		elDescription.value = '';
		elPrice.value = '';
		elContactName.value = '';
		elContactPhone.value = '';

		// add the new item to the list
		mktItemList.push(itemToAdd);

		// store the modified list in localStorage
		localStorage.setItem('mktItems', JSON.stringify(mktItemList));

		// update the view (table)
		displayMktItemTable(mktItemList);
	}
});
