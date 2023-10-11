let selectedprize = "";
let removeamount = 10;
let removespeed = 500;

let listofnames = ["Alma Watts", "Ishaan Ochoa", "Zoie Williamson", "Kelsie Melendez", "Cierra Walsh", "Rayna Colon", "Keon Bryant", "Gordon Hogan", "Rachael Munoz", "Aliana Compton", "Chasity Roberson", "Gregory Castillo", "Aldo Blankenship", "Naomi Phillips", "Delaney Heath", "Yadiel Kirk", "Shyanne Cook", "Katie Barker", "Erik Rasmussen", "Audrey Oconnell", "Keon Hogan", "Alvin Herrera", "Brooklynn Larson", "Jennifer Drake", "Izabella Salas", "Dayton Clarke", "Matteo Torres", "Kylan Steele", "Erin Hill", "Keyon Golden", "Thaddeus Haley", "Cedric Hood", "Kenley Ross", "Estrella Colon", "Genesis Salinas", "Christian Robbins", "Makenzie Summers", "Ashtyn Wilkins", "Mckenna Arellano", "Kelsey Arias", "Kenzie Fry", "Ali Little", "Lacey Adams", "Dexter Greene", "Halle Buckley", "Charlotte Woods", "Kayleigh Larsen", "Tianna Farmer", "Riya Chapman", "Bryce Fox", "Talan Gray", "Isabela Wade", "Maren Lynn", "Cherish Bradley", "Lewis Burton", "David Cherry", "Alia Hughes", "Kamari Pearson", "Madelyn Mcpherson", "Esmeralda Riggs", "Ireland Ewing", "Cassius Case", "Ingrid Cherry", "Harper Livingston", "Brody Leach", "Silas Ellison", "Anne Gillespie", "Teagan Garner", "Malaki Juarez", "Silas Turner", "Roland Thornton", "Kadyn Parker", "Leyla Herman", "Kaleb Pierce", "Larry Mcdowell", "Sophia Mendoza", "Alisa Simmons", "Kristin Griffin", "Claire Shepherd", "Julio Ford", "Destiney Haas", "Clark Macias", "Miriam Mcgee", "Kierra Leach", "Justus Pham", "Emely Cameron", "Laura Petersen", "Arthur Benton", "Rodney Carter", "Skyla Strickland", "Jazmin Rowe", "Kasey Moreno", "Junior Boyer", "Journey Mendez", "Dulce Thomas", "Chad Mcgee", "Halle Long", "Isis Robles", "Micheal Perez", "Immanuel Stout", "Kadyn Ibarra", "Aiden Stewart", "Ali Aguilar", "Alyssa Fletcher", "Aliana Robles", "Branden Orozco", "Lane Martin", "Dominic Hodge", "Kaylyn Leach", "Lizbeth Morales", "Addyson Cruz", "Greta Park", "Ruby Haas", "Duncan Rocha", "Derek Garcia", "Kailey Hart", "Nathaniel Jarvis", "Malik Mason", "Faith Shea", "Adelyn Case", "Breanna Castaneda", "Prince Price", "Saniya Ferrell", "Maia Weiss", "Elian Mcgrath", "Dania Rice", "Timothy Wilcox", "Rosemary Davenport", "Lily Leonard", "Marvin Pineda", "Jonathon Pierce", "Kali Blair", "Nataly Waller", "Cordell Moses", "Raven Compton", "Walter Bonilla", "Cara Clarke", "Issac Blackwell", "Solomon Cantu", "Alena Barron", "Jocelynn Reynolds", "Annalise Benitez", "Cailyn Webb", "Kathy Robinson", "Margaret Mcgee", "Frank Bond", "Piper Atkinson", "Delilah Adams", "Gisselle Contreras", "Amiah Contreras", "Annabella Smith", "Esmeralda Mckay", "Samuel Watts", "Alina Sosa", "Simeon Lynch", "Eduardo Gallegos", "Julia Rangel", "Sidney Fuller", "Mckenzie Wilcox", "Kendrick Hooper", "Taniyah Ochoa", "Vance Campbell", "Dayami Kramer", "Elsa Harrell", "Karlee Mccall", "Lana Mathews", "Saige Andersen", "Melany Tapia", "Kaitlynn Rosales", "Perla Benton", "Savannah Sims", "Alessandra Jefferson", "Zachariah Porter", "Adalyn Shaffer", "Harmony Fisher", "Jaqueline Zhang", "Daniela Stone", "Daniela Wiggins", "Alijah Clarke", "Caleb Love", "Keon Crawford", "Aron Nolan", "Brian Barron", "Makenna Black", "Brielle Whitaker", "Celia Lutz", "Terry Mora", "Darius Armstrong", "Devin Kane", "Madden Dennis", "Heidy Fletcher", "Amani Thornton", "Brice Roy", "Cara Burton", "Yaritza Kramer", "Junior Gay", "Caden Osborn", "Shania Barrett", "Edwin Webster", "Maximo Richardson"];

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
    document.getElementById("shadow").style.display="block";
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";
    

   //thecount();
   rafflebegin();
}

