/* To Do

    - remove flash from last one
    - celeb screen
        - with confetti
    - font size

*/
let selectedprize = "";
let removeamount = 5;
let removespeed = 500;
let flashtime = 500;

let listofnames = [
  "Alma Watts",
  "Ishaan Ochoa",
  "Zoie Williamson",
  "Kelsie Melendez",
  "Cierra Walsh",
  "Rayna Colon",
  "Keon Bryant",
  "Gordon Hogan",
  "Rachael Munoz",
  "Aliana Compton",
  "Chasity Roberson",
  "Gregory Castillo",
  "Aldo Blankenship",
  "Naomi Phillips",
  "Delaney Heath",
  "Yadiel Kirk",
  "Shyanne Cook",
  "Katie Barker",
  "Erik Rasmussen",
  "Audrey Oconnell",
  "Keon Hogan",
  "Alvin Herrera",
  "Brooklynn Larson",
  "Jennifer Drake",
  "Izabella Salas",
  "Dayton Clarke",
  "Matteo Torres",
  "Kylan Steele",
  "Erin Hill",
  "Keyon Golden",
  "Thaddeus Haley",
  "Cedric Hood",
  "Kenley Ross",
  "Estrella Colon",
  "Genesis Salinas",
  "Christian Robbins",
  "Makenzie Summers",
  "Ashtyn Wilkins",
  "Mckenna Arellano",
  "Kelsey Arias",
  "Kenzie Fry",
  "Ali Little",
  "Lacey Adams",
  "Dexter Greene",
  "Halle Buckley",
  "Charlotte Woods",
  "Kayleigh Larsen",
  "Tianna Farmer",
  "Riya Chapman",
  "Bryce Fox",
  "Talan Gray",
  "Isabela Wade",
  "Maren Lynn",
  "Cherish Bradley",
  "Lewis Burton",
  "David Cherry",
  "Alia Hughes",
  "Kamari Pearson",
  "Madelyn Mcpherson",
  "Esmeralda Riggs",
  "Ireland Ewing",
  "Cassius Case",
  "Ingrid Cherry",
  "Harper Livingston",
  "Brody Leach",
  "Silas Ellison",
  "Anne Gillespie",
  "Teagan Garner",
  "Malaki Juarez",
  "Silas Turner",
  "Roland Thornton",
  "Kadyn Parker",
  "Leyla Herman",
  "Kaleb Pierce",
  "Larry Mcdowell",
  "Sophia Mendoza",
  "Alisa Simmons",
  "Kristin Griffin",
  "Claire Shepherd",
  "Julio Ford",
  "Destiney Haas",
  "Clark Macias",
  "Miriam Mcgee",
  "Kierra Leach",
  "Justus Pham",
  "Emely Cameron",
  "Laura Petersen",
  "Arthur Benton",
  "Rodney Carter",
  "Skyla Strickland",
  "Jazmin Rowe",
  "Kasey Moreno",
  "Junior Boyer",
  "Journey Mendez",
  "Dulce Thomas",
  "Chad Mcgee",
  "Halle Long",
  "Isis Robles",
  "Micheal Perez",
  "Immanuel Stout",
  "Kadyn Ibarra",
  "Aiden Stewart",
  "Ali Aguilar",
  "Alyssa Fletcher",
  "Aliana Robles",
  "Branden Orozco",
  "Lane Martin",
  "Dominic Hodge",
  "Kaylyn Leach",
  "Lizbeth Morales",
  "Addyson Cruz",
  "Greta Park",
  "Ruby Haas",
  "Duncan Rocha",
  "Derek Garcia",
  "Kailey Hart",
  "Nathaniel Jarvis",
  "Malik Mason",
  "Faith Shea",
  "Adelyn Case",
  "Breanna Castaneda",
  "Prince Price",
  "Saniya Ferrell",
  "Maia Weiss",
  "Elian Mcgrath",
  "Dania Rice",
  "Timothy Wilcox",
  "Rosemary Davenport",
  "Lily Leonard",
  "Marvin Pineda",
  "Jonathon Pierce",
  "Kali Blair",
  "Nataly Waller",
  "Cordell Moses",
  "Raven Compton",
  "Walter Bonilla",
  "Cara Clarke",
  "Issac Blackwell",
  "Solomon Cantu",
  "Alena Barron",
  "Jocelynn Reynolds",
  "Annalise Benitez",
  "Cailyn Webb",
  "Kathy Robinson",
  "Margaret Mcgee",
  "Frank Bond",
  "Piper Atkinson",
  "Delilah Adams",
  "Gisselle Contreras",
  "Amiah Contreras",
  "Annabella Smith",
  "Esmeralda Mckay",
  "Samuel Watts",
  "Alina Sosa",
  "Simeon Lynch",
  "Eduardo Gallegos",
  "Julia Rangel",
  "Sidney Fuller",
  "Mckenzie Wilcox",
  "Kendrick Hooper",
  "Taniyah Ochoa",
  "Vance Campbell",
  "Dayami Kramer",
  "Elsa Harrell",
  "Karlee Mccall",
  "Lana Mathews",
  "Saige Andersen",
  "Melany Tapia",
  "Kaitlynn Rosales",
  "Perla Benton",
  "Savannah Sims",
  "Alessandra Jefferson",
  "Zachariah Porter",
  "Adalyn Shaffer",
  "Harmony Fisher",
  "Jaqueline Zhang",
  "Daniela Stone",
  "Daniela Wiggins",
  "Alijah Clarke",
  "Caleb Love",
  "Keon Crawford",
  "Aron Nolan",
  "Brian Barron",
  "Makenna Black",
  "Brielle Whitaker",
  "Celia Lutz",
  "Terry Mora",
  "Darius Armstrong",
  "Devin Kane",
  "Madden Dennis",
  "Heidy Fletcher",
  "Amani Thornton",
  "Brice Roy",
  "Cara Burton",
  "Yaritza Kramer",
  "Junior Gay",
  "Caden Osborn",
  "Shania Barrett",
  "Edwin Webster",
  "Maximo Richardson",
  "Chandler Hill",
  "Gabriel Golden",
  "Milagros Morton",
  "Lillie Knox",
  "Dawson Cohen",
  "Kamren Le",
  "Ramiro Carney",
  "Lea York",
  "Leroy Riley",
  "Zachariah Moody",
  "Janiyah Holloway",
  "Beatrice Dalton",
  "Rebekah Hooper",
  "Micah Escobar",
  "Liberty Moses",
  "Adam Short",
  "Bernard Bishop",
  "Eileen Church",
  "Chasity Blanchard",
  "Jacob Horton",
  "Matthew Hoover",
  "Abigail Stafford",
  "Brayden Kline",
  "Van Williamson",
  "Kailee Duarte",
  "Mackenzie Bowman",
  "Jair Nash",
  "Brody Medina",
  "Hazel Mcintosh",
  "Charlie Bryan",
  "Brett Nash",
  "Hayden Thornton",
  "Kirsten Browning",
];

