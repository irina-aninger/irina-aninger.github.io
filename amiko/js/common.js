let volumeTabs = document.querySelector('.volume_tabs');

volumeTabs.addEventListener('click', function (e) {
    let volumeTab = document.querySelectorAll('.volume_tabs li');
    volumeTab.forEach( function (item) {
        item.classList.remove('active')
    });
    e.target.classList.add('active')
});


// product count

let count = document.querySelector('#count'),
    minus = document.querySelector('.minus'),
    plus = document.querySelector('.plus');

minus.addEventListener('click', function () {
    if (count.value >= 1) {
        count.value--
    }
})

plus.addEventListener('click', function () {
    count.value++
})


// product to top cart

let countCart = document.querySelector('.top_cart .count'),
    addCart = document.querySelector('.add_cart__btn');

addCart.addEventListener('click', function () {
    if (count.value >= 1) {
        countCart.innerHTML++
    }
});

















