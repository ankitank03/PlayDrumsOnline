// Generating Sounds

function generateSounds(keyValue)
{
  switch (keyValue) {
    case "w":
     var audio=new Audio("sounds/tom-1.mp3");
     audio.play();
      break;
      case "a":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
     var audio=new Audio("sounds/tom-3.mp3");
     audio.play();
     break;
     case "d":
     var audio=new Audio("sounds/tom-4.mp3");
     audio.play();
     break;
     case "j":
     var audio=new Audio("sounds/crash.mp3");
     audio.play();
     break;
     case "k":
     var audio=new Audio("sounds/kick-bass.mp3");
     audio.play();
     break;

     case "l":
     var audio=new Audio("sounds/snare.mp3");
     audio.play();
     break;
     default:alert("Wrong Key Pressed");

  }

}


// Generating Sounds on MouseClicks

for(var i=0;i<document.querySelectorAll("button").length;i++)
document.querySelectorAll("button")[i].addEventListener("click",function(){
  var buttonInnerHTML=this.innerHTML;

  generateSounds(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

});

// Generating Sounds When Keys are Pressed

document.addEventListener("keydown",function(event){
generateSounds(event.key);
buttonAnimation(event.key);
});

  // Generating Animations
function buttonAnimation(keyValue)
{
  var activeButton=document.querySelector("."+keyValue);
  activeButton.classList.add("pressed");

 setTimeout(function(){
  activeButton.classList.remove("pressed");
  },100);

}
