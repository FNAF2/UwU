const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const YTDL = require('ytdl-core');

function Play(connection, message)
{
    
}

class PlayCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'Adds a song to the queue then makes the bot join the voice channel you are in.'
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                if(!servers[message.guild.id])
                {
                    server[message.guild.id] = {queue: []}
                }
                var server = servers[message.guild.id]
                message.member.voiceChannel.join()
                    .then(connection => {
                        message.reply("Successfully connected to the voice channel.");
                        Play(connection, message);
                    })
            }
        }
        else
        {
            message.reply("You are not in a voice channel.");
        }
    }
}

module.exports = PlayCommand;