document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.main-carousel-wrapper');
    const carouselSlides = document.querySelectorAll('.main-carousel-wrapper-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const paginationContainer = document.querySelector('.main-carousel-pagination');
    
    let currentIndex = 0;

    carouselSlides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('main-carousel-pagination-dot');
        dot.addEventListener('click', () => {
            showSlide(index);
        });
        paginationContainer.appendChild(dot);
    });

    const paginationDots = document.querySelectorAll('.main-carousel-pagination-dot');

    function updatePagination() {
        paginationDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function showSlide(index) {
        if (index >= carouselSlides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = carouselSlides.length - 1;
        } else {
            currentIndex = index;
        }
        carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        updatePagination();
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    showSlide(currentIndex);
});