// Your Code Here!

// Create a function that "rolls a die" and give you a number 1-6.

// Then roll two dice and add them together.

// Do that 1000 times and create an array of how frequently each result occurrs.

// Then render the output to the HTML page.


let count = [0,0,0,0,0,0,0,0,0,0,0]

function rollDice(){
 return Math.floor(Math.random() * 6) + 1;
}

function dice(){

    let sum = 0
    sum = rollDice() + rollDice()
    return sum 
}

for(let i = 0; i < 1000; i++) {
   let result = 0
   result = dice()
   count[result - 2] = count [result - 2] + 1
   
}
 for(let a = 0; a < count.length; a++){
     let div = document.createElement("div")
     div.style.backgroundColor = "grey"
     div.style.width = count[a] + "px"
     div.style.outline = " solid black 1px"
     div.innerHTML = a + 2 + ": " + count[a] 
     document.body.appendChild(div);
 }









