const { Client } = require('discord.js-selfbot-v13');

// Ganti Token Discordmu
const TOKEN = [
  "TOKEN1..",
  "TOKEN2.."
]

// Daftar template chat
const chatTemplates = [
  "Iya bener juga sih",
  "ngopi abangkuh",
  "Wah gue baru tau",
  "udah yappingnya?",
  "info lc bang",
  "LFG",
  "Haha iya itu lucu juga",
  "info loker yang kalo ga masuk bosnya chat kangen",
  "Seriusan?",
  "oro oro",
  "bang",
  "rame bener ini",
  "gas push sekarang mumpung slowmode masih 2 menit besok mungkin naik jadi 3 menit",
  "wi wok de tok not onli tok de tok",
  "kapan tge bang",
  "cape bener jadi badut",
  "mabar yuk hyper estes",
  "ramaikan lalu hitamkan",
  "mantep bang",
  "cape ga bang mengbadut kaya gini",
  "gaskeun boy",
  "assalamualaikum, pagi abangkuh",
  "2 oro saya",
  "gasken push",
  "siapa yang cita-citanya jp oro",
  "aku jg maw lvl 3",
  "makan dlu gw bang",
  "awas aja kalo abu wkwk",
  "omke gas omke gams",
  "jangan lupa push react emot",
  "anjir ngepush daritadi cape banget",
  "ada nona ambon ga disini wkwk",
  "lawan terus rasa ingin menyerah",
  "eh bentar gw kena ss",
  "kalo cape istirahat, jangan logout dari mimpi",
  "ngopi dulu ga sih?",
  "abis ini gue gw turu ah cpt push mulu",
  "Semangat push level bro!",
  "jangan lupa tebar emote biar hoki",
  "gua doain yang react dapet jp",
  "tolong jangan ajak main rank jam 3 pagi",
  "tidur bang, jangan begadang buat role yang ga seberapa ini",
  "mabar tapi yang bisa main yah",
  "aku hanya anak kecil yang ingin lvl 3",
  "kenapa slowmode bisa menyakiti batin",
  "usaha dulu ngeluh belakangan",
  "orang gila mana yang ngebadut jam segini",
  "heemm",
  "2 oro saya",
  "oro adalah jalan ninjaku",
  "jam segini masih rame? edan",
  "asli pegel tangan gw bang, mana slowmode lama lagi",
  "push terus, jangan kasih kendor",
  "bang jangan badut terus, nanti kena ban",
  "jangan lupa mandi biar hoki",
  "demi role apapun kulakukan",
  "turu bang jangan badut mulu",
  "Ungu Ku hilang Pak wkwkwk",
  "mending tidur atau push sampe pingsan?"
];


const CHANNEL_ID = '1366472063358861543';

TOKEN.forEach((token, index) => {
  const client = new Client();

  client.on('ready', () => {
    console.log(`Selfbot #${index + 1} aktif sebagai ${client.user.tag}`);
    
    const channel = client.channels.cache.get(CHANNEL_ID);
    if (!channel) {
      console.error(`[#${index + 1}] Channel tidak ditemukan!`);
      return;
    }

    console.log(`[#${index + 1}] Channel ditemukan: ${channel.name}`);

    setInterval(() => {
      const randomMessage = chatTemplates[Math.floor(Math.random() * chatTemplates.length)];
      channel.sendTyping();
      setTimeout(() => {
        channel.send(randomMessage);
        console.log(`[#${index + 1}] [Sent] ${randomMessage}`);
      }, Math.floor(Math.random() * 3000) + 2000);
    }, 120000);
  });

  client.login(token.trim());
});
