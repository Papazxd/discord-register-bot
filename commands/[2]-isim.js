const Discord = require("discord.js");
const db = require("quick.db");
const Database = require('quick.db')

const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if (!message.member.roles.cache.has(ayarlar.yetkiliRol) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setThumbnail(message.author.avatarURL).setFooter(`developed by Papaz.`).setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`)).then(m => m.delete({timeout: 8000}));


    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenenKişi) return message.react(ayarlar.no)


const isim = args[1];
const yaş = args[2];
etiketlenenKişi.setNickname(`${ayarlar.tag} ${isim} | ${yaş} `)

message.react(ayarlar.yes)

db.push(`isimler.${etiketlenenKişi.id}`, {
İsim: isim,
Yaş: yaş,
Yetkili: message.author.id
})

}
exports.config = {
    name: "isim",
    guildOnly: true,
    aliases: ["i", "nick"]
}