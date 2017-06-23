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
			console.log('cooked pizza', pizza);
			resolve(pizza);
		}, 5000);
	});
}

function slicePizza(pizza) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			pizza.slices = 8;
			console.log('sliced pizza');
			resolve(pizza);
		});
	});
}

function eat(pizza) {
	pizza.eaten = true;
	console.log('eaten pizza', pizza);
}

cookPizza()
	.then(function(cookedPizza) {
		return slicePizza(pizza);
	})
	.then(function(slicedPizza) {
		eat(pizza);
	});

