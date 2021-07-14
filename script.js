window.onload = () => {

    var body = document.getElementsByTagName("body")[0];


    var play = document.getElementById("playcontainer");
    var pause = document.getElementById("pausecontainer");
    var lockin = document.getElementById("lockin");
    var player = document.getElementById("playerwindow");

    /* TOGGLE BETWEEN PLAY & PAUSE*/

    play.onclick = () => {
        play.style.display = "none";
        pause.style.display = "flex";

        pause.onclick = () => {
            pause.style.display = "none";
            play.style.display = "flex";
        }
    }

    /* END OF TOGGLE BETWEEN PAUSE & PLAY* /

    

    /* SHOW PLAYER */

    lockin.onclick = () => {

        player.style.transform = "translate(0%)";

        setTimeout(function () {
            document.documentElement.style.overflowY = "hidden";
        }, 350);

    }

    var close = document.getElementById("close");

    close.onclick = () => {

        
        player.style.transform = "translate(-100%)";
        document.documentElement.style.overflowY = "scroll";

    }

    /* END OF SHOW PLAYER*/



    /* SHOW & HIDE MOBILE MENU*/

    menu.onclick = () => {

        var menu = document.getElementById("menu");
        var nav = document.getElementById("mobilenav");
        var content = document.getElementById("mobile-content");

        menu.classList.toggle("toggle");


        if (nav.style.display === "flex") {

            
            nav.style.height = "0vh";

            setTimeout(function (){
                content.style.opacity = "0";
                }, 10);

            setTimeout(function () {
                content.style.display = "none";
            }, 200);

            setTimeout(function () {
                nav.style.display = "none";
            }, 500);



        } else {

            nav.style.display = "flex";

            setTimeout(function (){
            content.style.opacity = "1";
            }, 150);

            setTimeout(function () {
                content.style.display = "flex";
            }, 100);
           

            setTimeout(function () {
                nav.style.height = "10vh";
            }, 10);


        }


    }

    /* END OF SHOW & HIDE MOBILE MENU*/




































}