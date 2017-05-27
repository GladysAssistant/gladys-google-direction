const shared = require('./shared.js');
const Promise = require('bluebird');

module.exports = function travelTime(options){
    if(shared.googleMapsClient === null) {
        return Promise.reject(new Error('No instance found. Have you set API keys ?'));
    }

    return new Promise(function(resolve, reject){
        shared.googleMapsClient.directions(options, function(err, response){
            console.log(err, response.json.routes[0].legs);
            if(err) return reject(err);

            if(!response.json || !response.json.routes 
                || response.json.routes.length === 0 
                || response.json.routes[0].legs.length === 0
                || !response.json.routes[0].legs[0].duration
            ){
                return reject(new Error('No direction found'));
            }
            
            // return only departure time, arrival time and duration
            var result = {
                duration: response.json.routes[0].legs[0].duration.value
            };

            if(response.json.routes[0].legs[0].departure_time) {
                result.departure_time = response.json.routes[0].legs[0].departure_time.value;
            }

            if(response.json.routes[0].legs[0].arrival_time) {
                result.arrival_time = response.json.routes[0].legs[0].arrival_time.value;
            }

            resolve(result);
        });
    });
};