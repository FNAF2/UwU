const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const YTDL = require('ytdl-core');

class FunMirrorCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'mirror',
            group: 'simple',
            memberName: 'mirror',
            description: 'Looks at your reflection in a mirror'
        });
    }

    async run(message, args)
    {
        message.reply(message.author.avatarURL);
    }
}

module.exports = FunMirrorCommand;