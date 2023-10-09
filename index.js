const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 450 ){
        header.classList.add("scrolled");
    } else if(window.scrollY <= 430){
        header.classList.remove("scrolled");       
    }
})