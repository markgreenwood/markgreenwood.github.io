# Velo Portal
**News, Race Info, and Online Marketplace for the Cycling World**
(Demo Only)

## Developer
Mark Greenwood

## Start Date
Aug 10, 2016

## Description
Velo Portal is a demo project I created to meet prerequisites for the Code Fellows 301: Intermediate Software Development class. The concept is to provide a site for racing and recreational cyclists which would provide news, race information, and an online marketplace.

### How To Use the Site
* Whenever the home page loads, a random news story will be displayed in the feature area.
* The race list section can be filtered by entering a state and/or a race type from the selection boxes. If you want to save your search criteria, you can set it up and click the *Save Search Parameters* button. Your preference will be saved in localStorage and remain in effect when you return to the site.
* The marketplace displays items for sale or wish list items from buyers. You can enter data into the form at the bottom of the list and click *Post Item in Marketplace* and your item will be displayed in the list. (NOTE: This would be maintained on the server in a real app but is simulated using localStorage in the demo.)

### Requirements
The application needed be interactive, specifically:
* it uses event listeners to process and store user input
* it subsequently displays new content to the user
* the new content should remain viewable/retrievable after a screen refresh

The application should only use vanilla JavaScript (no jQuery, etc.) and should not use backend databases.

### Caveats / Limitations
The content (news, races, and marketplace items) are all "fake data" for the purpose of demonstrating the site concept. However, some of the news stories may contain factual content - who knows? If you raced at PIR in the early 2000s, it might seem oddly familiar.

In a fully-developed application, real news would be provided from a third-party news feed / API, race info could be drawn from a server database maintained by this site or from a third-party API, and the marketplace data would be managed via a server database.

## Known Issues
* On the about page, the profile picture sometimes fails to load until the page is refreshed. I searched Stack Overflow and other sources for hints why this might happen, but after trying several things I still haven't been able to get it to work reliably. At first I thought it was only happening in Chrome, but then I observed it once in Safari as well.

## Sources & Attributions
Ideas and information used in creating this site came from the books *HTML and CSS* and *JavaScript and jQuery* by Jon Duckett.

All photos on the site were taken by Mark or Michele Greenwood.
