const patron = require('patron.js');
const util = require('../../utility');

class Ping extends patron.Command {
  constructor() {
    super({
      names: ['ping'],
      groupName: 'statistics',
      description: 'See your ping',
      guildOnly: false
    });
  }

  async run(msg) {
    const ping = msg.client.ping.toFixed(0);
    const pingLog = '    ' + ping + ' ms';
    console.log(pingLog.yellow);
    return util.Messenger.sendTitle(msg.channel, 'Ping: ' + ping + ' ms');
  }
}

module.exports = new Ping();
