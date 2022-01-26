const Twilio = require("twilio");

const Client = new Twilio("SID", "Auth Token");

Client.messages.list().then(messages => console.log(`The most recent message is ${message[0].body}`));

console.log('Gathering your message log');