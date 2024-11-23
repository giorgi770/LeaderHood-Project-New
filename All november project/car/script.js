document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Hover effect for the explore button
    const exploreBtn = document.querySelector(".explore-btn");
    exploreBtn.addEventListener("mouseover", () => {
        exploreBtn.style.backgroundColor = "#333";
    });
    exploreBtn.addEventListener("mouseout", () => {
        exploreBtn.style.backgroundColor = "#1a73e8";
    });
});
