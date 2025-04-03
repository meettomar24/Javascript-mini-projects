let note = document.getElementById("FormControlTextarea1")
note.addEventListener("input", () =>{
    localStorage.setItem("note" ,note.value)
})

window.addEventListener("load", ()=>{
    note.value = localStorage.getItem("note") || "";
})