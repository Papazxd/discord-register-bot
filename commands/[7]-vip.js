const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if (!message.member.roles.cache.has(ayarlar.yetkiliRol) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setThumbnail(message.author.avatarURL).setFooter(`developed by Papaz.`).setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`)).then(m => m.delete({timeout: 8000}));

    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenenKişi) return message.react(ayarlar.no)



if(etiketlenenKişi.roles.cache.has(ayarlar.vipRol))return message.react(ayarlar.no)

etiketlenenKişi.roles.add(ayarlar.vipRol)

message.react(ayarlar.yes)

}
exports.config = {
    name: "vip",
    guildOnly: true,
    aliases: ["valuable", "very-important-person", "veryimportantperson"]
}