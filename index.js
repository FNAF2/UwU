const Commando = require('discord.js-commando');
const Bot = new Commando.Client({
    commandPrefix: 't!'
    });
const Key = 'NTIwMzc0NjMwNDQ4NDk2NjQw.Dus_bQ.QZk9UFwA6w07-299NPBZ069rQw0'

bot.user.setPresence({ status: 'online', game: { name: 'type t!help' } });

Bot.registry.registerGroup('simple', 'Simple');
Bot.registry.registerDefaults();
Bot.registry.registerCommandsIn(__dirname + "/commands");

Bot.on('message', function(message){
    if(message.content == 't!test')
    {
        message.channel.sendMessage('Testing Connection ' + message.author);
        console.log("Command TEST sent")
    }
});

Bot.on('ready',function(){
    console.log("Ready");
})

Bot.login(Key)