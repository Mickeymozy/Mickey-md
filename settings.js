import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─────────────────────────────*

//BETA: If you want to avoid typing the number that will be the bot in the console, add it here:
//Only applies for option 2 (being a bot with 8-digit text code)
global.botNumber = '' //Example: 255734980103

//*─────────────────────────────*

global.owner = [
// <-- Number @s.whatsapp.net -->
  ['255711765335', 'MICKEY', true],
  ['255612130873', 'MICKEY', true],
  
// <-- Number @lid -->
  ['', 'MICKEY', true],
  ['', '', true], 
  ['', '', true]
];

//*─────────────────────────────*

global.mods = []
global.suittag = ['255612130873'] 
global.prems = []

//*─────────────────────────────*

global.library = 'Baileys'
global.baileys = 'V 6.7.17' 
global.vs = '2.2.5'
global.nameqr = 'MICKEY-MD'
global.namebot = 'MICKEY-MD'
global.sessions = 'session'
global.jadi = 'JadiBots' 
global.yukiJadibts = true

//*─────────────────────────────*

global.packname = '⪛✰ LAZACK-DEVICE ✰⪜'
global.botname = 'MICKEY-MD'
global.wm = '✿◟MICKEY-MD◞✿'
global.author = 'Made With By Mickeybots'
global.dev = '© Powered By Mickeybots'
global.textbot = 'Mickey'
global.tag = 'Mickey'

//*─────────────────────────────*

global.currency = 'teamlz'
global.welcome1 = '❍ Edit With The Command setwelcome'
global.welcome2 = '❍ Edit With The Command setbye'
global.banner = 'https://files.catbox.moe/nub6hn.png'
global.avatar = 'https://files.catbox.moe/nub6hn.png'

//*─────────────────────────────*

global.gp1 = 'https://chat.whatsapp.com/EATTgyi5jx16HgAggPg8yI?mode=r_c'
global.community1 = 'https://chat.whatsapp.com/F9gdupBg7aJBs3SLFmTgWt?mode=r_c'
global.channel = 'https://chat.whatsapp.com/F9gdupBg7aJBs3SLFmTgWt'
global.channel2 = 'https://chat.whatsapp.com/F9gdupBg7aJBs3SLFmTgWt'
global.md = 'https://github.com/Lazack28/Lazack-Device'
global.email = 'mickidadyhamza@gmail.com'

//*─────────────────────────────*

global.catalog = fs.readFileSync('./Botify/lazack.jpg');
global.style = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalog, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363321705798318@newsletter',
}
global.multiplier = 60

//*─────────────────────────────*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─────────────────────────────*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
