require('key.env').config

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Install twilio package
const client = require("twilio")(accountSid, authToken);

// Input SID and Authorized token
// const Client = new Twilio("Account SID", "Auth Token");

// Display the most recent message
// Also catch any error
client.messages.list().then(messages => console.log(`The most recent message is ${messages[0].body}`)).catch(err => console.error(err));

console.log('Gathering your message log');

client.messages
    .create({
        to: '+12067246799',
        from: '+16065311900',
        body: 'Hello World from Twilio using JavaScript',
    })
    .then(messages => console.log(messages.sid));