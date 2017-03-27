var ElizaBot = require("elizabot");
var eliza = new ElizaBot();
var initial = eliza.getInitial();

var input = "Hi";
var reply = eliza.transform(input);
console.log(reply);

if (eliza.quit) {
	// last user input was a quit phrase
}

// method `transform()' returns a final phrase in case of a quit phrase
// but you can also get a final phrase with:
var final = eliza.getFinal();

// other methods: reset memory and internal state
eliza.reset();

// to set the internal memory size override property `memSize':
eliza.memSize = 100; // (default: 20)

// to reproduce the example conversation given by J. Weizenbaum
// initialize with the optional random-choice-disable flag
var originalEliza = new ElizaBot(true);