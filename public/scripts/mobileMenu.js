document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("hamburger");
    const nav = document.getElementById("navbar");

    if (btn && nav) {
        btn.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }
})