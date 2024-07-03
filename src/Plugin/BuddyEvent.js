const { getAggregateVotesInPollMessage } = require("@whiskeysockets/baileys")
const { buddyCmdUpsert } = require('./BuddyCmd');

async function buddyEvents(sock, chalk) {
    // Handle messages.upsert event
    sock.ev.on('messages.upsert', async ({ messages }) => {
        const m = messages[0]
        try {
            console.log(chalk.blue(`📩 Upserted message:`), JSON.stringify(m));
            return await buddyCmdUpsert(sock, m)
        } catch (error) {
            console.error(chalk.red(`❌ Error handling messages.upsert event:`, error));
        }
    });

    sock.ev.on('messages.update', async (updates) => {
        for (const { key, update } of updates) {
            if (update.pollUpdates) {
                const pollCreation = await sock.getMessage(key.remoteJid, key.id);
                if (pollCreation) {
                    const pollMessage = await getAggregateVotesInPollMessage({
                        message: pollCreation,
                        pollUpdates: update.pollUpdates,
                    });
                    logger.info('Updated poll message:', pollMessage);
                    // Handle updated poll
                }
            }
        }
    });

    // Handle chats.upsert event
    sock.ev.on('chats.upsert', async (chats) => {
        try {
            //  console.log(chalk.green(`🗣️ Upserted chats:`), JSON.stringify(chats));
            // Implement your logic for upserted chats
        } catch (error) {
            //  console.error(chalk.red(`❌ Error handling chats.upsert event:`, error));
        }
    });

    // Handle chats.update event
    sock.ev.on('chats.update', async (updatedChats) => {
        try {
            //   console.log(chalk.green(`🗣️ Updated chats:`), JSON.stringify(updatedChats));
            // Implement your logic for updated chats
        } catch (error) {
            // console.error(chalk.red(`❌ Error handling chats.update event:`, error));
        }
    });

    // Handle labels.association event
    sock.ev.on('labels.association', async (labelAssociation) => {
        try {
            // console.log(chalk.yellow(`🏷️ Label association:`), JSON.stringify(labelAssociation));
            // Implement your logic for label association events
        } catch (error) {
            //  console.error(chalk.red(`❌ Error handling labels.association event:`, error));
        }
    });

    // Handle labels.edit event
    sock.ev.on('labels.edit', async (label) => {
        try {
            //  console.log(chalk.yellow(`🏷️ Edited label:`), JSON.stringify(label));
            // Implement your logic for label edit events
        } catch (error) {
            // console.error(chalk.red(`❌ Error handling labels.edit event:`, error));
        }
    });

    // Handle presence.update event
    sock.ev.on('presence.update', async ({ id, presences }) => {
        try {
            //  console.log(chalk.cyan(`👤 Presence update for ${id}:`), JSON.stringify(presences));
            // Implement your logic for presence updates
        } catch (error) {
            // console.error(chalk.red(`❌ Error handling presence.update event:`, error));
        }
    });

    // Handle groups.upsert event
    sock.ev.on('groups.upsert', async (groupMetadata) => {
        try {
            // console.log(chalk.magenta(`👥 Upserted groups:`), JSON.stringify(groupMetadata));
            // Implement your logic for upserted groups
        } catch (error) {
            // console.error(chalk.red(`❌ Error handling groups.upsert event:`, error));
        }
    });

    // Handle groups.update event
    sock.ev.on('groups.update', async (updatedGroups) => {
        try {
            // console.log(chalk.magenta(`👥 Updated groups:`), JSON.stringify(updatedGroups));
            // Implement your logic for updated groups
        } catch (error) {
            // console.error(chalk.red(`❌ Error handling groups.update event:`, error));
        }
    });

    // Handle group-participants.update event
    sock.ev.on('group-participants.update', async ({ id, participants, action }) => {
        try {
            // console.log(chalk.magenta(`👥 Group participants update for ${id}:`), participants, action);
            // Implement your logic for group participant updates
        } catch (error) {
            // console.error(chalk.red(`❌ Error handling group-participants.update event:`, error));
        }
    });

    // Handle creds.update event
    sock.ev.on('creds.update', async (credentials) => {
        try {
            //   console.log(chalk.blueBright(`🔑 Credentials update:`), JSON.stringify(credentials));
            // Implement your logic for credentials updates
        } catch (error) {
            //  console.error(chalk.red(`❌ Error handling creds.update event:`, error));
        }
    });

    // Handle messaging-history.set event
    sock.ev.on('messaging-history.set', async ({ chats, contacts, messages, isLatest }) => {
        try {
            //  console.log(chalk.cyan(`📜 Messaging history set:`));
            //  console.log(chalk.cyan(`   Chats:`), JSON.stringify(chats));
            //   console.log(chalk.cyan(`   Contacts:`), JSON.stringify(contacts));
            //   console.log(chalk.cyan(`   Messages:`), JSON.stringify(messages));
            //  console.log(chalk.cyan(`   isLatest:`), isLatest);
            // Implement your logic for handling messaging history set event
        } catch (error) {
            // console.error(chalk.red(`❌ Error handling messaging-history.set event:`, error));
        }
    });

    // Handle chats.delete event
    sock.ev.on('chats.delete', async (chatIds) => {
        try {
            // console.log(chalk.green(`🗑️ Deleted chats:`), JSON.stringify(chatIds));
            // Implement your logic for deleted chats
        } catch (error) {
            //  console.error(chalk.red(`❌ Error handling chats.delete event:`, error));
        }
    });

    // Handle message-receipt.update event
    sock.ev.on('message-receipt.update', async (receiptUpdates) => {
        try {
            //   console.log(chalk.blue(`📨 Message receipt update:`));
            //  console.log(chalk.blue(`   Receipt updates:`), JSON.stringify(receiptUpdates));
            // Implement your logic for message receipt updates
        } catch (error) {
            // console.error(chalk.red(`❌ Error handling message-receipt.update event:`, error));
        }
    });

    // Handle blocklist.set event
    sock.ev.on('blocklist.set', async ({ blocklist }) => {
        try {
            //  console.log(chalk.red(`🚫 Blocklist set:`));
            //  console.log(chalk.red(`   Blocklist:`), JSON.stringify(blocklist));
            // Implement your logic for blocklist set event
        } catch (error) {
            //  console.error(chalk.red(`❌ Error handling blocklist.set event:`, error));
        }
    });

    // Handle blocklist.update event
    sock.ev.on('blocklist.update', async ({ blocklist, type }) => {
        try {
            // console.log(chalk.red(`🚫 Blocklist update:`));
            // console.log(chalk.red(`   Blocklist:`), JSON.stringify(blocklist));
            // console.log(chalk.red(`   Type:`), type);
            // Implement your logic for blocklist update event
        } catch (error) {
            //  console.error(chalk.red(`❌ Error handling blocklist.update event:`, error));
        }
    });



    // Handle call event
    sock.ev.on('call', async (callEvents) => {
        try {
            //  console.log(chalk.yellowBright(`📞 Call events:`));
            //  console.log(chalk.yellowBright(`   Call events:`), JSON.stringify(callEvents));
            // Implement your logic for call events
        } catch (error) {
            //  console.error(chalk.red(`❌ Error handling call event:`, error));
        }
    });

    console.log(chalk.green(`🚀 Baileys event listeners initialized.`));
}


module.exports = { buddyEvents };
