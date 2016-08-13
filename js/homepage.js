/* Retrieve cycling news from Google */

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max-min+1)) + min;
}

function newsItem(headline, image_url, article_text) {
	this.headline = headline;
	this.image_url = image_url;
	this.article_text = article_text;
}

var newsItemArray = [];

newsItemArray.push(
	new newsItem(
			'Kristin Armstrong wins Cascade Classic time trial',
			'images/K_Armstrong_TT_Finish.jpg',
			'Text to follow.'
		)
	);

newsItemArray.push(
	new newsItem(
			'Breakaway survives at PIR, Nevers wins',
			'images/CoreysBreakaway.jpg',
			'Five minutes into Tuesday night\'s race at PIR, four riders pulled away and established a break. The four riders took advantage of the pace easing up following a points sprint and accelerated away from the group. The breakaway established a lead of up to 45 seconds on the main field, which gradually came down to a 15 second gap on the last lap. With 200m to go, Corey Nevers attacked and beat the other three riders to the line just ahead of the main field.'
		)
	);

var elNews = document.getElementById('news');
var storyIndex = getRandomInt(0, newsItemArray.length-1);
console.log("Fetching news story ", storyIndex);

var news = '';
news += '<img class="newspic" src="' + newsItemArray[storyIndex].image_url + '"><h1>' + newsItemArray[storyIndex].headline + '</h1><p>' +
	newsItemArray[storyIndex].article_text + '</p>';

/*
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
*/

elNews.innerHTML = news;

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