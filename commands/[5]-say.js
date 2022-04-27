const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run= async (client, message, args) => {       

let tag = (ayarlar.tag)

   let TotalMember = message.guild.memberCount
          let Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
          let Taglı = message.guild.members.cache.filter(u => u.user.username.includes(tag)).size;
          let Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
          let Boost = message.guild.premiumSubscriptionCount;

message.channel.send(new Discord.MessageEmbed().setDescription(`
<a:axze_deynek:961625455331516446>  Sunucumuzda toplam **${TotalMember}** kullanıcı bulunmaktadır.
<a:axze_deynek:961625455331516446>  Sunucumuzda toplam **${Online}** aktif kullanıcı bulunmaktadır.
<a:axze_deynek:961625455331516446>  Toplam **${Taglı}** \`${tag}\` kişi tagımızda bulunuyor.
<a:axze_deynek:961625455331516446>  Seste **${Voice}** kullanıcı bulunmaktadır.
<a:axze_deynek:961625455331516446>  Sunucuya toplam **${Boost}** takviye yapılmıştır. 


`)).then(x => x.delete({timeout: 9000}))

message.react(ayarlar.yes)

}
exports.config = {
    name: "say",
    guildOnly: true,
    aliases: ["say"]
}