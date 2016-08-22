// homepage.js requires the following to be loaded first:
// marketplace-model.js
// races-model.js
// news-model.js

// ----------------------------------------------
// Code to handle news/feature view on home page
// ----------------------------------------------
function getRandomInt(min, max) {
	// getRandomInt returns a random integer between min and max inclusive.
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max-min+1)) + min;
}

function displayRandomNewsItem(newsItems) {
	var elNews = document.getElementById('news');
	var storyIndex = getRandomInt(0, newsItems.length-1);
	var news = '';
	news += '<img class="newspic" src="' + newsItems[storyIndex].image_url + '"><h1>' + newsItems[storyIndex].headline + '</h1><p>' +
		newsItems[storyIndex].article_text + '</p>';

	elNews.innerHTML = news;
}

// newsItemArray is global from news-model.js
displayRandomNewsItem(newsItemArray);

var myTimer = setInterval(function() { displayRandomNewsItem(newsItemArray); }, 10000);

// ----------------------------------------
// Code for handling race view on home page
// ----------------------------------------
function createFilteredRaceListAsHTMLTable(filter, racelist) {
	var elRaceListTable = document.createElement('table');
	var title;
	if (!filter.racetype) {
		title = "racelist";
	}
	else {
		title = filter.racetype + "s";
	}
	if (filter.state) {
		title += " in " + filter.state;
	}
	var tblContent = '<tr><th colspan=5>' + title + '</th></tr>';
	tblContent += '<tr><th>Race</th><th>Race date</th><th>Location</th><th>Race type</th></tr>';

	for (i = 0; i < racelist.length; i++) {
		if (
				((!filter.racetype) || (filter.racetype === racelist[i].racetype)) &&
				((!filter.state) || (filter.state === racelist[i].state))
			)	{
			tblContent += '<tr>' +
				'<td>' + racelist[i].racename + '</td>' +
				'<td>' + racelist[i].racedate + '</td>' +
				'<td>' + racelist[i].state + '</td>' +
				'<td>' + racelist[i].racetype + '</td>' +
				'</tr>';
		}
	}

	elRaceListTable.innerHTML = tblContent;
	return elRaceListTable;
}

// Uncomment the following line temporarily if you need to clear race_filter in localStorage
//localStorage.removeItem('race_filter');
var race_filter = (JSON.parse(localStorage.getItem('race_filter')) || { state: "", racetype: "" });

elRaces = document.getElementById('race-table');
elRaces.removeChild(elRaces.firstChild);
elRaces.appendChild(createFilteredRaceListAsHTMLTable(race_filter, raceList)); // display the full race list

// Add event listener for Customize search button
function saveSearchParameters(filter) {
	localStorage.setItem('race_filter', JSON.stringify(filter));
}

elCustomizeButton = document.getElementById('customize-search-btn');
if(elCustomizeButton.addEventListener) {
	elCustomizeButton.addEventListener('click', function(e) {
		if (!e) {
			e = window.event;
		}
		e.preventDefault();
		saveSearchParameters(race_filter);
	}, false);
}
else {
	elCustomizeButton.attachEvent('onclick', function() {
		window.event.preventDefault();
		saveSearchParameters(race_filter);
	});
}

elState = document.getElementById('state');
elState.value = race_filter.state;
if (elState.addEventListener) {
	elState.addEventListener('change', function(e) {
		race_filter.state = e.target.value;
		elRaces.removeChild(elRaces.firstChild);
		elRaces.appendChild(createFilteredRaceListAsHTMLTable(race_filter, raceList)); // display the full race list
	});
}
else {
	elState.attachEvent('onchange', function() {
		race_filter.state = window.event.target.value;
		elRaces.removeChild(elRaces.firstChild);
		elRaces.appendChild(createFilteredRaceListAsHTMLTable(race_filter, raceList)); // display the full race list
	});
}

elRacetype = document.getElementById('racetype');
elRacetype.value = race_filter.racetype;
if (elRacetype.addEventListener) {
	elRacetype.addEventListener('change', function(e) {
		race_filter.racetype = e.target.value;
		elRaces.removeChild(elRaces.firstChild);
		elRaces.appendChild(createFilteredRaceListAsHTMLTable(race_filter, raceList)); // display the full race list
	});
}
else {
	elRacetype.attachEvent('onchange', function() {
		race_filter.racetype = window.event.target.value;
		elRaces.removeChild(elRaces.firstChild);
		elRaces.appendChild(createFilteredRaceListAsHTMLTable(race_filter, raceList)); // display the full race list
	});
}

// ----------------------------------------------
// Code for handling marketplace view on homepage
// ----------------------------------------------
function createMktItemTable(mktItems) {
	var elMktItemTable = document.createElement('table');
	//elMktItems.removeChild(elMktItems.firstChild);
	//elMktItems.appendChild(elMktItemTable);

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
	return elMktItemTable;
}

// mktItemList is global from marketplace-model.js
var elMktItems = document.getElementById('mkt-items');
elMktItems.removeChild(elMktItems.firstChild);
elMktItems.appendChild(createMktItemTable(mktItemList));

// add event listener to add a new market item when required fields are filled in
// and the Add Item button is clicked
elAddItem = document.getElementById('add-item-btn');
elAddItem.addEventListener('click', function(e) {
	e.preventDefault();
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
		elMktItems.removeChild(elMktItems.firstChild);
		elMktItems.appendChild(createMktItemTable(mktItemList));
	}
});
