const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { EMBED_COLOUR } = require("../../core/db/data/DesignOptions.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Displays an embed full of commands and other things."),
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client
     */
    execute(interaction, client) {
        const HelpEmbed = new MessageEmbed()
        .setColor(EMBED_COLOUR)
        .setAuthor({ name: `${client.user.username} | Help`, iconURL: `${client.user.avatarURL()}` })
        .setDescription("Cord Utilities is a private bot for mainly moderation and utilities, currently maintained and managed by <@697541992770437130>")
        .setFields(
            {
                name: "• Information",
                value: "> `help, membercount, serverinfo, userinfo, afklist`"
            },
            {
                name: "• Moderation",
                value: "> `ban, case, clear, kick, lock, mod, mute, nick, rmpunish, slowmode, unban, unlock, warn`"
            },
            {
                name: "• Misc",
                value: "> `afk, avatar, report, suggest, waifu`"
            },
            {
                name: "• Util",
                value: "> `blacklist, debug, ping`"
            }
        )
        
        interaction.reply({ embeds: [HelpEmbed] });
    },
};
