const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const YTDL = require('ytdl-core');

class LeaveChannelCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Makes the bot leave the voice channel you are in'
        });
    }

    async run(message, args)
    {
        if(!message.member.voiceChannel)
        message.reply("You are not in the voice channel with me."); 

        if(!message.guild.voiceConnection)
        message.reply("I am not connected to any voice channels.");

        if(message.guild.voiceConnection)
        if(message.member.voiceChannel)
        {
            message.guild.voiceConnection.disconnect();
            message.reply("Disconnected from the voice channel.");
        }
        
               
    }
}

module.exports = LeaveChannelCommand;