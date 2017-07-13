const patron = require('patron.js');

class Lenny extends patron.Command {
  constructor() {
    super({
      name: 'lenny',
      aliases: ['l'],
      group: 'emote',
      description: 'Adds "( ͡° ͜ʖ ͡°)" to your message',
      guildOnly: false,
      args: [
        new patron.Argument({
          name: 'text',
          key: 'text',
          type: 'string',
          example: 'I see what you did there',
          remainder: true,
          default: ''
        })
      ]
    });
  }

  async run(msg, args) {
    return msg.channel.send(args.text + ' ( ͡° ͜ʖ ͡°)');
  }
}

module.exports = new Lenny();
