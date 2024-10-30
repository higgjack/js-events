window.addEventListener("click", function (event) {
    console.log("== the window was clicked")
    console.log(" -- event.target:", event.target)
    console.log(" -- event.currentTarget:", event.currentTarget)
})

function handleBoxClick(event){
    console.log("== the a box was clicked")
    console.log(" -- event.target:", event.target)
    console.log(" -- event.currentTarget:", event.currentTarget)
}

var boxes = document.getElementsByClassName("box")
for (var i = 0; i<boxes.length; i++){
    boxes[i].addEventListener("click", handleBoxClick )
}

function handleButtonClick(event){
    console.log("== the button was clicked")
    console.log(" -- event:",event)
    var clickedButton = event.target
    var box = clickedButton.parentNode
    box.classList.toggle("highlighted")
    event.stopPropagation()
}

var buttons = document.getElementsByClassName("in-box-button")
for (var i = 0; i<boxes.length; i++){
    buttons[i].addEventListener("click",handleButtonClick)
}

var link = document.getElementById("website-link")
link.addEventListener("click", function(event){
    console.log("== The link was clicked")
    event.preventDefault()
    //event.stopPropagation()
})