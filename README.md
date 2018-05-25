# Resturant Review App
---
It is Udacity project to implement a website that works perfectly across devices and with Lie-fi or offline network by using Service Worker. In addition, it's accessible by all users. 
The website shows a different cuisine on New York areas and gives a user the ability to filter out the restaurants.


## Project Files:

* index.html: has the main DOM contents to show the map with filter options for cousin and area. 
* resturant.html: has the DOM contents for a specific restaurant that the user has selected from index.html.
* css/style.css: has all the style code for the website.
* data/resturant.json: database of restaurants.
* js/dbhelper.js: to run the server and fetch a data from database.
* js/main.js: to implement a restaurant list and apply a filter feature
* js/resturant.js: to show a restaurant details of a specific restaurant in resturant.html
* sw-reg.js: to tell the browser where service worker JavaScript file lives.
* sw.js: has Service Worker contents to cache files


### Run the website:

1. Clone the project

2. In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

3. Open [Resturant Review App](http://localhost:8000/) from your local host, if you want to change the port, pelase update the port number in adhelper.js file. 

 



