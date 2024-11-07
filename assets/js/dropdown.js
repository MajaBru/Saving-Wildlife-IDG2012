const subMenu = document.querySelectorAll(".submenu-wrapper");
const subMenuBtn = document.querySelectorAll(".submenu-btn");
const dropdownMenu = document.querySelectorAll(".submenu-content");

// dropdown shows when its clicked. It will also show when hitting enter or space.
subMenu.forEach((button, i) => {
    button.addEventListener('click', () => {
        dropdownMenu[i].classList.toggle('show');
    });
});

function closeDropdowns() {
    dropdownMenu.forEach(menu => {
        menu.classList.remove('show');
    });
}

document.addEventListener('click', (event) => {
    if (!event.target.closest('.navbar')) {
        closeDropdowns();
    }
    });
