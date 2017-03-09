let axios = require('axois');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=914d1e6bf67ff842cc17cbfff02654d5&units=metric';

// 914d1e6bf67ff842cc17cbfff02654d5
module.exports = {
    getTemp: function (location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        axios.get(requestUrl).then((res) => {
            // if we get a response - handle other error cases
            if(res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
               // in case of success return the temp
                return res.data.main.temp;
            }
        // error case below  
        }, (res) => {
            throw new Error(res.data.message);
        })
    }
}