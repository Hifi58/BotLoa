import { TOKEN } from "./auth.js";
import { Client, GatewayIntentBits } from "discord.js";

const PREFIX = "!!";
const client = new Client({
    intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,],
});

client.on("ready", () => {
    client.user.setPresence({
        activities: [{
            name: "répondre aux questions"
        }],
        status: "online"
    });

    console.log(`L'Éternelle est arrivé pour répondre à vos questions !`)
});

client.on("messageCreate", async message => {
    if(message.content.startsWith(PREFIX)){
        message.reply("qui ose me sortir de mon sommeil ?")
    }
});


client.login(TOKEN);