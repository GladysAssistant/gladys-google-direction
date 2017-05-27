const shared = require('./shared.js');
const Promise = require('bluebird');

module.exports = function travelTime(options){
    if(shared.googleMapsClient === null) {
        return Promise.reject(new Error('No instance found. Have you set API keys ?'));
    }

    return new Promise(function(resolve, reject){
        shared.googleMapsClient.directions(options, function(err, response){
            if(err) return reject(err);

            if(!response.json || !response.json.routes || response.json.routes.length === 0 && response.json.routes[0].legs.length === 0){
                return reject(new Error('No direction found'));
            }
            
            // return only departure time, arrival time and duration
            var result = {
                departure_time: response.json.routes[0].legs[0].departure_time.value,
                arrival_time: response.json.routes[0].legs[0].arrival_time.value,
                duration: response.json.routes[0].legs[0].duration.value
            };

            resolve(result);
        });
    });
};