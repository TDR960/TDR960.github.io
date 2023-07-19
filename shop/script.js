function openModal() {
    let modal = document.getElementById('myModal');

    modal.style.display = 'block';
}

function closeModal() {
    let modal = document.getElementById('myModal');

    modal.style.display = 'none';
}

function openModalProduct() {
    let modal = document.getElementById('myModalProduct');

    modal.style.display = 'block';
}

function closeModalProduct() {
    let modal = document.getElementById('myModalProduct');

    modal.style.display = 'none';
}

// находим кнопку и счетчик по классу
const addToCartBtns = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
//инициализируем счетчик
let count = 0;

//увеличиваем счетчик при нажатии на кнопку "в корзину"
addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.innerText = count;
    });
});

var lightbox = new SimpleLightbox('.gallery a', {
    zoom: true,
    alertError: true,
    alertErrorMessage: "",
    swipeClose: false,
});

lightGallery(document.getElementById('gallery-videos-demo'), {
    plugins: [lgVideo, lgShare],
});
