function getRandomInt(min, max) {
	// getRandomInt returns a random integer between min and max inclusive.
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max-min+1)) + min;
}

/* Populate cycling news with faux stories, will eventually pull from Google or some other news feed */

function newsItem(headline, image_url, article_text) {
	// constructor function for a newsItem object
	this.headline = headline;
	this.image_url = image_url;
	this.article_text = article_text;
}

var newsItemArray = [];

newsItemArray.push(
	new newsItem(
			'Kristin Armstrong wins Cascade Classic time trial',
			'images/K_Armstrong_TT_Finish.jpg',
			'Kristin Armstrong won the Cascade Cycling Classic\'s Skyliners time trial on Saturday, July 11, 2008, riding the out-and-back course in the high desert near Bend, OR at a blistering 27 mph pace.'
		)
	);

newsItemArray.push(
	new newsItem(
			'Breakaway survives at PIR, Nevers wins',
			'images/CoreysBreakaway.jpg',
			'Five minutes into Tuesday night\'s race at PIR, four riders pulled away and established a break. The four riders took advantage of the pace easing up following a points sprint and accelerated away from the group. The breakaway established a lead of up to 45 seconds on the main field, which gradually came down to a 15 second gap on the last lap. With 200m to go, Corey Nevers attacked and beat the other three riders to the line just ahead of the main field.'
		)
	);

newsItemArray.push(
	new newsItem(
			'Greenwood out for the season after PIR crash',
			'images/CrankItUpPIR.jpg',
			'Mark Greenwood is out for the season after getting caught in a five-rider crash at PIR. As Greenwood was moving up on the outside, the rider to his right swerved into him and locked handlebars, causing the crash when he pulled away. Corey Nevers, Greenwood\'s teammate, was not involved in the crash and went on to win Tuesday evening.'
		)
	);

function displayRandomNewsItem() {
	var elNews = document.getElementById('news');
	var storyIndex = getRandomInt(0, newsItemArray.length-1);
	var news = '';
	news += '<img class="newspic" src="' + newsItemArray[storyIndex].image_url + '"><h1>' + newsItemArray[storyIndex].headline + '</h1><p>' +
		newsItemArray[storyIndex].article_text + '</p>';

	elNews.innerHTML = news;
}

displayRandomNewsItem();

var myTimer = setInterval(displayRandomNewsItem, 10000);
