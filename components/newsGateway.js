var rp = require('request-promise');

 function getNewsByCountry(country){
    var options = {
        uri: 'https://newsapi.org/v2/top-headlines?country='+country+'&apiKey=c5ee7c4373bf4859aa7644972d62c5a9',
        headers: {
            'User-Agent': 'request-promise'
        },
        json: true // Automatically parses the JSON string in the response
    };
    
   return rp(options)
        
}



function getNewsByType(searchQuery){
    var options = {
        uri: 'https://newsapi.org/v2/top-headlines?q='+searchQuery+'&apiKey=c5ee7c4373bf4859aa7644972d62c5a9',
        headers: {
            'User-Agent': 'request-promise'
        },
        json: true // Automatically parses the JSON string in the response
    };
    
   return rp(options)
}

//Only one module.export can exist in one file.

module.exports = {
    getNewsByCountry: getNewsByCountry,
    getNewsByType: getNewsByType
}