"use strict ";
const axios = require ("axios");
const apikey = '8949aa4a3e20c4e4cbd2bffbab70e6a8'; // your api key to the apixu

const getWeather = location => {
    return new Promise ( async ( resolve , reject ) => {
        try {
            const weatherConditions = await axios .get(
            `http://api.weatherstack.com/current?access_key=${apikey}&query=${location}`
            //`https://api.weatherbit.io/v2.0/current?city=${location}&country=${country}&key=${apikey}`,
            /*
            {
                params : {
                    key: apikey ,
                    q: location ,
                    days : 3
                }
            }); */);
            //resolve ( weatherConditions . data ) // returns back the results to the chatbot
            console.log('It is', weatherConditions.data.current.weather_descriptions, 'outside in ', `${location},`,weatherConditions.data.location.country )
            if (weatherConditions.data.current.temperature<9){
                console.log('Put on a sweater, because the temperature is of only',weatherConditions.data.current.temperature+ " degrees")
            }
            else{
                if (weatherConditions.data.current.temperature>32){
                    console.log('It is quite hot outside, the temperature is of only',weatherConditions.data.current.temperature+ " degrees")
                }
                else {
                    console.log('The temperature is of ',weatherConditions.data.current.temperature+ " degrees")
                }}
            
            }
        catch ( error ){
            reject ( error );
        }
    });
}
module . exports = getWeather ;