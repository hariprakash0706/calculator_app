let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function append(value){
display.value += value;
}

function clearDisplay(){
display.value = "";
}

function deleteLast(){
display.value = display.value.slice(0,-1);
}

function calculate(){

try{

let result = eval(display.value);

addHistory(display.value + " = " + result);

display.value = result;

}

catch{
display.value="Error";
}

}

function addHistory(item){

let li = document.createElement("li");

li.textContent = item;

historyList.prepend(li);

}

function copyResult(){

navigator.clipboard.writeText(display.value);

alert("Result copied!");

}

function toggleTheme(){

document.body.classList.toggle("dark");

}

/* Keyboard support */

document.addEventListener("keydown",function(e){

if(!isNaN(e.key) || "+-*/.%".includes(e.key))
append(e.key);

else if(e.key==="Enter")
calculate();

else if(e.key==="Backspace")
deleteLast();

});
