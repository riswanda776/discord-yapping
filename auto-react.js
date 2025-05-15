const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const CHANNEL_ID = '1366472063358861543';

client.on('ready', () => {
  console.log(`Selfbot aktif sebagai ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    if (message.channel.id !== CHANNEL_ID) return;
    if (message.author.id === client.user.id) return;
  
    const delay = Math.floor(Math.random() * 3000) + 1000; // 1–3 detik
  
    setTimeout(async () => {
      try {
        await message.react('<:orologo:1355174580175503380>');
        console.log(`Reacted to message after ${delay}ms: ${message.content}`);
      } catch (err) {
        console.error('Gagal react:', err);
      }
    }, delay);
  });
  
  

const DISCORD_AUTH = "TOKEN DISCORD MU";
client.login(DISCORD_AUTH);
