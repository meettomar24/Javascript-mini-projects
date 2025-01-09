let time = document.getElementById("time");
time.style.fontSize = "55px";
time.style.textAligne = "center";
time.style.width = "100%";
function updateTime(){
    let currentTime = new Date();
    time.textContent = currentTime.toLocaleString();
}

setInterval(updateTime, 1000);