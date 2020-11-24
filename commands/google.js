module.exports = {
    name: 'google',
    description: 'search for something on google',
    execute(message, args) {
        message.channel.send('http://google.com/');
    }
}