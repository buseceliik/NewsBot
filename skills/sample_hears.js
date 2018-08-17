module.exports = function(controller) {



  controller.hears('test','message_received', function(bot, message) {

    bot.reply(message,'I heard a test');

  });


  controller.hears('can you call (.*) please','message_received', function(bot, message) {

    var name = message.match[1];
    if(name.toLowerCase() == 'buse') {

    bot.reply(message,'sorry buse is not available');

    }
   
  
    if(name.toLowerCase() == 'anna')
    bot.reply(message,'anna cant open the phone right now');
  });

  controller.hears('typing','message_received', function(bot, message) {

    bot.reply(message,{
      text: 'This message used the automatic typing delay',
      typing: true,
    }, function() {

      bot.reply(message,{
        text: 'This message specified a 5000ms typing delay',
        typingDelay: 5000,
      });

    });

  });

}
