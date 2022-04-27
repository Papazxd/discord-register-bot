const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require("../ayarlar.json")
module.exports = async client => {
  client.user.setPresence({ activity: { type: "WATCHING", name: `PAPAZ DAN SELAM ÇALANLARA DA SELAM :D İYİ KULANIN`}, status: 'online' })
};
