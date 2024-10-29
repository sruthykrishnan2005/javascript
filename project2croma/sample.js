let currentSlide = 0;


function changeSlide(direction) {
    const slides = document.querySelectorAll('.slider img');
    currentSlide += direction;


    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    const offset = -currentSlide * 100; 
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}


setInterval(() => {
    changeSlide(1);
}, 5000);

let currentProductSlide = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.productbtn');
    const items = document.querySelectorAll('.category-item');
    const totalItems = items.length;
    const itemsPerView = 4;

 
    currentProductSlide += direction;
    if (currentProductSlide < 0) currentProductSlide = 0; 
    if (currentProductSlide > totalItems - itemsPerView) currentProductSlide = totalItems - itemsPerView;


    const offset = currentProductSlide * -((100 / itemsPerView) + 20); 
    slider.style.transform = `translateX(${offset}%)`;
}


document.addEventListener('DOMContentLoaded', function() {
    const imgContainers = [
        { selector: '.con6img img', height: '400px' },
        { selector: '.con7img img', height: '400px' },
        { selector: '.con10 img', height: '200px' },
        { selector: '.con13 img', height: '400px' }
    ];

    imgContainers.forEach(container => {
        const img = document.querySelector(container.selector);
        if (img) {
            img.style.width = '100%'; 
            img.style.height = container.height;
            img.style.objectFit = 'cover'; 
        }
    });

  
    let slideIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, i) => {
            slide.classList.remove('active'); 
            if (i === index) {
                slide.classList.add('active'); 
            }
        });
    }

    function changeSlide(direction) {
        const slides = document.querySelectorAll('.slide');
        slideIndex = (slideIndex + direction + slides.length) % slides.length; 
        showSlide(slideIndex);
    }

 
    showSlide(slideIndex);


    setInterval(() => {
        changeSlide(1); 
    }, 5000);
});


function scrollLeft() {
    const container = document.querySelector('.scrolling-content');
    const scrollAmount = 150; 
    container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth' 
    });
}

function scrollRight() {
    const container = document.querySelector('.scrolling-content');
    const scrollAmount = 150; 
    container.scrollBy({
        left: scrollAmount, 
        behavior: 'smooth' 
    });
}

    