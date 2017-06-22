var Promise = require('bluebird');

var pizza = {
	toppings: {
		pepperoni: 8
	},
	cooked: 'undercooked',
	eaten: false
};
function cookPizza() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			pizza.cooked = 'overcooked';
			reject("burnt pizza");
		}, 5000);
	});
}
function eat(pizza) {
	pizza.eaten = true;
	console.log('eaten:', pizza);
}

// main
console.log('before', pizza);
cookPizza()
	.then(function(pizza) {
		console.log('cooked', pizza);
		eat(pizza);
	})
	.catch(function(exception) {
		console.log("exception:", exception);
		console.log("after:", pizza);
	});

