var Promise = require('bluebird');

var pizza = {
	toppings: {
		pepperoni: 8
	},
	cooked: false
};
var cookPizza = new Promise(function(resolve, reject) {
	setTimeout(function() {
		pizza.cooked = true;
		resolve(pizza);
	}, 5000);
});

var table = {
	set: false
};
var setTable = new Promise(function(resolve, reject) {
	setTimeout(function() {
		table.set = true;
		resolve(table);
	}, 5000);
});

function serveCustomer(food) {
	console.log("customer was served", food);
}

Promise.all([setTable, cookPizza])
	.then(function(result) {
		var tableSet = result[0].set;
		console.log("table set: ", tableSet);
		var food = result[1];
		console.log("pizza cooked: ", food.cooked);
		serveCustomer(food);
	});
