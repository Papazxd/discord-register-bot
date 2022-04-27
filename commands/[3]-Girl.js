const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const Database = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {

    if (!message.member.roles.cache.has(ayarlar.yetkiliRol) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp().setThumbnail(message.author.avatarURL).setFooter(`developed by Papaz.`).setDescription(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`)).then(m => m.delete({timeout: 8000}));

let member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))

let tag = ayarlar.tag
let nick = args[1]
let yaş = args[2];
if(!member) return message.react(ayarlar.no)
if(member.id === client.user.id) return message.react(ayarlar.no)
if (member.hasPermission(8)) return message.react(ayarlar.no)

member.setNickname(`${tag} ${nick} | ${yaş}`) 
member.roles.add(ayarlar.kadın1)
member.roles.add(ayarlar.kadın1)
member.roles.add(ayarlar.kadın2)
member.roles.add(ayarlar.kadın2)
member.roles.remove(ayarlar.kayıtsızRol)
member.roles.remove(ayarlar.kayıtsızRol)

message.react(ayarlar.yes)

client.channels.cache.get(ayarlar.chat).send(`<a:emoji_13:961857547428569138>  ${member} sunucumuza hoşgeldin seninle birlikte \`${message.guild.memberCount}\` kişiye ulaştık `).then(x => x.delete({timeout: 9000}))}

exports.config = {
    name: "kız",
    guildOnly: true,
    aliases: ["k", "kız", "kız"]
}