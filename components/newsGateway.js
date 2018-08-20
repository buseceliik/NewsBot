var rp = require('request-promise');


 function getNewsByCountry(country){
    var options = {
        uri: 'https://newsapi.org/v2/top-headlines?country='+country+'&apiKey=' +  process.env.news_apikey,
        headers: {
            'User-Agent': 'request-promise'
        },
        json: true // Automatically parses the JSON string in the response
    };
    
   return rp(options)
        
}



function getNewsByType(searchQuery){
    var options = {
        uri: 'https://newsapi.org/v2/top-headlines?q='+searchQuery+'&apiKey='+  process.env.news_apikey,
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