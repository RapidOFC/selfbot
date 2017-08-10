const patron = require('patron.js');
const util = require('../../utility');

class SearchEmoji extends patron.Command {
  constructor() {
    super({
      names: ['searchemoji', 'se', 'searchemojis', 'emojisearch'],
      groupName: 'emoji',
      description: 'Find all global emojis to which you have access that match a search',
      guildOnly: false,
      args: [
        new patron.Argument({
          name: 'name',
          key: 'input',
          type: 'string',
          example: 'think'
        })
      ]
    });
  }

  async run(msg, args) {
    try{
      let emojis = msg.client.emojis.findAll('managed', true);
      if (emojis.length === 0) {
        return util.Messenger.sendError(msg.channel, 'You are not in any servers with global emojis');
      }
      emojis = emojis.filter(emoji => emoji.requiresColons === true && emoji.name.toLowerCase().includes(args.input.toLowerCase())).sort(util.StringUtil.alphabeticallySort);
      if (emojis.length === 0) {
        return util.Messenger.sendError(msg.channel, 'No matches found');
      }

      let m = '';
      for (let i = 0; i < emojis.length; i++) {
        m += emojis[i] + ' ';
      }

      if (m.length > 1950) {
        return util.Messenger.sendError(msg.channel, 'Too many matches found, please be more specific');
      }

      return util.Messenger.send(msg.channel, m, 'Found ' + emojis.length + ' Results for: ' + args.input);
    } catch(e) {
      if (e === 'Cannot read property \'values\' of undefined') {
        return util.Messenger.sendError(msg.channel, 'You are using this command too soon after starting the selfbot. Give me some time to load in all your insane emojis ;)');
      }
      return util.Messenger.sendError(msg.channel, 'Something went wrong.\n' + e);
    }
  }
}

module.exports = new SearchEmoji();