import moment from 'moment-timezone'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  try {
    let res = await fetch('https://api.github.com/repos/Mickeymozy/Mickey-md')

    if (!res.ok) throw new Error('Error fetching repository data')
    let json = await res.json()

    let txt = `BOTS SCRIPT*\n\n`
    txt += `✩  *Name* : ${json.name}\n`
    txt += `✩  *Watchers* : 117\n`
    txt += `✩  *Size* : ${(json.size / 1024).toFixed(2)} MB\n`
    txt += `✩  *Updated* : ${moment(json.updated_at).tz('Africa/Nairobi').format('DD/MM/YY - HH:mm:ss')}\n`
    txt += `✩  *Url* : ${json.html_url}\n`
    txt += `✩  *Forks* : 15\n`
    txt += `✩  *Stars* : 20\n\n`
    txt += `>  *Micey_mozy| Mickey bots*`

    await conn.sendMessage(m.chat, {
      text: txt,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title: '✨ Mickey-md',
          body: 'Official bot repository',
          thumbnailUrl: 'https://files.catbox.moe/nub6hn.png',
          sourceUrl: json.html_url,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })

  } catch {
    await conn.reply(m.chat, '⚠️ An error occurred while fetching the repository.', m)
    await m.react('❌')
  }
}

handler.help = ['script', 'sc', 'repo']
handler.tags = ['main']
handler.command = ['script', 'sc', 'repo']

export default handler
