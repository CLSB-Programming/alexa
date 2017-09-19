// Your code, that will be handle the processing of your skill
// The names need to match your Alexa Intents you made in the Skill Builder
const handlers = {
    'Positive': function() {
        this.emit(':tell', 'Yay! I\'m glad you like programming club!');
    },
    'Negative': function() {
        this.emit(':tell', 'Aww. Programming can be so fun though - you can create apps like me!');
    },

    // LaunchRequest is special: it is called when your app is opened without an intent for example:
    // "Alexa open <skill name>"
    'LaunchRequest': function() {
        this.emit(':ask', 'Hi there, do you think programming club is good or bad?');
    },

    // AMAZON.HelpIntent, AMAZON.CancelIntent and AMAZON.StopIntent are built in intents
    // They recognise "Help", "Cancel" and "Stop" respectively.
    'AMAZON.HelpIntent': function() {
        this.emit(':tell', 'You can tell this skill whether you like or don\'t like programming club.');
    },
    'AMAZON.CancelIntent': function() {
        // This means run the 'StopIntent' code instead, as it'll be the same
        this.emit('AMAZON.StopIntent');
    },
    'AMAZON.StopIntent': function() {
        // An interjection is a way of making a skill more interesting. It'll put more emphasis on the word
        // and you know for sure it'll sound ok with the computer voice. See the range of speechcons at:
        // https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speechcon-reference-uk
        this.emit(':tell', '<say-as interpret-as="interjection">cheerio</say-as>');
    },

    // Unhandled is called when your skill doesn't understand what the user was trying to say.
    'Unhandled': function() {
        this.emit(':ask', 'Sorry, I didn\'t get that. Please can you repeat it?');
    }
};

// NOTE: It's unlikely you'll need to edit the code below; you can probably just ignore it

// Get the Alexa SDK
const Alexa = require('alexa-sdk');

// Attach handlers and execute skill logic
exports.handler = function(event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
