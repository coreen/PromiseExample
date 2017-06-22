var Promise = require('bluebird');

var pizza = {
	toppings: {
		pepperoni: 8
	},
	cooked: false,
	eaten: false
};

function cookPizza() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			pizza.cooked = true;
			resolve(pizza);
		}, 5000);
	});
}

function eat(pizza) {
	pizza.eaten = true;
	console.log('eaten pizza', pizza);
}

cookPizza().then(function(pizza) {
	console.log('cooked pizza', pizza);
	eat(pizza);
});

