const googleMaps = require('@google/maps');
const Promise = require('bluebird');
const shared = require('./shared.js');

module.exports = function init(){

    return gladys.param.getValue('GOOGLE_DIRECTION_API_KEY')
        .then((googleDirectionApiKey) => {

            // create the client API instance
            shared.googleMapsClient = googleMaps.createClient({
                key: googleDirectionApiKey
            });
            
            // register the provider
            gladys.direction.addProvider('google-direction');
        })
        .catch((err) => {
            sails.log.warn('Google directions : Error : No API key found. Have you set the parameter "GOOGLE_DIRECTION_API_KEY" in Gladys ?');
            sails.log.warn(err);
        });
};