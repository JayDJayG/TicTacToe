
var buttonX = document.querySelector("#theX");
var buttonO = document.querySelector("#theO");
var initialsc = document.querySelector(".initialize");

var token = ""
var tokenHover = "";
var cellId = 0;

//Hidding initialization screen and
buttonX.addEventListener("click", function() {
    initialsc.classList.add("hidden");
    token+= "x";
    tokenHover+= "xh";
    console.log(token, tokenHover);

  }
);

buttonO.addEventListener("click", function() {
    initialsc.classList.add("hidden");
    token+= "o";
    tokenHover+= "oh";
    console.log(token, tokenHover);

}
);

//Board variable initialization

var w1=document.querySelector("#w1");
var w2=document.querySelector("#w2");
var w3=document.querySelector("#w3");
var y1=document.querySelector("#y1");
var y2=document.querySelector("#y2");
var y3=document.querySelector("#y3");
var z1=document.querySelector("#z1");
var z2=document.querySelector("#z2");
var z3=document.querySelector("#z3");


function hoverOn() {
  cellId.classList.add(tokenHover);
  };

  function hoverOff() {
  cellId.classList.remove(tokenHover)
};

function cellClick() {
  cellId.classList.add(token)
  cellId.removeEventListener("mouseover", hoverOn);
  }

function activity() {
  cellId.addEventListener("mouseover", hoverOn);
  cellId.addEventListener("mouseout", hoverOff);
  cellId.addEventListener("click", cellClick);
}

w1.addEventListener("mouseover", function() {cellId=w1; activity(); return cellId;});
w3.addEventListener("mouseover", function() {cellId=w3; activity(); return cellId;});
w2.addEventListener("mouseover", function() {cellId=w2; activity(); return cellId;});
y1.addEventListener("mouseover", function() {cellId=y1; activity(); return cellId;});
y2.addEventListener("mouseover", function() {cellId=y2; activity(); return cellId;});
y3.addEventListener("mouseover", function() {cellId=y3; activity(); return cellId;});
z1.addEventListener("mouseover", function() {cellId=z1; activity(); return cellId;});
z2.addEventListener("mouseover", function() {cellId=z2; activity(); return cellId;});
z3.addEventListener("mouseover", function() {cellId=z3; activity(); return cellId;});
