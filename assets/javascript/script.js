"use strict";

document.addEventListener("DOMContentLoaded", init)

function init(){
    document.getElementById("plsWork").addEventListener("click", showInput);
} 

let leerkrachten = [];

function showInput(){
    
    let variable = document.getElementById('inputId').value;
    leerkrachten.push(variable)
    document.getElementById('leerkrachten').innerHTML = 'De afwezige leerkrachten zijn: ' + leerkrachten;
}
















/* 
function currentTime(){

    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();  
    
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    var t = setTimeout(function(){ currentTime() }, 1000); 

    let midnight = "PM";
    midnight = (hour <= 12) ? "AM" : "PM"   

    document.querySelector("#clock").innerHTML = hour + " : " + min + " : " + sec + " " + midnight;
}

function updateTime(k){
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

currentTime();
 */