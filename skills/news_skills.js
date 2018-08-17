
var newsGateway =  require('../components/newsGateway.js');
var getLocation =  require('../components/newsGetLocation.js');

module.exports = function (controller) {
 
    controller.hears('Get me top news in (.*)','message_received', async function(bot, message) {
        var country = message.match[1];
        var shortResponse = await getLocation(country)
        var shortcut = shortResponse.results[0].address_components[0].short_name.toLowerCase();
         
        bot.createConversation(message, function(err, convo) {

                console.log(shortcut);
                newsGateway.getNewsByCountry(shortcut).then(function (result){
                
                        console.log(result);
                        if(result.articles.length == 0){
                            convo.addMessage({
                                text: 'there is no article such that'
                            },'default');
                        }
                        else
                        {
                            for(i=0;i<5;i++){
                            convo.addMessage({
                                text: result.articles[i].title + ' ' +   result.articles[i].description + '[link](' + result.articles[i].url+')',
                            },'default');
                        }
                        
                        }                
                        convo.next();
                    }).catch(function(){
                        convo.addMessage({
                            text: 'Please try again later.'
                        },'default');
                        convo.next();
                    });
                
                       
            convo.activate();
        });
    });


    controller.hears('news','message_received', async function(bot, message) {
        bot.createConversation(message, function(err, convo) {
            convo.addQuestion('What type of news do you want to read?',function(response,convo){
                console.log(response.text);
                newsGateway.getNewsByType(response.text).then(function (result){
                
                        console.log(result);
                        if(result.articles.length == 0){
                            convo.addMessage({
                                text: 'there is no article such that'
                            },'default');
                        }
                        else
                        {
                            for(i=0;i<5;i++){
                            convo.addMessage({
                                text: result.articles[i].title + ' ' +   result.articles[i].description + '[link](' + result.articles[i].url+')',
                            },'default');
                        }
                        
                        }                
                        convo.next();
                    }).catch(function(){
                        convo.addMessage({
                            text: 'Please try again later.'
                        },'default');
                        convo.next();
                    });
                
            },{},'default');             
            convo.activate();
        })
    });



}
