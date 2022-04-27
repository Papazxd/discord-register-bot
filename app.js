const Discord = require("discord.js")
const client = new Discord.Client()
const ayarlar = require("./ayarlar.json")
const moment = require("moment")
const fs = require("fs")
const db = require("quick.db")
const chalk = require("chalk")
require('./util/Loader.js')(client)

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`[ PAPAZ GİRDİ ] ${files.length} komut yüklenecek.`)
  files.forEach(f => {                    
    let props = require(`./commands/${f}`)
    console.log(`[ PAPAZ GİRDİ ] ${props.config.name} komutu yüklendi.`)
    client.commands.set(props.config.name, props)
    props.config.aliases.forEach(alias => {       
      client.aliases.set(alias, props.config.name)
    });
  });
})

client.login(ayarlar.token)

/////////////////////////////////////////////////////////////////////////////
client.on("ready", () => {
  client.channels.cache.get(ayarlar.botSesKanal).join();
  });

/////////////////////////////////////////////////////////////////////////////
client.on('message', async message => {
  
  if(message.content === '.tag') {
    message.channel.send(` **TAGI GİR**`)
  }
  })

///////////////////////////////////////////
client.on('message', async message => {
  
  if(message.content === 'tag') {
    message.channel.send(` **TAGI GİR**`)
  }
  })

//////////////////////////////////////GİRİŞ ROLÜ

client.on("guildMemberAdd", member => {
  member.roles.add(ayarlar.kayıtsızRol)
  });
  
  client.on("guildMemberAdd", member => {
  member.roles.add(ayarlar.kayıtsızRol)
  });
  
  
  client.on("guildMemberAdd", member => {
  member.roles.add(ayarlar.kayıtsızRol)
  });

  //////////////////////////////////////BİTTİŞ OÇ

  ///////////////////////////////////////////GİRİŞ İSİM OÇ

client.on("guildMemberAdd", async (member) => {
  member.setNickname(ayarlar.nick)

  });
  
///////////////////////////////////////////BİTİŞ PİÇ


/////////////////////////////////////HOŞGEDLİN MESAJI/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


client.on("guildMemberAdd", member => {
    require("moment-duration-format")
      var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-9])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {
            '0': ``,
            '1': ``,
            '2': ``,
            '3': ``,
            '4': ``, // BOTUN OLDUĞU SUNUCUDA OLMA ŞARTI İLE HARAKETLİ EMOJİDE KOYABİLİRSİNİZ!
            '5': ``,
            '6': ``,
            '7': ``,
            '8': ``,
            '9': ``}[d];})}
    const kanal = member.guild.channels.cache.find(r => r.id === (ayarlar.hosgeldinKanal)); 
    let user = client.users.cache.get(member.id);//
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
    var kontrol;
  if (kurulus < 1296000000) kontrol = '   '//Güvenilir Değil EMOJI
  if (kurulus > 1296000000) kontrol = '   '//Güvenilir EMOJI
    moment.locale("tr");
  
  
    kanal.send(`
<a:yldz:964655391222927370>  **NorthSide** Hoşgeldin <@`+ member + `> Seninle birlikte sunucumuz (`+üyesayısı+`) kişiyiz  

<a:konfeti:964655389943660635> Hesabını \`${moment(member.createdAt).format("DD MM YY・HH:mm:ss")}\` Tarhi `+kontrol+`
    
<a:axze_deynek:961625455331516446> Kurallar sunucunun düzenini sağlamak için konulmuştur <#961382715201028147> kanalından kurallarımızı okumayı ihmal etme. <@&967540995069730866>

\`Tagımızı alarak bizleri destekleyebilirsin | ✩ | İyi eğlenceler\`


`)});

/////////////////////////////////////HOŞGEDLİN MESAJI BİTTİŞ/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////FAKE HESAP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  client.on("guildMemberAdd", member => {
    var moment = require("moment")
    require("moment-duration-format")
    moment.locale("tr")
     var {Permissions} = require('discord.js');
     var x = moment(member.user.createdAt).add(7, 'days').fromNow()
     var user = member.user
     x = x.replace("birkaç saniye önce", " ")
     if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
     const kayıtsızRol = member.guild.roles.cache.find(r => r.id === (ayarlar.kayıtsızRol)) 
     var rol = member.guild.roles.cache.get(ayarlar.şüpheli) 
     var kayıtsız = member.guild.roles.cache.get(kayıtsızRol) 
     member.roles.add(rol)
     member.roles.remove(kayıtsızRol)
     member.setNickname(ayarlar.fakeisim);

     member.guild.channels.cache.get(ayarlar.log).send(`<a:x_:967876167405277214> ${member} kullanıcısı sunucuya katıldı hesabı önce açıldığı için şüpheli.`);  setTimeout(() => {
  
  }, 1000)
  
     }
          else {
  
          }
      });

/////////////////////////////////////FAKE HESAP BTTİŞ /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////TAG KOMUT/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("userUpdate", async function(oldUser, newUser) { 
    const guildID = (ayarlar.SunucuID)
    const roleID = (ayarlar.tagRol)
    const tag = (ayarlar.tag)
    const chat = (ayarlar.chat)
    const taglog = (ayarlar.tagLog)
  
    const guild = client.guilds.cache.get(guildID)
    const role = guild.roles.cache.find(roleInfo => roleInfo.id === roleID)
    const member = guild.members.cache.get(newUser.id)
    const embed = new Discord.MessageEmbed().setAuthor(member.displayName, member.user.avatarURL({ dynamic: true })).setColor('RED').setTimestamp()
    if (newUser.username !== oldUser.username) {
        if (oldUser.username.includes(tag) && !newUser.username.includes(tag)) {
            member.roles.remove(roleID)
            client.channels.cache.get(taglog).send(embed.setDescription(`
            
            ${newUser}  Adlı kişi ismine **TAGI GİR BURAYA** tagını Çıkardı <a:axze_iptal:961625460289179678> 

            \`Kişi Etiketi\` ${newUser} 
            \`Kişi İd\` ${newUser.id} 
            `))
        } else if (!oldUser.username.includes(tag) && newUser.username.includes(tag)) {
            member.roles.add(roleID)
            client.channels.cache.get(chat).send(`${newUser} \`Tag aldı selam verin\``).then(x => x.delete({timeout: 1000}))
            client.channels.cache.get(taglog).send(embed.setDescription(`
            
            ${newUser}  Adlı kişi ismine **TAGI GİR BURAYA** tagını aldı <a:axze_onay:961625457147666472> 

            \`Kişi Etiketi\` ${newUser} 
            \`Kişi İd\` ${newUser.id} 
            
            `))
        }
    }
  
  })

  /////////////////////////////////////TAG KOMUT BİTTİŞ/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  client.on('guildMemberAdd', async member => {
    if(member.user.username.includes(ayarlar.tag)){
      await member.roles.add(ayarlar.tagRol)
      client.channels.cache.get(ayarlar.tagLog).send({ embeds: [new MessageEmbed().setDescription(`${member} adlı kişi taglı bir şekilde giriş yaptı`)]})
    }
})

  /////////////////////////////////////GİRİŞ DE GERİ ROL VERME/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
