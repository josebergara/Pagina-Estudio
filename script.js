function fadeIn(){
  var fade = document.getElementById("intro"); 
  var op  = 0;
  var intervalID = setInterval(function() { 
      if (op < 1) { 
      op  = op + 0.1; 
      fade.style.opacity = op;
      } else {
          clearInterval(intervalID);
          } 
          }, 250);

      }
      

function fadeIn1(){
  var fade = document.getElementById("logo"); 
  var op  = 0;
  var intervalID = setInterval(function() { 
      if (op < 1) { 
      op  = op + 0.1; 
      fade.style.opacity = op;
      } else {
          clearInterval(intervalID);
          } 
          }, 250);

      }