let bgcolor;
function chooseBg() {
    while(true){
        bgcolor = prompt("Choose the color of Background");

        if(!bgcolor){
            break;
        }
        document.body.style.background = bgcolor;
        break;
    }
}
chooseBg();