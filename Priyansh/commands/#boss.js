const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "boss",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "SHANKAR SUMAN",
        description: "no prefix",
        usePrefix: false,
        commandCategory: "No command marks needed",
        usages: "Yo Yo",
        cooldowns: 5,
    },

    // Array of Imgur URLs
    handleEvent: async function({ api, event, client, Users, __GLOBAL }) {
        const gifs = [
            "https://i.imgur.com/hKOVh8n.jpeg",
            "https://i.imgur.com/O3ptBXe.jpeg",
            "https://i.imgur.com/ChqXZ7m.jpeg",
            "https://i.imgur.com/0aARWU3.jpeg",
            "https://i.imgur.com/dxZNoUf.jpeg",
            "https://i.imgur.com/Strqyj8.jpeg"
        ];

        const message = "●💐 =======❤️💐❤️💐❤️❤️  =======💐     ☟  ========== ☟ ==========  ☟  ●============================●     𝐎𝐰𝐧𝐞𝐫 ➻────╔╬⓼★⓼╃───────➣𝐊𝐇𝐔𝐒𝐇𝐈 𝐊𝐔𝐌𝐀𝐑𝐈𝄠━─━Ⓔ⧐╰✾✾®️╀✿✿╀─━ↈⓇ⧐";
        const { threadID, messageID } = event;
        const lowerCaseMessage = event.body.toLowerCase();

        if (lowerCaseMessage.startsWith("aryan")) {  
            // Select a random image URL from the array
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            const downloadPath = path.join(__dirname, 'Boss-Jpg-Images.jpg');

            // Download image from the random URL
            request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                const msg = {
                    body: message,
                    attachment: fs.createReadStream(downloadPath)
                };
                api.sendMessage(msg, threadID, messageID);
                api.setMessageReaction("😘", event.messageID, (err) => {}, true);
            });
        }
    },

    run: function({ api, event, client, __GLOBAL }) {
        // Empty run function for module requirements
    },
}
