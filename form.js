$(document).ready(function () {
	$("#button").on("click", function (e) {
		e.preventDefault();

		var water = parseInt($("#water").val());
		var tea = parseInt($("#tea").val());

		$(".x").text(water);
		$(".y").text(tea);


		var totalWplusT = addition(water, tea);
		var totalWminusT = subtraction(water, tea);
		var totalWtimesT = multiply(water, tea);
		var totalWdivT = divide(water, tea);

		$("#addition .z").text(totalWplusT);
		$("#multiply .z").text(totalWtimesT);
		$("#subtract .z").text(totalWminusT);
		$("#divide .z").text(totalWdivT);

		// $("#answer").val(poop);

		console.log(totalCost);

		$("#totals").text("This is how many cups you need " + totalWater + " And this is how much it cost! " + totalCost);

	});

	$("#button2").on("click", function (e) {
		e.preventDefault();

		var d = parseFloat($("#d").val());
		var e = parseFloat($("#e").val());
		var f = parseFloat($("#f").val());

		var poop = quadSolve(d, e, f);

		$("#answer2").val(anything);
	});
});

function addition(x, y) {
	var poop = x + y;
	return poop;
}

function subtraction(x, y) {
	var sub = x - y;
	return sub;
}

function multiply(x, y) {
	var mul = x * y;
	return mul;
}

function divide(x, y) {
	var div = x / y;
	return div;
}
