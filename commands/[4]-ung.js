const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if (!message.member.roles.cache.has(ayarlar.yetkiliRol) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setThumbnail(message.author.avatarURL).setFooter(`developed by Papaz.`).setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`)).then(m => m.delete({timeout: 8000}));


  const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0])

if(message.member.roles.highest.position <= etiketlenenKişi.roles.highest.position) return message.react(ayarlar.no)


etiketlenenKişi.roles.set([ayarlar.kayıtsızRol])
etiketlenenKişi.setNickname(`${ayarlar.tag} Kayıtsız`)

message.react(ayarlar.yes)

}
exports.config = {
    name: "kayıtsız",
    guildOnly: true,
    aliases: ["unregistered", "kayitsiz", "unreg", "unregister"]
}