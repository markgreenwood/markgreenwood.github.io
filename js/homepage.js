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