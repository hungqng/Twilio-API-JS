const Twilio = require("twilio");

const Client = new Twilio("Account SID", "Auth Token");

Client.messages.list().then(messages => console.log(`The most recent message is ${messages[0].body}`)).catch(err => console.error(err));

console.log('Gathering your message log');