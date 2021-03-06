/* eslint-disable no-unused-vars */
const patron = require('patron.js');
const util = require('../../utility');
const utility = require('util');
const Discord = require('discord.js');
const SafeMode = require('../../preconditions/safeMode.js');

class Exec extends patron.Command {
  constructor() {
    super({
      names: ['exec', 'execute'],
      groupName: 'developer',
      description: 'Execute JavaScript code',
      guildOnly: false,
      preconditions: [SafeMode],
      args: [
        new patron.Argument({
          name: 'code',
          key: 'code',
          type: 'string',
          example: 'msg.channel.send(\'This selfbot is good\');',
          remainder: true
        })
      ]
    });
  }

  async run(msg, args) {
    try {
      const client = msg.client;
      const message = msg;
      const guild = msg.guild;
      const channel = msg.channel;
      const author = msg.author;
      const member = msg.member;

      let result = eval(args.code);

      if (result instanceof Promise) {
        result = await result;
      }

      if (typeof result !== 'string') {
        result = utility.inspect(result, { depth: 0 });
      }

      result = result.replace(msg.client.token, ' ').replace(/\[Object\]/g, 'Object').replace(/\[Array\]/g, 'Array');

      return;
    } catch (err) {
      console.log(err);
      return util.Messenger.sendError(msg.channel, '```js\n' + err + '```');
    }
  }
}

module.exports = new Exec();
