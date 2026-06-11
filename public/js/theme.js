const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        btn.innerHTML = "☀️";
    }else{
        btn.innerHTML = "🌙";
    }
});