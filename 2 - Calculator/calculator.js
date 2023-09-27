const button = document.querySelector('.btn')
const buttons = document.querySelector('.numbers')
const screen = document.querySelector('.screen-lb-1')
const screen2 = document.querySelector('.screen-lb-2')

buttons.addEventListener("click", event => {

    if (event.target.tagName === "BUTTON"){

        num = Number(event.target.innerHTML)

        if (screen.innerHTML === "0"){
            screen.innerHTML = num
        }
        else{
            screen.innerHTML += num; 
        }
    }
})

function add(){
   screen2.innerHTML += screen.innerHTML + " + ";
   screen.innerHTML = 0;   
}

function sub(){
    screen2.innerHTML += screen.innerHTML + " - ";
    screen.innerHTML = 0;   
}

function div(){
    screen2.innerHTML += screen.innerHTML + " / ";
    screen.innerHTML = 0;   
 }

function mul(){
    screen2.innerHTML += screen.innerHTML + " * ";
    screen.innerHTML = 0;   
}

function solve(){
    screen.innerHTML = eval(screen2.innerHTML + screen.innerHTML)
    screen2.innerHTML = ""
}

function restart(){
    screen.innerHTML = 0
    screen2.innerHTML = ""
}

function del(){

    if (screen.innerHTML.length > 1)
    {
        screen.innerHTML = screen.innerHTML.slice(0,-1)
    }
    else{
        screen.innerHTML = "0"
    } 
}