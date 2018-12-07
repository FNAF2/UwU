const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class JoinChannelCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Makes the bot join the voice channel you are in'
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                    .then(connection => {
                        message.reply("Successfully connected to the voice channel.");
                    })
            }
        }
        else
        {
            message.reply("You are not in a voice channel.");
        }
    }
}

module.exports = JoinChannelCommand;