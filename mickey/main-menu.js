import moment from 'moment-timezone'

const tagsMap = {
  main: '💗 Information',
  jadibot: '🌟 Sub Bot',
  downloader: '📥 Downloads',
  game: '🎮 Games',
  gacha: '🎲 Gacha RPG',
  rg: '🔰 Registration',
  group: '👥 Groups',
  nable: '🎛️ Features',
  nsfw: '🔞 NSFW +18',
  buscadores: '🔎 Search Tools',
  sticker: '🌈 Stickers',
  econ: '💰 Economy',
  convertidor: '🌀 Converters',
  logo: '🎀 Logo Generator',
  tools: '🧰 Tools',
  randow: '🎁 Random',
  efec: '🎶 Audio Effects',
  owner: '👑 Creator'
}

let handler = async (m, { conn }) => {
  const userId = m.mentionedJid?.[0] || m.sender
  const user = global.db.data.users[userId] || {}
  const name = await conn.getName(userId)
  const botname = conn.user?.name || 'mickey-md 🌸'
  const fecha = moment.tz('Africa/Nairobi').format('DD/MM/YYYY')
  const hora = moment.tz('Africa/Nairobi').format('HH:mm:ss')
  const uptime = clockString(process.uptime() * 1000)
  const totalreg = Object.keys(global.db.data.users).length
  const limit = user.limite || 0

  const botTag = conn.user?.jid?.split('@')[0] || 'bot'
  const botOfc = conn.user?.id === global.conn?.user?.id
    ? `🌐 *Official Bot:* wa.me/${botTag}`
    : `🔗 *Sub Bot of:* wa.me/${global.conn?.user?.jid?.split('@')[0]}`

  const grouped = {}
  const plugins = Object.values(global.plugins).filter(p => !p.disabled)

  for (const plugin of plugins) {
    const cmds = Array.isArray(plugin.command) ? plugin.command : [plugin.command]
    if (!cmds) continue
    const tagList = Array.isArray(plugin.tags) ? plugin.tags : []
    const tag = tagList[0] || '__others__'
    if (!grouped[tag]) grouped[tag] = []
    for (const cmd of cmds) {
      if (typeof cmd !== 'string') continue
      grouped[tag].push(`➤ .${cmd}`)
    }
  }

 let text = `
  ❰ 𝗠𝗜𝗖𝗞𝗘𝗬-𝗠𝗗 𝗠𝗘𝗡𝗨 ❱ 
 𝗛𝗲𝗹𝗹𝗼: ${name}
 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲: ${botname}
 𝗗𝗮𝘁𝗲: ${fecha}
 𝗧𝗶𝗺𝗲: ${hora}
 𝗨𝗽𝘁𝗶𝗺𝗲: ${uptime}
 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿𝘀: ${totalreg}
 𝗬𝗼𝘂𝗿 𝗟𝗶𝗺𝗶𝘁: ${limit}
 ${botOfc}
╰━━━━━━━━━━━━━━━━━━━╯
`

  for (const tag of Object.keys(grouped)) {
    const section = tagsMap[tag] || '📚 Other Commands'
    text += `\n╭───〔 ${section} 〕───╮\n`
    for (const cmd of grouped[tag]) {
      text += `┃ ${cmd}\n`
    }
    text += `╰────────────────────╯\n`
  }

  let channelRD = {
    id: '120363422552152940@newsletter',
    name: 'Mickey',
  }

  let banner = 'https://files.catbox.moe/nub6hn.png'
  let redes = 'https://lazackorganisation.my.id'
  let textbot = `🌸 Thank you for using *${botname}*, ${name}!\n🔔 Follow our official channel and support on GitHub.`

  await conn.sendMessage(m.chat, {
    text,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: false,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        newsletterName: channelRD.name,
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: botname,
        body: textbot,
        thumbnailUrl: banner,
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: false,
        renderLargerThumbnail: true,
      },
    }
  }, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help']
export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor((ms % 3600000) / 60000)
  let s = Math.floor((ms % 60000) / 1000)
  return `${h}h ${m}m ${s}s`
  }