let prizes = ["Macbook Pro", "Samsung Galaxy 24", "MarsCat"];

window.onload = start();

function start() {
  makeprizes();
  document.getElementById("shadow").style.display = "none";
  document.getElementById("submit").disabled = true;
  document.getElementById("namediv").style.display = "none";
}

function makeprizes() {
  for (let i = 0; i < prizes.length; i++) {
    document.getElementsByClassName("options")[0].innerHTML +=
      '<li class="option" id=this><span class="option-text">' +
      prizes[i] +
      "</span></li>";
  }
}

//---------------------------
//Dropdown menu stuff
//---------------------------
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    selectedprize = selectedOption;
    console.log(selectedprize);
    optionMenu.classList.remove("active");
    document.getElementById("submit").disabled = false;
  });
});
//-------------------------

function startraffle() {
  document.getElementById("namediv").style.display = "block";
  document.getElementById("header").style.display = "none";
  document.getElementById("selectcon").style.display = "none";
  document.getElementById("shadow").style.display = "block";
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "none";

  //thecount();
  rafflebegin();
}

function thecount() {
  let counter = 3;
  let timer = setInterval(function () {
    $("#countdown").remove();

    if (counter == 0) {
      rafflebegin();
    } else {
      let countdown = $('<span id="countdown">' + counter + "</span>");
      countdown.appendTo($("#countdowncon"));
    }

    setTimeout(() => {
      if (counter > -1) {
        $("#countdown").css({ "font-size": "29vw", opacity: 0 });
      } else {
        $("#countdown").css({ "font-size": "10vw", opacity: 80 });
      }
    }, 20);
    counter--;
    if (counter == -1) clearInterval(timer);
  }, 1000);
}

//let wehaveit = [];

var selectedDivs = [];

function rafflebegin(id) {
  document.getElementById("intro").innerHTML = "the raffle prize is a";
  document.getElementById("raffleprizename").innerHTML = selectedprize;
  document.getElementById("shadow").style.display = "none";

  let namepush = "";
  for (let i = 0; i < listofnames.length; i++) {
    namepush +=
      "<span id='name" +
      i +
      "' class='mininame fontr'>" +
      listofnames[i].replace(" ", "&nbsp;") +
      "</span>";
  }
  document.getElementById("namediv").innerHTML = namepush;

  selectRandomDiv(listofnames);
}

function selectRandomDiv(arraylist) {
  let nameids = [];
  for (let i = 0; i < arraylist.length; i++) {
    nameids.push(i);
  }

  const interval = setInterval(() => {
    const remainingCount = nameids.length;

    if (remainingCount === 1) {
      clearInterval(interval);
      console.log("Last remaining item:", nameids[0]);
    } else if (remainingCount > 1) {
      //const selectedItems = [];
      if (remainingCount < 9) {  
        const el = document.querySelectorAll(".fontr");
        el.forEach((e)=>{
          e.style.fontSize="17px";
        })
        removeamount = 1;
        flashtime = 2000;
        removespeed = 2000;
      }

      for (let i = 0; i < removeamount; i++) {
        if (nameids.length === 1) {
          break;
        }

        if (remainingCount < 6) {
          flashtime = 4000;
          removespeed = 4000;
          for (let j = 0; j < nameids.length; j++) {
            document
              .getElementById("name" + nameids[j])
              .classList.add("flasheffect");
          }
        }
        const randomIndex = Math.floor(Math.random() * nameids.length);
        let divid = nameids.splice(randomIndex, 1)[0];

       
        if (remainingCount >= 6){
          document.getElementById("name" + divid).classList.add("flasheffect");
        }

        setTimeout(function () {
          document.getElementById("name" + divid).remove();
        }, flashtime);

        //selectedItems.push(nameids.splice(randomIndex, 1)[0]);
      }
    }
  }, removespeed);
}
