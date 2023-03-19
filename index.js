//Detecting mouse clicks on the buttons
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        playSound(this.innerHTML)
        buttonAnimation(this.innerHTML)
    });
}

//Detecting key presses
document.addEventListener("keydown", function(event){
    playSound(event.key)
    buttonAnimation(event.key)
})

//Function to play appropriate sound
function playSound(char){
    let sound
    switch (char) {
        case "w":
            sound = new Audio("sounds/tom-1.mp3")
            sound.play()
            break;
        case "a":
            sound = new Audio("sounds/tom-2.mp3")
            sound.play()
        break;
        case "s":
            sound = new Audio("sounds/tom-3.mp3")
            sound.play()
        break;
        case "d":
            sound = new Audio("sounds/tom-3.mp3")
            sound.play()
        break;
        case "j":
            sound = new Audio("sounds/snare.mp3")
            sound.play()
        break;
        case "k":
            sound = new Audio("sounds/crash.mp3")
            sound.play()
        break;
        case "l":
            sound = new Audio("sounds/kick-bass.mp3")
            sound.play()
        break;
        case "t":
            sound = new Audio("sounds/mindu.mp3")
            sound.play()
        break;
        default:
        break;
    }
}

//Function to make button animation
function buttonAnimation(char) {

    let activeButton = document.querySelector("." + char)

    activeButton.classList.add("pressed")

    setTimeout(function(){activeButton.classList.remove("pressed")}, 100)
    
}