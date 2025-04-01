document.addEventListener("DOMContentLoaded", () => {
    // Wait until the page is loaded, then apply the transition
    setTimeout(() => {
        document.querySelector('.content').classList.add('show');
    }, 800);  // A small delay to ensure the page is fully loaded
});
