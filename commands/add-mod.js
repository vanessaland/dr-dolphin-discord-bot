module.exports = {
    name: 'add-mod',
    description: 'add someone as a mod role',
    execute(message, args) {
        message.member.roles.add('779617473901101057').catch(console.error);
        message.channel.send('User added as a new mod! ;)');
    }
}