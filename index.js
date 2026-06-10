const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

const themeBtn = document.getElementById("themeToggle");
const icon = themeBtn.querySelector("i");

const currentTheme = localStorage.getItem("theme");

if(currentTheme === "dark"){
    document.body.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    }else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
}


themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }else{
        localStorage.setItem("theme","light");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});



const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

const slider = document.getElementById("skillsSlider");

document.getElementById("nextBtn")
.addEventListener("click", () => {

    slider.scrollBy({
        left:300,
        behavior:"smooth"
    });

});

document.getElementById("prevBtn")
.addEventListener("click", () => {

    slider.scrollBy({
        left:-300,
        behavior:"smooth"
    });

});




