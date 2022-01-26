// Install twilio package
const Twilio = require("twilio");

// Input SID and Authorized token
const Client = new Twilio("Account SID", "Auth Token");

// Display the most recent message
// Also catch any error
Client.messages.list().then(messages => console.log(`The most recent message is ${messages[0].body}`)).catch(err => console.error(err));

console.log('Gathering your message log');