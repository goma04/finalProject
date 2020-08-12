


let oldY = 0;
function navbarSettings(){
    let down = false;
    let currentY = window.scrollY;    
    if(oldY > currentY){
        down = true;
    }
    oldY = currentY;
    let table = document.querySelector(".navbar");
    
    if(down==false){
        table.style.opacity = "40%";
    } 
    else{
        table.style.opacity = "90%";
    }  

    //megnézi hogy mekkora az oldal magassága, aszerint változtatja a navbar színét
    let pageHeight = document.querySelector('body').lastElementChild.getBoundingClientRect().bottom;
    let whereIsUser = currentY / pageHeight;

    if(whereIsUser<0.2){
        table.style.backgroundColor ="#f87373";
    }
    else if(whereIsUser<0.4){
        table.style.backgroundColor ="#F67D7D";
    }
    else if(whereIsUser<0.6){
        table.style.backgroundColor ="#F6A4A4";
    }
    else if(whereIsUser<0.8){
        table.style.backgroundColor ="#F8D4D4";
    }
    else{
        table.style.backgroundColor ="#85f7f7";
    }

}

window.onscroll = navbarSettings;

