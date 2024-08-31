function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("active");

    // Optionally close any open dropdowns when toggling the menu
    const dropdownMenu = document.querySelector(".mobile-dropdown-menu");
    const dropdownIcon = document.getElementById("mobile-dropdown-icon");
    dropdownMenu.style.display = "none";
    dropdownIcon.style.transform = "rotate(0deg)";
}
