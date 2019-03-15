const weather = require('./lib/weather');
const print = require('./lib/print');
const api = require('./api.json');
const input = process.argv.slice(2);
let url = "";

if(input.length == 1){
    url = `https://api.openweathermap.org/data/2.5/weather?zip=${input[0]}&units=metric&appid=${api.key}`;
}
else if(input.length == 2){
    url = `https://api.openweathermap.org/data/2.5/weather?q=${input[0]},${input[1]}&units=metric&appid=${api.key}`;
}
else{
    const message = "Error in given inputs";
    const statusCodeError = new Error(message);
    print.error(statusCodeError);
}

weather.get(url);