let brend = document.querySelector('.calculator_coffee');
let count = document.querySelector('.input_count');
let price = document.querySelector('.price');
let btnRas = document.querySelector('.btn_ras');
let btnClear = document.querySelector('.btn_clear');
let outputt = document.querySelector('.outputt');
let sum = document.querySelector('.sum');

brend.onchange = function() {
	if (brend.value == "LAVAZZA") {
		price.value = 30;
	}
	else if (brend.value == "PAULIG") {
		price.value = 24;
	}
	else if (brend.value == "VERGNANO") {
		price.value = 15;
	}
	else if (brend.value == "JAMAICA BLUE MOUNTAIN") {
		price.value = 17;
	}
	else if (brend.value == "MOLINARI" || brend.value == "CARRARO") {
		price.value = 10;
	}
	else if (brend.value == "BUSHIDO") {
		price.value = 13;
	}
	else if (brend.value == "EGOISTE" || brend.value == "AMBASSADOR") {
		price.value = 7;
	}
	else {
		price.value = 9;
	}
}

btnRas.onclick = function() {
	

	if (+count.value < 0) {
		alert("Введите корректные данные!")
		brend.value = "LAVAZZA";
		price.value = "30";
		count.value = '';
	}
	else if (+count.value == ''){
		alert('Введите данные!');
		brend.value = "LAVAZZA";
		price.value = "30";
		count.value = '';
	}
	else {
		sum.value = +count.value * +price.value;
	}
}

btnClear.onclick = function() {
	brend.value = "LAVAZZA";
	price.value = "30";
	count.value = '';
	sum.value = '';
}