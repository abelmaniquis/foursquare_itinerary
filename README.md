**TECHNOLOGIES USED**
==========
HTML
CSS
jQuery
Foursquare API
Google Maps API
Typeaheadjs Library


**SUMMARY:**
==============
This app uses the Foursquare API and the Google Maps API
to do things.

**DETAILS**
=============
The app runs primarily on the initMap function, which
creates a map and geotags the user's current location.
This is where all of the Map's functions are stored,

The venues array takes in the names of venues.


**FourSquare Functions**:

The Foursquare functions begin on the getFSquareinput
function, which finds relevant venues within a radius of
100,000 meters around the current area.

The limit has an upper limit of 100 results, so the app
returns 100 results


**Typeahead Functions**

Finally, the final part of the project is the Typeahead.js
functionality which allows the search bar to pop down
and reveal the list of relevant search terms.

The first function involved is substringMatcher,
which does the following:

A matches array is generated that will be populated with 
substring matched. This takes place on line 153

matches = [];

var substrRegex is used to determine if a string contains
the substring 'q'

The function then iterates through the pool of strings and 
for any string that contains the substring 'q', add it to the
'matches' array. This takes place on line 157

The typeterms function handles the search terms






