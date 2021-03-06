const data = require('../../data.json');
const discord = require('discord.js');
const Random = require('./Random.js');
const StringUtil = require('./StringUtil.js');
const NumberUtil = require('./NumberUtil.js');

class Messenger {
  static send(channel, description, title = '', color = null) {
    const embed = new discord.RichEmbed()
      .setColor(color || Random.arrayElement(data.embedColors))
      .setDescription(description);

    if (!StringUtil.isNullOrWhiteSpace(title)) {
      embed.setTitle(title);
    }

    return channel.send({ embed: embed }).catch(() => null);
  }

  static sendTitle(channel, title, description = '', color = null) {
    const embed = new discord.RichEmbed()
      .setColor(color || Random.arrayElement(data.embedColors))
      .setTitle(title);

    if (!StringUtil.isNullOrWhiteSpace(description)) {
      embed.setDescription(description);
    }

    return channel.send({ embed: embed }).catch(() => null);
  }

  static sendFooter(channel, footer, description = '', color = null) {
    const embed = new discord.RichEmbed()
      .setColor(color || Random.arrayElement(data.embedColors))
      .setFooter(footer);

    if (!StringUtil.isNullOrWhiteSpace(description)) {
      embed.setDescription(description);
    }

    return channel.send({ embed: embed }).catch(() => null);
  }

  static sendEmbed(channel, commandEmbed, color = null) {
    const embed = commandEmbed
      .setColor(color || Random.arrayElement(data.embedColors));
    return channel.send({ embed: embed }).catch(() => null);
  }

  static sendError(channel, description, title = '') {
    return this.send(channel, description, title, data.errorColor);
  }

  static sendFields(channel, fieldsAndValues, inline = true, color = null) {
    const embed = new discord.RichEmbed()
      .setColor(color || Random.arrayElement(data.embedColors));

    if (!NumberUtil.isEven(fieldsAndValues.length)) {
      throw new TypeError('The fieldsAndValues length must be even.');
    }

    for (let i = 0; i < fieldsAndValues.length - 1; i++) {
      if (NumberUtil.isEven(i)) {
        embed.addField(fieldsAndValues[i], fieldsAndValues[i + 1], inline);
      }
    }

    return channel.send({ embed }).catch(() => null);
  }

  static DM(user, description, title = '', color = null) {
    return this.send(user, description, title, color);
  }

  static async tryDM(user, description, title = '', color = null) {
    try {
      await this.DM(user, description, title, color);
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = Messenger;