function thecount() {
    let counter = 3;
    let timer = setInterval( function() { 
      
      $('#countdown').remove();     
      
    if (counter == 0){
        rafflebegin();
    } else{
        let countdown = $('<span id="countdown">'+counter+'</span>'); 
        countdown.appendTo($('#countdowncon'));
    }
      
      setTimeout( () => {
         if (counter >-1) {
         $('#countdown').css({ 'font-size': '29vw', 'opacity': 0 }); 
         } else {
           $('#countdown').css({ 'font-size': '10vw', 'opacity': 80 });
         }
      },20);
      counter--;
      if (counter == -1) clearInterval(timer);
    }, 1000);
    };

//let wehaveit = [];

var selectedDivs = [];


function rafflebegin(id){
    document.getElementById("intro").innerHTML="the raffle prize is a";
    document.getElementById("raffleprizename").innerHTML=selectedprize;
    document.getElementById("shadow").style.display="none";

    let namepush = "";
    for (let i = 0; i < listofnames.length; i++) {
        namepush+="<div class=mininame>"+listofnames[i].replace(' ', '&nbsp;')+"</div>"
    }
    document.getElementById("namediv").innerHTML=namepush;

    selectRandomDiv();

}


function selectRandomDiv() {
    // let removelist = [];
    // if (listofnames.length > 1) { 
    //     for (let i = 0; i < removeamount; i++) {
    //         let selectedDivIndex = Math.floor(Math.random() * listofnames.length);
    //         let selectedDiv = document.querySelector('.mininame:nth-child(' + (selectedDivIndex + 1) + ')');
    //         selectedDiv.classList.add('flasheffect');
    //         removelist.push([selectedDiv, selectedDivIndex]);
    //     }
    //     console.log(removelist);
    //     setTimeout(function() {
    //         for (let i = 0; i < removeamount; i++) {
    //             removelist[i][0].style.display="none";
    //             listofnames.splice(removelist[i][1], 1);
    //         }
    //         removelist=[];
    //         selectRandomDiv();
    //     }, removespeed);

    // } else {
    //     console.log('All divs have been removed.');
    // }

    var selectedDivIndices = [];
    
    // Select 10 random divs
    while (selectedDivIndices.length < 10 && listofnames.length > 1) {
        var randonum = Math.floor(Math.random() * listofnames.length);
        selectedDivIndices.push(randonum);
    }

    // Apply the special class 'flasheffect' to the selected divs
    for (var i = 0; i < selectedDivIndices.length; i++) {
        var selectedDivIndex = selectedDivIndices[i];
        var selectedDiv = document.querySelector('.mininame:nth-child(' + (selectedDivIndex + 1) + ')');
        
        // Check if the selectedDiv exists before applying the class
        if (selectedDiv) {
            selectedDiv.classList.add('flasheffect');
        }
    }

    // Remove the selected divs from the screen and array after a timeout
    setTimeout(function() {
        for (var i = selectedDivIndices.length - 1; i >= 0; i--) {
            var selectedDivIndex = selectedDivIndices[i];
            var selectedDiv = document.querySelector('.mininame:nth-child(' + (selectedDivIndex + 1) + ')');
            
            // Check if the selectedDiv exists before removing it
            if (selectedDiv) {
                selectedDiv.remove(); // Remove from the DOM
                listofnames.splice(selectedDivIndex, 1); // Remove from the list
            }
        }

        // Check if there are more divs to process
        if (listofnames.length > 0) {
            // Call the function again to process the next batch of divs
            selectRandomDiv();
        } else {
            // All divs have been removed
            console.log('All divs have been removed.');
        }
    }, 100); // Replace
    
}
