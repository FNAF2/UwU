const Commando = require('discord.js-commando');

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
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
            
        }
        else
        {
            message.reply("I am not connected to any voice channels.");
        }
    }
}

module.exports = LeaveChannelCommand;