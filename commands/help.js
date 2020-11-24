module.exports = {
    name: 'help',
    description: 'help command with list of commands',
    execute(message, args) {
        message.channel.send("Thanks for reaching out to Dr. Dolphin :P These are my commands:\
                            \n !ping: i will say pong\
                            \n !search: i will show you google\
                            \n !add-mod: i will add you as a mod\
                            \n !remove-mod: i will remove your mod role\
                            ");
    }
}