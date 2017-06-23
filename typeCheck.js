let pizza = {
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

let pizzaAttrs = [ 'toppings', 'cooked', 'eaten' ];
function isPizza(pizza) {
	console.log('pizza keys', Object.keys(pizza));
	return JSON.stringify(pizzaAttrs) === JSON.stringify(Object.keys(pizza));
}
cookPizza().then(function(pizza) {
	console.log('cooked pizza', pizza);
	if (isPizza(pizza)) {
		console.log('eating a pizza');
		eat(pizza);
	} else {
		console.log('trickster tried feeding me something other than a pizza');
	}
});

