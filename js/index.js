let clsForm = document.getElementById('closeForm');

let formPopup = document.getElementById('formPopup');

let callPopupForm0 = document.getElementById('callFormPopup0')
let callPopupForm1 = document.getElementById('callFormPopup1')
let callPopupForm2 = document.getElementById('callFormPopup2')
let callPopupForm3 = document.getElementById('callFormPopup3')
let callPopupForm4 = document.getElementById('callFormPopup4')

function showFormPopup (showFormPopup) {
    formPopup.classList.add('showForm')
}

callPopupForm0.addEventListener('click',showFormPopup);
callPopupForm1.addEventListener('click',showFormPopup);
callPopupForm2.addEventListener('click',showFormPopup);
callPopupForm3.addEventListener('click',showFormPopup);
callPopupForm4.addEventListener('click',showFormPopup);

clsForm.addEventListener('click', function(){
    formPopup.classList.remove('showForm')
})


// ----------------------Price
let callPricePopup0 = document.getElementById('callPricePopup0');
let callPricePopup1 = document.getElementById('callPricePopup1');
let callPricePopup2 = document.getElementById('callPricePopup2');

let formPricePopup0 = document.getElementById('formPricePopup0');
let formPricePopup1 = document.getElementById('formPricePopup1');
let formPricePopup2 = document.getElementById('formPricePopup2');

let clsPrices = document.getElementsByClassName('closeprice');

callPricePopup0.addEventListener('click', function() {
    formPricePopup0.classList.add('showPrice');
});

callPricePopup1.addEventListener('click', function() {
    formPricePopup1.classList.add('showPrice');
});

callPricePopup2.addEventListener('click', function() {
    formPricePopup2.classList.add('showPrice');
});

Array.from(clsPrices).forEach(function(clsPrice) {
    clsPrice.addEventListener('click', function() {
        const forms = [formPricePopup0, formPricePopup1, formPricePopup2];

        forms.forEach(function(form) {
            if (form.classList.contains('showPrice')) {
                form.classList.remove('showPrice');
            }
        });
    });
});
// ------------------------
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.primer');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(function() {
        showSlide(currentSlide + 1);
    }, 5000);
});


// 
let currentIndex = 0;
const reviews = document.querySelectorAll('.review');
const totalReviews = reviews.length;

function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.toggle('active', i === index);
    });
}

document.querySelector('.leftButt').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
    showReview(currentIndex);
});

document.querySelector('.rightButt').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalReviews;
    showReview(currentIndex);
});

showReview(currentIndex);


// 
function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.move("character", pos);
        range.select();
    }
}

function mask(e) {
    var matrix = this.placeholder, // ожидаемый формат
        i = 0,
        def = matrix.replace(/\D/g, ""), // удаление не цифр
        val = this.value.replace(/\D/g, ""); // текущее значение

    // Обеспечиваем заполнение значения через шаблон
    if (def.length >= val.length) {
        val = def;
    }
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_";
    });
    this.value = matrix;

    // Управление позицией курсора
    i = matrix.lastIndexOf(val.substr(-1));
    if (i < matrix.length && matrix !== this.placeholder) {
        i++;
    } else {
        i = matrix.indexOf("_");
    }
    setCursorPosition(i, this);
}

window.addEventListener("DOMContentLoaded", function() {
    var inputs = document.querySelectorAll("#tel0, #tel1"); // Получаем оба инпута
    inputs.forEach(function(input) {
        input.addEventListener("input", mask, false);
        input.focus();
        setCursorPosition(3, input);
    });
});

// 
let callPolitic = document.getElementById('callPolitic')

let politicPopup = document.getElementById('politicPopup')

let closePolitic = document.getElementById('closePolitic')

callPolitic.addEventListener('click', function(){
    politicPopup.classList.add('showPolitic')
})
closePolitic.addEventListener('click', function(){
    politicPopup.classList.remove('showPolitic')
})