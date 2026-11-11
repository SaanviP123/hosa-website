
// HEALTH OVER HAZARD
// Website Navigation

function showPage(pageId) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }

    // Update navigation buttons
    const buttons = document.querySelectorAll(".nav-link");

    buttons.forEach(button => {
        button.classList.remove("active");

        if (button.dataset.page === pageId) {
            button.classList.add("active");
        }
    });

    // Return to the top of the page
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
