"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	} else if (d === 0) {
		let x = -b / (2 * a);
		arr.push(x);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let p = percent / 100 / 12;
	let payment = amount - contribution;
	let monthlyPayment = payment * (p + (p / (((1 + p) ** countMonths) - 1)));
	let totalAmount = monthlyPayment * countMonths;
	return +totalAmount.toFixed(2);
}