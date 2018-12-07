const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const Bot = new Commando.Client({
    commandPrefix: 't!'
    });
const Key = 'NTIwMzc0NjMwNDQ4NDk2NjQw.Dus_bQ.QZk9UFwA6w07-299NPBZ069rQw0'


Bot.registry.registerGroup('simple', 'Fun & Games');
Bot.registry.registerGroup('music', 'Music & Audio');
Bot.registry.registerGroup('util', 'Utility');
Bot.registry.registerGroup('com', 'Commands');
Bot.registry.registerDefaults();
Bot.registry.registerCommandsIn(__dirname + "/commands");

Bot.on('message', function(message){
    if(message.content == 't!test')
    {
        message.channel.sendMessage('Testing Connection ' + message.author);
        console.log("Command TEST sent")
    }
});
  
Bot.on('ready', () => {
    console.log(`Logged in as ${Bot.user.tag}!`);
  });
  

Bot.login(Key)