All commands are catagorized by groups. Each of the following sections is a group.

The syntax of the command usage is:

`Optional paramater: []`

`Required paramater: <>`

##Table Of Contents
- [Ascii](#ascii)
- [Developer](#developer)
- [Emoji](#emoji)
- [Fun](#fun)
- [Image](#image)
- [Information](#information)
- [Messager](#messager)
- [Moderation](#moderation)
- [Statistics](#statistics)
- [Utility](#utility)

### Ascii

These commands add ascii emotes to your messages

Command | Description | Usage
---------------- | --------------| -------
Disapprove|Adds "ಠ_ಠ" to your message|`-disapprove [text]`
Fliptable|Adds "ノ┬─┬ノ ︵ ( \o°o)\" to your message|`-fliptable [text]`
Happy|Adds "ᕕ( ᐛ )ᕗ" to your message|`-happy [text]`
Happyflip|Adds "(╯ᐛ)╯ ︵ ┻━┻" to your message|`-happyflip [text]`
Innocent|Adds "ʘ‿ʘ" to your message|`-innocent [text]`
Lenny|Adds "( ͡° ͜ʖ ͡°)" to your message|`-lenny [text]`
Rageflip|Adds "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻" to your message|`-rageflip [text]`
Shrug|Works like the desktop /shrug command|`-shrug [text]`
Tableflip|Adds "(╯°□°）╯︵ ┻━┻" to your message|`-tableflip [text]`
Unflip|Adds " ┬─┬﻿ ノ( ゜-゜ノ)" to your message|`-unflip [text]`

### Developer

These commands are mostly for the use of people with knowledge of Discord.js

Command | Description | Usage
---------------- | --------------| -------
Bf|Turn text into BF code|`-bf <text>`
Bfreader|Turn BF code into text|`-bfreader <BF Code>`
Commandcount|See how many commands have been added so far|`-commandcount`
Djs|Get a link to the Discord.js docs|`-djs`
Eval|Evaluate JavaScript code|`-eval <code>`
Exec|Execute JavaScript code|`-exec <code>`
Patron|Get a link to the Patron.js docs|`-patron`
Roleids|Gets all the role ids of a guild.|`-roleids`

### Emoji

These commands are related to emojis or emotes

Command | Description | Usage
---------------- | --------------| -------
B|🅱|`-b <text>`
Clap|👏 Emphasize 👏 your 👏 text 👏|`-clap <text>`
Emojify|Turns your message into emojis|`-emojify <text>`
Enlarge|Send a full-size version of a custom emoji|`-enlarge <emoji>`
Guildemojis|List the current guild's emojis|`-guildemojis`
Kms|Kill yourself in a 3 frame animation|`-kms`
Stealemoji|Copies an emoji to the current server|`-stealemoji <emoji>`

### Fun

These commands were made with fun and entertainment in mind

Command | Description | Usage
---------------- | --------------| -------
8ball|Ask the magic 8ball your question|`-8ball <question>`
Choose|Have the Selfbot help you choose between a set of options|`-choose <choice>`
Flip|Flip up to 100,000 coins|`-flip [amount]`
Lovedetector|See how much two people love each other|`-lovedetector <person 1> <person 2>`
Poll|Create a poll with up to 9 options|`-poll <title> <choice>`
Quote|Quote a message|`-quote <message>`
Quoteid|Quote a message via id|`-quoteid <messageId> [#channel]`
Remove|Deletes the command|`-remove <text>`
Roll|Rolls a random number|`-roll [Max Roll]`
Rps|Play Rock, Paper, Scissors against the selfbot|`-rps <choice>`
Slots|Play a Slot Machine|`-slots [Bet]`

### Image

These commands are for when text just doesn't quite capture how you feel

Command | Description | Usage
---------------- | --------------| -------
Achievement|For when someone deserves an achievement|`-achievement <achievementName>`
Boi|Use this when your buddy says something so stupid you dont even know how to respond|`-boi`
Facepalm|Give your buddy the classic facepalm when he says something stupid|`-facepalm`
L|Use this when someone needs to just take the L|`-l`
Reverse|Sends an image of an Uno reverse card|`-reverse`
Waitwhat|Useful for when your pal says something that makes absolutely no sense|`-waitwhat`

### Information

These commands provide you with various bits of information

Command | Description | Usage
---------------- | --------------| -------
Alias|View a command's aliases|`-alias <command>`
Avatar|Get the avatar of a user|`-avatar [@user]`
Discrim|Finds users with the specified discriminator|`-discrim <discrim>`
Game|Shows what game a user is playing|`-game [@user]`
Git|Get a link to this Selfbot's Github Repository|`-git`
Guildicon|Get a guild's icon|`-guildicon [guild]`
Lmgtfy|Help someone learn how to google their question|`-lmgtfy <search>`
Modules|View the current command modules|`-modules`
Server|Sends an invite to this Selfbot's server|`-server`
Setup|Get a link to the setup page for this Selfbot|`-setup`

### Messager

These commands allow you to send your messages in unique ways

Command | Description | Usage
---------------- | --------------| -------
Customembed|Allows you to send more customized embeds. To skip an arg, use " "|`-customembed <description> [title] [footer] [image] [thumbnail] [color] [fields]`
Embed|Sends your text in an embed|`-embed [text]`
Embedfooter|Sends your text in an embed footer|`-embedfooter <text>`
Embedtitle|Sends your text in an embed title|`-embedtitle <text>`
Forward|Sends your message to another channel|`-forward [#channel] <text>`
Forwardmessage|Forwards a message from chat to another channel|`-forwardmessage [#channel] <message>`
Removeplus|Sends <message> then deletes it|`-removeplus <message>`

### Moderation

These commands aid in the moderation and management of servers

Command | Description | Usage
---------------- | --------------| -------
Altcheck|Check when a user's account was created and when they joined the guild|`-altcheck [@member]`
Ban|Ban any user.|`-ban <@user> [reason]`
Chill|Prevents the @everyone role from speaking in the current channel for a given time|`-chill <delayInSeconds>`
Escapepod|Kick a user out of voice via escape pod|`-escapepod [@members]`
Kick|Kick a member from the guild|`-kick <@member> [reason]`
Mute|Prevent a member from speaking in any text channel.|`-mute <@member>`
Pin|Pin a message in the current channel.|`-pin <message>`
Purge|Deletes a member's last messages in the current channel|`-purge [amount] [@member]`
Softban|Softban a user to delete their messages|`-softban <@user> [days to delete] [reason]`
Unban|Unban a banned user.|`-unban <banned user>`
Unmute|Unmute a muted member.|`-unmute <@member>`

### Statistics

These commands display various statistics and information

Command | Description | Usage
---------------- | --------------| -------
Emojistats|Get information about a custom emoji|`-emojistats <emoji>`
Guildstats|Get a guild's statistics|`-guildstats [guild]`
Memberstats|Get a member's statistics|`-memberstats [@member]`
Ping|See your ping|`-ping`
Stats|See some statistics about the Selfbot|`-stats`
Uptime|See how long your selfbot has been running|`-uptime`

### Utility

These commands provide various utilities and services

Command | Description | Usage
---------------- | --------------| -------
Calc|Do basic adding, subtracting, multiplying, and dividing|`-calc <problem>`
Clear|Clears the console|`-clear`
Help|View command information or list the commands in a module|`-help [command/module]`
Nick|Changes your nickname in the current guild|`-nick <nickname>`
Prune|Deletes your last messages in the current channel|`-prune [amount]`
Reboot|Reboots the selfbot|`-reboot`
Repeat|Schedule a message to send in the current channel|`-repeat <delayInSeconds> <amount> <message>`
Setavatar|Changes your avatar to the image provided|`-setavatar <pathToImageOrLink>`
Setgame|Sets what game you are playing|`-setgame [name]`
Status|Changes your status|`-status <status>`
