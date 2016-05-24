5/24/16 UPDATE:

My task for today: give foursquare locations to the waypoints object in Google Maps


--------------------------------------------------------------------------------------------------------------------------
5/23/16 UPDATE:

here are the paths to access certain attributes for a venue

  console.log(data.response.groups[0]);
  
  
  lisn of
  console.log(data.response.groups[0].items);
  
  name (of 0th entry):
  console.log(data.response.groups[0].items[0].venue.name);
  
  address in form of array:
  console.log(data.response.groups[0].items[0].venue.location.formattedAddress);
  
  
  categories:
  console.log(data.response.groups[0].items[0].venue.categories);
  
  Latitude and longitude
  console.log([data.response.groups[0].items[0].venue.location.lat,data.response.groups[0].items[0].venue.location.lng]);
  
 

---------------------------------------------------------------------------------------------------------------------
5/22/16 UPDATE:

Added Geolocation to google maps, 
    need to integrate directions with geolocation
    Directions not appearing on Map
    
Also wondering whether the App really needs the API input on the
far left column if the information is going to be displayed on the dropdown.
    
Added typeahead AJAX search
    need to integrate Foursquare API Search results
    Search is also transparent, need to make white background
    
getFSquare function added in order to get FourSquare JSON object,
    currently it is not console logging results,
    need to pull the google lng and lat into this function
    need to make it search the venues around googles Geolocation coordinates

List of things to do:

1. Fix issues with the position variable
            -set initial location to be equal to current position
            -make sure it can be read by your directions function and foursquare function
3. fix Foursquare API endpoint so that it gets JSON object
4. Increase the size of the search bar, and give the results a white background
5. Display Foursquare JSON objects into the Search Bar 
          Currently dislaying objects from a test array
 













------------------------------------------------------------------------



Name of the App: Foursquare Itinerary

Purpose of the App: 
Create a chain of directions from one location to another,


User Experience:

The app will find the user's location, and set that as both the start and end point.

There will be four main elements in this page,
a search bar and three columns.

A search element, a list, a map, and directions.
when the user types something into the search bar: 
a dropdown menu appears, displaying the top results from Foursquare.

When an element on the list is clicked, 

The elment is appended to the list,
directions are added to the directions section, and then 
the location is added to the map, along with highlighted directions from the last location on the list.


-------------------------------------------------------------------------------------------------------------------------
Google Maps API notes

Google Maps API key:
AIzaSyCTleyvmwLLUaGO42VlyfdVkC_eVUqWhT
------------------------------------------------------------------------------
Search bar:

http://blog.comperiosearch.com/blog/2012/06/27/make-an-instant-search-application-using-json-ajax-and-jquery/




------------------------------------------------------------------------------------------------------------------
Foursquare API Notes

Foursquare API:

Owner
Abel Maniquis
Client id
KIG3G11STJJ03SUXC2ZVCDPKEWGTI0LSQSZEZ3Y2YFY2YNL1
Client secret
ZWS32KM4WZE4PD3X5QEIV4Q3HGCJPDTOE1HB2QZ1FS03K2TN

Search Venues:
https://api.foursquare.com/v2/venues/search
Returns the list of values near the current location, optionally matching a search term.

Explore Recommended and popular venues:https://developer.foursquare.com/docs/venues/explore

endpoint: https://api.foursquare.com/v2/venues/explore


Explore is used for these kinds of questions:
    "What are some popular coffee shops in the area?"
Search is used for these kinds of questions:
    "Where is the nearest Starbucks coffee?"


This app will use the explore feature. It's for planning out a general schedule for the day,
as opposed to finding specific venues.

VENUE DETAILS:_________________________________________
https://developer.foursquare.com/docs/venues/venues
https://api.foursquare.com/v2/venues/VENUE_ID

This endpoint is used to give details about locations

VENUE FIELDS: https://developer.foursquare.com/docs/responses/venue

you will need:
id: string identifier for venue
name:best known name of the venue
location: contains address, city, state, postalCode, lat, lng, and distance.
url: URL of the venue's website
rating: Numerical rating of the venue (0 through 10). Returned as part of an explore result, excluded in search results. Not all venues will have a rating.

API Explorer:
https://developer.foursquare.com/docs/explore#req=venues/search%3FproviderId%3Dnymag%26linkedId%3D59455
____________________________________________________________


when that item is clicked, it will be added to the list
in the left column.

It will include a picture, the venue name, the address,
and its rating.


https://developer.foursquare.com/start/search



https://api.foursquare.com/v2/venues/search
  ?client_id=KIG3G11STJJ03SUXC2ZVCDPKEWGTI0LSQSZEZ3Y2YFY2YNL1
  &client_secret=ZWS32KM4WZE4PD3X5QEIV4Q3HGCJPDTOE1HB2QZ1FS03K2TN
  &v=20130815
  &ll=40.7,-74
  &query=sushi
  
  




google how to create a google-like AJAX search

search results 

.search-results-dropdown.onClick(this.append)




-----------------------------------------------------------------------------------
Creating a dropdown search menu

https://www.sitepoint.com/10-ajaxjquery-autocomplete-tutorial-examples/


Using the typeahead library

http://twitter.github.io/typeahead.js/
