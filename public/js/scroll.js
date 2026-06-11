const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }

    });

}, {
    threshold: 0.15
});

reveals.forEach((item) => {
    observer.observe(item);
});

const progressBar = document.getElementById("progress-bar");
const backToTop = document.getElementById("backToTop");
const navbar = document.querySelector(".navbar-custom");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    if(progressBar){
        progressBar.style.width = progress + "%";
    }

    if(scrollTop > 300){

        if(backToTop){
            backToTop.classList.add("show");
        }

        if(navbar){
            navbar.classList.add("scrolled");
        }

    }else{

        if(backToTop){
            backToTop.classList.remove("show");
        }

        if(navbar){
            navbar.classList.remove("scrolled");
        }

    }

});

if(backToTop){
    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });
}