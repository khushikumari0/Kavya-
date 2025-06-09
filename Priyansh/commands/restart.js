module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
	description: "Restart Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`𝐁𝐎𝐓 𝐈𝐒 𝐑𝐄START🤖 👈 ●============================================================●𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐊𝐀𝐕𝐘𝐀 BOT 😇👈
=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝐊𝐇𝐔𝐒𝐇𝐈 𝐊𝐔𝐌𝐀𝐑𝐈🌹
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊 👈👈👈👈👈 𝐊𝐇𝐔𝐒𝐇𝐈 𝐊𝐔𝐌𝐀𝐑𝐈:- ☞ https://www.facebook.com/Khushi.00007686
●============================================================● 𝐁𝐎𝐓 𝐑𝐄𝐒𝐓𝐒𝐓 𝐇𝐎 𝐑𝐄𝐇𝐀 𝐇𝐀𝐈 𝐏𝐋𝐙 𝐖𝐀𝐈𝐓`, threadID, () => process.exit(1));
}
