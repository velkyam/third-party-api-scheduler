
var today = moment().format("dddd, MMMM Do")
$("#currentDay").text(today);

//actual time in 24h format
var currentTime = moment().format("H")

// UNCOMMENT THIS VARIBALE TO TEST ANY HOUR (24H FORMAT)
// var currentTime = 14;


var rows = document.querySelectorAll("div.row");


var hours =[9, 10, 11, 12, 13, 14, 15, 16, 17]


for (let i = 0; i < hours.length; i++) {
    if(hours[i]===currentTime){
        rows[i].classList.add("present")
    } else if (hours[i]<currentTime)
    {
        rows[i].classList.add("past")

    } else if (hours[i]>currentTime){
        rows[i].classList.add("future")
    }
    
}

var nineBtn=document.querySelector("#nineBtn")
var tenBtn=document.querySelector("#tenBtn")
var elevenBtn=document.querySelector("#elevenBtn")
var twelveBtn=document.querySelector("#twelveBtn")
var thirteenBtn=document.querySelector("#thirteenBtn")
var fourteenBtn=document.querySelector("#fourteenBtn")
var fifteenBtn=document.querySelector("#fifteenBtn")
var sixteenBtn=document.querySelector("#sixteenBtn")
var seventeenBtn=document.querySelector("#seventeenBtn")

document.querySelector("#nineInput").defaultValue = (localStorage.getItem("nineInput"))
document.querySelector("#tenInput").defaultValue = (localStorage.getItem("tenInput"))
document.querySelector("#elevenInput").defaultValue = (localStorage.getItem("elevenInput"))
document.querySelector("#twelveInput").defaultValue = (localStorage.getItem("twelveInput"))
document.querySelector("#thirteenInput").defaultValue = (localStorage.getItem("thirteenInput"))
document.querySelector("#fourteenInput").defaultValue = (localStorage.getItem("fourteenInput"))
document.querySelector("#fifteenInput").defaultValue = (localStorage.getItem("fifteenInput"))
document.querySelector("#sixteenInput").defaultValue = (localStorage.getItem("sixteenInput"))
document.querySelector("#seventeenInput").defaultValue = (localStorage.getItem("seventeenInput"))

nineBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var nineInput = document.querySelector("#nineInput").value
    localStorage.setItem("nineInput", nineInput)
})
tenBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var tenInput = document.querySelector("#tenInput").value
    localStorage.setItem("tenInput", tenInput)
})
elevenBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var elevenInput = document.querySelector("#elevenInput").value
    localStorage.setItem("elevenInput", elevenInput)
})
twelveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var twelveInput = document.querySelector("#twelveInput").value
    localStorage.setItem("twelveInput", twelveInput)
})
thirteenBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var thirteenInput = document.querySelector("#thirteenInput").value
    localStorage.setItem("thirteenInput", thirteenInput)
})
fourteenBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var fourteenInput = document.querySelector("#fourteenInput").value
    localStorage.setItem("fourteenInput", fourteenInput)
})
fifteenBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var fifteenInput = document.querySelector("#fifteenInput").value
    localStorage.setItem("fifteenInput", fifteenInput)
})
sixteenBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var sixteenInput = document.querySelector("#sixteenInput").value
    localStorage.setItem("sixteenInput", sixteenInput)
})
seventeenBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var seventeenInput = document.querySelector("#seventeenInput").value
    localStorage.setItem("seventeenInput", seventeenInput)
})

