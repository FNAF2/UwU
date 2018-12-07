const Discord = require('discord.js');
const Bot = new Discord.Client();
const Key = 'NTIwMzc0NjMwNDQ4NDk2NjQw.Dus_bQ.QZk9UFwA6w07-299NPBZ069rQw0'

Bot.on('message', function(message){
    if(message.content == 't!test')
    {
        message.reply('Testing Connection');
        console.log("Command TEST sent")
    }
});

Bot.on('ready',function(){
    console.log("Ready");
})

Bot.login(Key)