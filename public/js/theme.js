const btn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");
    btn.innerHTML = "☀️";

}else{

    btn.innerHTML = "🌙";

}

btn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        btn.innerHTML = "☀️";

        localStorage.setItem(
            "theme",
            "light"
        );

    }else{

        btn.innerHTML = "🌙";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});