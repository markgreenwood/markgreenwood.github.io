/* Populate the marketplace with existing items */

function mktItem (item, sell_or_buy, description, price, contact_name, contact_phone) {
  /*
	// This method of instance-counting to assign unique IDs didn't work out
	// but I might come back to it
	mktItem.obj_count = mktItem.obj_count || 0;
	mktItem.obj_count++;
	this.item_id = mktItem.obj_count;
	*/
	this.item = item;
	this.sell_or_buy = sell_or_buy;
	this.description = description;
	this.price = price;
	this.contact_name = contact_name;
	this.contact_phone = contact_phone;
}

// uncomment the following line to clear mktItems from localStorage
//localStorage.removeItem('mktItems');

// Either get the mktItemList in localStorage or create an empty list which will
// be filled with a few items for demo purposes
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
