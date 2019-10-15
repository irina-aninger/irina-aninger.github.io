document.addEventListener('scroll', function () {
    if (pageYOffset >= 100) {
        document.querySelector('.header').classList.add('header_fixed')
    } else {
        document.querySelector('.header').classList.remove('header_fixed')
    }
});


$('.slider__item').slick({
    speed: 500
});


let btnModal = document.querySelector('.btn-modal'),
    modal    = document.querySelector('.contacts__modal');

btnModal.addEventListener('click', function () {
    modal.style.display = 'block'
});

document.querySelector('.close').addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none'
}
