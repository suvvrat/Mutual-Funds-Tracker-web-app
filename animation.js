window.addEventListener("load", function () {
    //Popup animations
    document.querySelector('.popup-link').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'block';
    });


    document.querySelector('.popup-link').addEventListener('click', function () {
        var popup = document.getElementById('popup');
        popup.style.animation = "move-in-bottom 300ms ease-out";
        popup.style.transform = "translateY(0)";
        popup.style.display = 'block';
    });

    document.querySelector('.close-popup').addEventListener('click', function () {

        document.getElementById('popup').style.display = 'none';
    });

});