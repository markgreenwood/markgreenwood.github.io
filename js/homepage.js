/* Retrieve cycling news from Google */

var elNews = document.getElementById('news')
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

elNews.innerHTML = newsHeadlines;

var elMarket = document.getElementById('market');
var mkt_items = [
	"Trek 5200 carbon road bike",
	"Trek 820 mountain bike",
	"Autographed jersey from Jakob Fuglsang",
	]

var itemsForMkt = "<h2>Marketplace</h2><ul>";

for (i = 0; i < mkt_items.length; i++) {
	itemsForMkt += "<li>" + mkt_items[i] + "</li>";
}

itemsForMkt += "</ul>";

elMarket.innerHTML = itemsForMkt;