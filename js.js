let names = [];

let prizes = [
    "Macbook Pro",
    "Samsung Galaxy 24",
    "MarsCat"
]

window.onload=start();

function start() {
    makeprizes();
}

function makeprizes(){

    for (let i = 0; i < prizes.length; i++) {
        document.getElementsByClassName("options").innerHTML+='<li class="option"><span class="option-text">'+prizes[i]+'</span></li>';

    }
}







//---------------------------
//Dropdown menu stuff
//---------------------------
const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       
options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});