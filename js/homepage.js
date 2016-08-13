/* Retrieve cycling news from Google */

//var elNews = document.getElementById('news')
var newsy_stuff = [
	"Kristin Armstrong wins gold in Women's Time Trial", 
	"Van Vleuten crashes in Women's Road Race",
	"Abbott fades in last 200m of Women's Road Race, cedes victory to van der Breggen",
	];

var newsHeadlines = "<h2>News</h2><ul>";

for (i = 0; i < newsy_stuff.length; i++) {
	newsHeadlines += "<li>" + newsy_stuff[i] + "</li>";
}

newsHeadlines += "</ul>";

//elNews.innerHTML = newsHeadlines;

var elMarket = document.getElementById('market');

var item1 = new Object();

item1.item = 'Trek 5200 road bike';
item1.sell_or_buy = 'Sell';
item1.description = '21" frame, Ultegra components, good condition, carbon fiber frame/fork';
item1.price = 1000;

var itemArray = [];

itemArray.push(item1);

var item2 = new Object();
item2.item = 'Autographed "Shut Up, Legs!" jersey';
item2.sell_or_buy = 'Sell';
item2.description = 'Euro-fit jersey with "Shut Up, Legs", autographed by The Jensie, Jens Voigt';
item2.price = 200;

itemArray.push(item2);

var itemTable = "<table><tr><th colspan=3>Marketplace</th></tr>";
itemTable += "<tr><th>Buy/Sell</th><th>Item</th><th>Price</th>";

for (i = 0; i < itemArray.length; i++) {
	itemTable += "<tr><td>" + itemArray[i].sell_or_buy + "</td><td>" + 
		itemArray[i].item + "</td><td>" + "$" + itemArray[i].price + "</td></tr>";
}

itemTable += "</table>";

elMarket.innerHTML = itemTable;