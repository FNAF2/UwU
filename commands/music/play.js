const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const YTDL = require('ytdl-core');
const ffmpeg = require('ffmpeg');
const opusscript = require('opusscript');

function Play(connection, message)
{
    var server = servers[message.guild.id]
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}))
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if(server.queue[0])
        {
            Play(connection,message)
        }
        else{
            connection.disconnect
        }
    });

}

class PlayCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'Adds a song to the queue then makes the bot join the voice channel you are in, if not already in it.'
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
                message.member.voiceChannel.join()
                    .then(connection => {
                        message.reply("Successfully connected to the voice channel.");
                        var server = servers[message.guild.id]
                        server.queue.push(args);
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