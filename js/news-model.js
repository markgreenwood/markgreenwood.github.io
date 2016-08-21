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
			'Kristin Armstrong won the Cascade Cycling Classic\'s Skyliners time trial on Saturday, July 11, 2008, riding the out-and-back course in the high desert near Bend, OR at a blistering 27 mph pace. Armstrong is heavily favored to medal in the Women\'s Time Trial at the Beijing Olympics in August.'
		)
	);

newsItemArray.push(
	new newsItem(
			'Breakaway survives at PIR, Nevers wins',
			'images/CoreysBreakaway.jpg',
			'Ten minutes into Tuesday night\'s race at PIR, four riders pulled away and established a break. The four riders took advantage of the pace easing up following a points sprint and accelerated away from the group. The breakaway established a lead of up to 45 seconds on the main field, which gradually came down to a 15 second gap on the last lap. With 200m to go, Corey Nevers attacked and beat the other three riders to the line just ahead of the main field.'
		)
	);

newsItemArray.push(
	new newsItem(
			'Greenwood out for the season after PIR crash',
			'images/CrankItUpPIR.jpg',
			'Mark Greenwood is out for the season after getting caught in a five-rider crash at PIR. As Greenwood was moving up on the outside, the rider to his right swerved into him and locked handlebars, causing the crash when he pulled away. Corey Nevers, Greenwood\'s teammate, was not involved in the crash and went on to win Tuesday evening.'
		)
	);

newsItemArray.push(
	new newsItem(
		'Mark Greenwood retires from amateur peloton',
		'images/MarkWithBike2.jpg',
		'Mark Greenwood announced his retirement from amateur road racing after two major crashes in as many seasons. Mark will take a season off to recover and then begin training for sprint-distance triathlons, which hopefully will not be as crash-prone. "However," says Greenwood, "the prospect of open-water swimming is almost as frightening."'
	)
)
