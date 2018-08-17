/*var getNews = require('../components/newsGateway');*/
module.exports = function(controller) {
    controller.hears('hi','message_received', function(bot, message) {

        bot.createConversation(message, function(err, convo) {

          
           
                convo.addMessage({
                    text:'you can click [link](https://www.bbc.co.uk/news/politics) to see the politic news',
                   
            },'no_thread');
        
             
    
            
            // create a path for when a user says|
            convo.addMessage({
                text: 'You said no, that is too bad.',
            },'no_thread');
        
            // create a path where neither option was matched
            // this message has an action field, which directs botkit to go back to the `default` thread after sending this message.
            convo.addMessage({
                text: 'Sorry I did not understand.',
                action: 'default',
            },'bad_response');
        
            // Create a yes/no question in the default thread...
            convo.addQuestion('What type of news do you want to read?', [
                {
                    pattern: 'bla',
                    callback: function(response, convo) {
                        convo.gotoThread('bla_thread');
            
                    },
                },
                {
                    pattern: 'no',
                    callback: function(response, convo) {
                        convo.gotoThread('no_thread');
                    },
                },
                {
                    default: true,
                    callback: function(response, convo) {
                        convo.gotoThread('bad_response');
                    },
                }
            ],{},'default');
        
            convo.activate();
        });
    })

}
