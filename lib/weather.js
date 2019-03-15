const https = require('https');
const http = require('http');
const print = require('./print');

const getWeather = (url) => {
    try{
        https.get(url, (response) => {
            if(response.statusCode == 200){
                let body = "";
                response.on('data', (data) => {
                    body += data.toString();
                });
    
                response.on('end', () => {
                    try{
                        const weather = JSON.parse(body);
                        print.report(`Current Temprature of ${weather.name} is ${weather.main.temp}C (${weather.weather[0].description})`);
                    }
                    catch(error){
                        print.error(error);
                    }
                });
            }
            else{
                const message = `There was an error in getting the Weather Report. (${http.STATUS_CODES[response.statusCode]})`;
                const statusCodeError = new Error(message);
                print.error(statusCodeError);
            }
        });
    }
    catch(error){
        print.error(error);
    }
}

module.exports.get = getWeather;