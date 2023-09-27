// program to count passangers

let counter = 0;
let firsEntry = false;

function increment(){
    counter ++;
    document.getElementById("count_label").innerText = counter;
}

function save(){

    if (!firsEntry)
    {
        document.getElementById("Entries").innerHTML += counter;
        firsEntry = true;
    }
    else
    {
        document.getElementById("Entries").innerHTML += " - " + counter;
    }
    document.getElementById("count_label").innerHTML = 0;
    counter = 0;

}