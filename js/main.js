document.addEventListener("DOMContentLoaded", () => {
    const expandBtn = document.getElementById("expand-btn");
    const expandableDesc = document.getElementById("expandable-description");

    if (expandBtn && expandableDesc) {
        const btnText = expandBtn.querySelector(".expand-btn__text");
        const btnIconPoly = expandBtn.querySelector(".expand-btn__icon polyline");

        expandBtn.addEventListener("click", () => {
            const isExpanded = expandBtn.getAttribute("aria-expanded") === "true";

            if (!isExpanded) {
                // Expand
                expandBtn.setAttribute("aria-expanded", "true");
                expandableDesc.classList.add("is-expanded");
                btnText.textContent = "Show less";
                btnIconPoly.setAttribute("points", "18 15 12 9 6 15"); // Arrow up
            } else {
                // Collapse
                expandBtn.setAttribute("aria-expanded", "false");
                expandableDesc.classList.remove("is-expanded");
                btnText.textContent = "Show more";
                btnIconPoly.setAttribute("points", "6 9 12 15 18 9"); // Arrow down
            }
        });
    }
});