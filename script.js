// Javascript for moving the layers up and down and making the main title disappear as you scroll down
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");

let header_height = header.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
})


// Javascript to generate a slideshow for the image gallery when you click on it
let slideIndex = 1;

    function openModal() {
        document.getElementById('myModal').style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('myModal').style.display = 'none';
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName('gallery-item');
        let modalImg = document.getElementById('modalImg');

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        modalImg.src = slides[slideIndex - 1].getElementsByTagName('img')[0].src;
    }