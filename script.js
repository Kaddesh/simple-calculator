
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');

buttons.forEach(function (button) {
	button.addEventListener('click', function (e) {
		let value = e.target.dataset.num;
		screen.value += value
	});
});

equal.addEventListener('click', function () {
	if (screen.value === '') {
		screen.value = "";
	} else {
		let answer = eval(screen.value);
		screen.value = answer;
		reset = true;
	}

	clear.addEventListener('click', function () {
		screen.value = ''
	})

})



