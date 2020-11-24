module.exports = {
    name: 'kick',
    description: 'kick members',
    execute(message, args) {
        if(message.member.permissions.has('KICK_MEMBERS')){
            message.channel.send('You have the permission to kick members');
            
        } else {
            message.channel.send('You DO NOT have the permission to kick members');
        }
    }
}