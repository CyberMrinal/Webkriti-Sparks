function openNav(){
        if(window.matchMedia("(max-device-width: 450px)").matches)
                document.getElementById("sidenav").style.width = "50%";
        else
                document.getElementById("sidenav").style.width = "250px";
}
function closeNav(){
        document.getElementById("sidenav").style.width = "0";
}