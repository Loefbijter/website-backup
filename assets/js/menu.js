window.onload = function() {
    window.loefbijter = {};
    window.loefbijter.openMenu = function () {
        document.querySelector(".top-menu-wrapper").classList.add("show-offcanvas");
    }
    window.loefbijter.closeMenu = function () {
        document.querySelector(".top-menu-wrapper").classList.remove("show-offcanvas");
    }
}

