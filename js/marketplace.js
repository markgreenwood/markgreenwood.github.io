/* marketplace.js */

var item = new Object();

item.item = 'Trek 5200 road bike';
item.sell_or_buy = 'Sell';
item.description = '21" frame, Ultegra components, good condition, carbon fiber frame/fork';
item.price = 1000;

var itemArray = [];

itemArray.push(item);

item.item = 'Autographed "Shut Up, Legs!" jersey';
item.sell_or_buy = 'Sell';
item.description = 'Euro-fit jersey with "Shut Up, Legs", autographed by The Jensie, Jens Voigt';
item.price = 200;

itemArray.push(item);

var itemTable = "<table><tr><th colspan=3>Marketplace</th></tr>";
itemTable += "<tr><th>Buy/Sell</th><th>Item</th><th>Price</th>";

for (i = 0; i < itemArray.length; i++) {
	itemTable += "<tr><td>" + itemArray[i].sell_or_buy + "</td><td>" + 
		itemArray[i].item + "</td><td>" + itemArray[i].price + "</td></tr>";
}

itemTable += "</table>";