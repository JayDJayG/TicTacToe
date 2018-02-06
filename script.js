//Board variable initialization

var w1 = document.getElementsByClassName("w1");
var w2 = document.getElementsByClassName("w2");
var w3 = document.getElementsByClassName("w3");
var y1 = document.getElementsByClassName("y1");
var y2 = document.getElementsByClassName("y2");
var y3 = document.getElementsByClassName("y3");
var z1 = document.getElementsByClassName("z1");
var z2 = document.getElementsByClassName("z2");
var z3 = document.getElementsByClassName("z3");




//Functions

//This Function handles the exact position of the mouse,

 function mouseFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    console.log(coor);

    var  = 'x';

    var element = {};


      if(y > 110 && y < 269 && x > 517 && x < 684 ){
        element = document.getElementById("w1");
        element.classList.add(sayx);
      }

      else if(y > 271 && y < 449 && x > 517 && x < 684){

        element = document.getElementById("y1");
        element.classList.add("x");
        console.log(element);
      }




}
