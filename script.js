
/*var button = document.querySelector(".button");
var initialsc = document.querySelector(".initialize");

    button.addEventListener("click", function() {
    initialsc.classList.add("hidden");}
  );

//Board variable initialization
*/

var w1=document.querySelector("#w1");
var w2=document.querySelector("#w2");
var w3=document.querySelector("#w3");
var y1=document.querySelector("#y1");
var y2=document.querySelector("#y2");
var y3=document.querySelector("#y3");
var z1=document.querySelector("#z1");
var z2=document.querySelector("#z2");
var z3=document.querySelector("#z3");

var cellId = 0;

var token ="x";
var tokenHover = "xh";

function hoverOn() {
  cellID.classList.add(tokenHover);
  };

w1.addEventListener("mouseover", function() {cellId=w1; hoverOn; return cellId;});
w2.addEventListener("mouseover", function() {cellId=w2; return cellId;});
w3.addEventListener("mouseover", function() {cellId=w3; return cellId;});
y1.addEventListener("mouseover", function() {cellId=y1; return cellId;});
y2.addEventListener("mouseover", function() {cellId=y2; return cellId;});
y3.addEventListener("mouseover", function() {cellId=y3; return cellId;});
z1.addEventListener("mouseover", function() {cellId=z1; return cellId;});
z2.addEventListener("mouseover", function() {cellId=z2; return cellId;});
z3.addEventListener("mouseover", function() {cellId=z3; return cellId;});

function hoverOff() {
  cellId.classList.remove(tokenHover)
};

function cellClick() {
  cellId.classList.add(token)
  cellId.removeEventListener("mouseover", hoverOn);
  }
  
/*w1.addEventListener("mouseover", hoverOn);*/
cellId.addEventListener("mouseout", hoverOff);
cellId.addEventListener("click", cellClick);


  /*
var filtered = [];


//Functions


//the function arrayCleaning returns all the spots to be cleared for X or O when the mouse is not over them

function arrayCleaning(str){
  //this variable arrayOfSquares provides assistance to clear the sqares that are not pre-selected
  var arrayOfSquares = ['w1', 'w2', 'w3', 'y1', 'y2', 'y3', 'z1', 'z2', 'z3'];
  var filtered = arrayOfSquares.filter(function(value){
    return value !== str;
  });
  return filtered;
}

//The function classCleaning will take care of clearing the non-selected Xs or Os in the board, during the preselection phase
function classCleaning(arr){
  var clearElement = {};
  var i = 0;

  while (i < arr.length){
    clearElement = document.getElementById(arr[i]);
    clearElement.classList.remove("x");
    i++;
  }

}

//The mouseFunction Function handles the exact position of the mouse,

 function mouseFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: " + x + "," + y + ")";
    console.log(coor);

    var element = {};
    var arr = [];

//First column handeling
if (x >= 517 && x < 684){

    if(y >= 93 && y <= 270){

      classCleaning(arrayCleaning("w1"));
      element = document.getElementById("w1");
      element.classList.add('x');
      }

    else if(y > 271 && y < 449){

        classCleaning(arrayCleaning("y1"));
        element = document.getElementById("y1");
        element.classList.add("x");
      }

      else {
        classCleaning(arrayCleaning("z1"));
        element = document.getElementById("z1");
        element.classList.add("x");
      }
  }

  else if(x > 685 && x < 855){

    if(y >= 93 && y < 270){

      classCleaning(arrayCleaning("w2"));
      element = document.getElementById("w2");
      element.classList.add('x');
      }

    else if(y > 271 && y < 449){

        classCleaning(arrayCleaning("y2"));
        element = document.getElementById("y2");
        element.classList.add("x");
      }

      else {
        classCleaning(arrayCleaning("z2"));
        element = document.getElementById("z2");
        element.classList.add("x");
      }
  }

  else{
    if(y >= 93 && y < 270){

      classCleaning(arrayCleaning("w3"));
      element = document.getElementById("w3");
      element.classList.add('x');
      }

    else if(y > 271 && y < 449){

        classCleaning(arrayCleaning("y3"));
        element = document.getElementById("y3");
        element.classList.add("x");
      }

      else {
        classCleaning(arrayCleaning("z3"));
        element = document.getElementById("z3");
        element.classList.add("x");
      }

    }

}
*/