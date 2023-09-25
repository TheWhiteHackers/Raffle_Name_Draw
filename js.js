let selectedprize = "";

let names = [];

let prizes = [
    "Macbook Pro",
    "Samsung Galaxy 24",
    "MarsCat"
]

window.onload=start();

function start() {
    makeprizes();
    document.getElementById("shadow").style.display='none';
    document.getElementById("submit").disabled=true;
}

function makeprizes(){
    for (let i = 0; i < prizes.length; i++) {
        document.getElementsByClassName("options")[0].innerHTML+='<li class="option" id=this><span class="option-text">'+prizes[i]+'</span></li>';
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
        selectedprize = selectedOption;
        console.log(selectedprize);
        optionMenu.classList.remove("active");
        document.getElementById("submit").disabled=false;
    });
});
//-------------------------

function startraffle(){
    document.getElementById("header").style.display="none";
    document.getElementById("selectcon").style.display="none";
    document.getElementById("shadow").style.display="block"

   thecount();
}

function thecount() {
    let counter = 3;
    let timer = setInterval( function() { 
      
      $('#countdown').remove();     
      
      let countdown = $('<span id="countdown">'+(counter==0?rafflebegin():counter)+'</span>'); 
      countdown.appendTo($('#countdowncon'));
      setTimeout( () => {
         if (counter >-1) {
         $('#countdown').css({ 'font-size': '29vw', 'opacity': 0 }); 
         } else {
           $('#countdown').css({ 'font-size': '10vw', 'opacity': 70 });
         }
      },20);
      counter--;
      if (counter == -1) clearInterval(timer);
    }, 1000);
    };

function rafflebegin(){
    document.getElementById("intro").innerHTML="the raffle prize is a";
    document.getElementById("raffleprizename").innerHTML=selectedprize;
    document.getElementById("shadow").style.display="none";

}

