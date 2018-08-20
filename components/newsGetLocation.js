var rp = require('request-promise');

module.exports = function getLocation(searchQuery){
    var options = {
        
        uri: 'https://maps.googleapis.com/maps/api/geocode/json?address='+searchQuery+'&key=' + process.env.google_geocode_apikey,
        headers: {
            'User-Agent': 'request-promise'
        },
        json: true // Automatically parses the JSON string in the response
    };
    
   return rp(options)
        .then(function (repos) {
            
            console.log('User has %d repos', repos.length);
            return repos;
        })
        .catch(function (err) {
            // API call failed...
        });
}

