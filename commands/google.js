module.exports = {
    name: 'google',
    description: 'search for something on google',
    execute(message, args) {

        if(message.member.roles.cache.has('779617473901101057')) {
            message.channel.send('http://google.com/');
        } else {
            message.channel.send('You dont have the correct permissions, let me help you :)');
            message.member.roles.add('779617473901101057');
        }
    }
}