var Promise = require('bluebird');

function cookPizza() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			var pizza = {
				toppings: {
					pepperoni: Math.floor((Math.random() * 8) + 1)
				},
				cooked: true
			};
			resolve(pizza);
		}, 5000);
	});
}

function serveCustomer(tableNum, food) {
	console.log('customer at table#' + tableNum + ' was served', food);
}

var tables = [
	{ number: 1, set: false },
	{ number: 2, set: false },
	{ number: 3, set: false }
];
Promise.mapSeries(tables, function(table) {
	table.set = true;
	cookPizza().then(function(food) {
		serveCustomer(table.number, food);
	});
});

