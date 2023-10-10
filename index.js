import { TOKEN } from "./auth.js";
import { Client, Collection, Events, GatewayIntentBits, Partials } from "discord.js";
import path  from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PREFIX = "!!";
const client = new Client({
    intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,],
    partials: [
        Partials.Message,
        Partials.GuildMember,
    ]
});

client.commands = new Collection();
const folderPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(folderPath);
 
for(const folder of commandFolders){
    const commandPath = path.join(folderPath, folder);
    const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith(".js"));
}

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