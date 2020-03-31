document.addEventListener('DOMContentLoaded', function () {
    // ==================================================
    // References to elements or Global variables
    // ==================================================
    var carRunning = document.querySelector("#carRunning");
    var greenStripe = document.querySelector("#greenStripe");
    var redStripe = document.querySelector("#redStripe");
    var scrollCounter = 0;

    // ==================================================
    // Main Executions
    // ==================================================
    userScroll();

    // ==================================================
    // Helper Functions
    // ==================================================
    function userScroll() {
        window.addEventListener("scroll", function () {
            if (scrollCounter === 0) {
                carRunning.classList.add("moveCar");
                greenStripe.classList.add("colorGreen");
                redStripe.classList.add("colorRed");
                scrollCounter++;
            };
        });
    };
});
