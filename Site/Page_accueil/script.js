const connectButton = document.querySelector('.connect');
const formWrapper = document.querySelector('#login_form');
const formClose = document.querySelector('#form-close');

connectButton.addEventListener('click', function(event){
    event.preventDefault();
    formWrapper.style.display = 'flex';
    document.addEventListener('click', outsideClickListener);
});

formClose.addEventListener('click', function(event){
    event.preventDefault();
    formWrapper.style.display = 'none';
});



// pour le premier diaporama
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// pour le deuxième diaporama
let slideIndexBis = 0;
showSlidesBis();

function showSlidesBis() {
    let i;
    let slidesBis = document.getElementsByClassName("slideBis");

    for (i = 0; i < slidesBis.length; i++) {
        slidesBis[i].style.display = "none";
    }
    slideIndexBis++;
    if (slideIndexBis > slidesBis.length) {
        slideIndexBis = 1;
    }
    slidesBis[slideIndexBis - 1].style.display = "block";
    setTimeout(showSlidesBis, 3000); // Change image every 3 seconds
}

