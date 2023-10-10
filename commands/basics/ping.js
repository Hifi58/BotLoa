import { SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
            .setName("ping")
            .setDescription("Répond aux mortels"),
    async execute(interaction){
        await interaction.reply("Je ne dirais pas pong comme vous chiens d'humains ! ! !")
    }
};