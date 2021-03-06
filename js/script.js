// Label shift
let inputClick = $('.form-block .form form .input input'),
    button = $('.form-block .form form #reg'),
    buttonAuth = $('.form-block .form form #auth');

let emailVal = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

let error = '';

function inputUp(evt) {
	inputClick[evt].classList.remove('invalid');
	inputClick[evt].classList.add("focus");
}
function inputDown(evt) {
	if (inputClick[evt].value == '') {
        inputClick[evt].classList.add('invalid');
	}
    inputClick[evt].classList.remove("focus");
}

button.click(() => {
    for (var i=0; i<inputClick.length; i++) {
        if (inputClick[i].value == '') {
            inputClick[i].classList.add("invalid");
        }
        else {
            inputClick[i].classList.remove("invalid");
            if (/^[а-яА-ЯёЁ\s]+$/.test(inputClick[0].value) === false) {
                inputClick[0].value = '';
                inputClick[0].placeholder = 'Имя должно быть на русском языке';
                inputClick[0].classList.add("invalid");
            }
            if (/^[а-яА-ЯёЁ\s]+$/.test(inputClick[1].value) === false) {
                inputClick[1].value = '';
                inputClick[1].placeholder = 'Фамилия должна быть на русском языке';
                inputClick[1].classList.add("invalid");
            }
            if (emailVal.test(inputClick[3].value) === false) {
                inputClick[3].value = '';
                inputClick[3].placeholder = 'Не правильно набран E-mail';
                inputClick[3].classList.add("invalid");
            }
            if (inputClick[2].value.length != 17) {
                inputClick[2].value = '';
                inputClick[2].placeholder = 'Не правильно набран номер телефона';
                inputClick[2].classList.add("invalid");
            }
        }
        
    }
    if (inputClick[0].className != 'invalid') {
        if (inputClick[1].className != 'invalid') {
            if (inputClick[2].className != 'invalid') {
                if (inputClick[3].className != 'invalid') {
                    if (inputClick[4].className != 'invalid') {
                        alert('ОК');
                    }
                }
            }
        }
    }
});

buttonAuth.click(() => {
    for (var i=0; i<inputClick.length; i++) {
        if (inputClick[i].value == '') {
            inputClick[i].classList.add("invalid");
            
        }
        else {
            inputClick[i].classList.remove("invalid");
            if (emailVal.test(inputClick[0].value) === false) {
                inputClick[0].value = '';
                inputClick[0].placeholder = 'Не правильно набран E-mail';
                inputClick[0].classList.add("invalid");
            }
        }
        
    }
    if (inputClick[0].className != 'invalid') {
        if (inputClick[1].className != 'invalid') {
            alert('ОК');
        }
    }
});

// mask for phone input
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('#phone'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, true);
    input.addEventListener("keydown", mask, false)
  });
});