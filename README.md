# Troll bot lol

It's a dsicord bot that troll people by:

-   Ghost pinging them
-   Sending _odd_ messages, that look like they were sent by a real member using webhooks

Invite link [https://discord.com/api/oauth2/authorize?client_id=654104074530062346&permissions=970456176&scope=bot](https://discord.com/api/oauth2/authorize?client_id=654104074530062346&permissions=970456176&scope=bot)

Inspired by [this post](https://www.reddit.com/r/discordapp/comments/ma44h4/what_type_of_bot_are_you_looking_for/grqwyot?utm_source=share&utm_medium=web2x&context=3).

## Running it yourself

-   Install node.js
-   Download the code from GitHub using the button in the top right
-   Create a file called `.env` and put this in it, replacing `<YOUR BOT TOKEN>` with a bot token from the discord [developer portal](https://discord.com/developers)

```env
TOKEN=<YOUR BOT TOKEN>
```

-   Rename the file in the `data/` folder from `database.db.example` to `database.db`
-   Run this command to install required packages: `npm i`
-   Run the bot with `node .`
