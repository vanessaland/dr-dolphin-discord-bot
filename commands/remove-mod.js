module.exports = {
    name: 'remove-mod',
    description: 'removes someone as a mod role',
    execute(message, args) {
        message.member.roles.remove('779617473901101057').catch(console.error);
        message.channel.send('User removed as mod! ;o');
    }
}