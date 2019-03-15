# Weather Command Line Application
A Command Line Application to get the current weather and forecasts of any Geolocation.

*Access current weather data for any location on Earth including over 200,000 cities!*

![alt](https://raw.githubusercontent.com/anujsaxenadev/Weather_Cli_App/master/Examples.png)

## Installation

* Check that you have node and npm installed
	* To check if you have Node.js installed, run this command in your terminal
	 
    	 ``` node -v ``` 
	* To check if you have npm installed, run this command in your terminal
     
    	 ``` npm -v ```
* If any of them are not Installed, install it from here.( [npm](https://www.npmjs.com/get-npm), [node.js](https://nodejs.org/en/download/) ).
* To install all the required packages to run this application, run this in tour terminal
	
    ``` npm start ```
* Get the API Key From [Open Weather Maps](https://openweathermap.org/).
* Put that API Key to api.json
	
    ```
          {
              "key": "<Enter Your API Key Here>"
          }
    ```
* You are now ready to get the current weather and forecasts of any Geolocation.

## How to Use?

#### Get the Weather by Zipcode
```
	node app.js zip_code
```

#### Get the Weather by City
```
	node app.js city_name country_code
```
 use ISO 3166 country codes only.
