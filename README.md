# home-points-web

Initially written in Python, this is a revamped version of HomePoints written in Angular.

HomePoints is used to filter GPS data.  Specifically, you can define any number of circles, and any GPS data that falls outside of those circles will be deleted.  Currently .csv is the only supported file type.  GPS data must be in decimal degrees (ex: 38.889722, -77.008889).  Converting from degrees, minute, seconds (DMS) to decimal degrees (DD) is easy, just do a quick Google Search to find plenty of free conversion services.  

HomePoints requires two input files.  One will contain your raw GPS data which must be in a two-column .csv file with the headers Latitude and Longitude in the first two cells followed by coordinate pairs in those two columns.  The second input file will define your circles in a 3 column .csv file with the headers Latitude, Longitude and Radius.  The center of your circle will be defined as a latitude/longitude coordinate pair in the first two columns, and the radius of your circle will be defined in the 3rd column as a number of miles.
