const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
  console.log(`${client.user.username} is Ready For Working 24/7!`);
  client.user.setActivity('MR IS THE BEST', {
    type: 'STREAMING',
    url: 'https://twitch.tv/mr_code_new' 
  });
});

client.login(process.env.token);
