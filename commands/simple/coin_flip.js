const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const YTDL = require('ytdl-core');

class CoinFlipCommand extends Commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Flips a coin, landing on either heads or tails    '
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0){
            message.reply("Your coin landed on Heads!");
        }
        else{
            message.reply("Your coin landed on Tails!");
        }
    }
}

module.exports = CoinFlipCommand;