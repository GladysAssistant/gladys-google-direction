module.exports = function(sails) {

    var init = require('./lib/init.js');
    var travelTime = require('./lib/direction.travelTime.js');

    gladys.on('ready', function(){
        init().catch(sails.log.warn);
    });
    
    return {
        direction: {
            travelTime: travelTime
        }
    };
};