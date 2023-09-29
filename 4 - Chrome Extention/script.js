const save = document.querySelector("#input-btn");
const item = document.querySelector("#input-el");
const list = document.querySelector("#list");
const drop = document.querySelector("#drop-btn");

save.onclick = SaveLead;
drop.onclick = Drop;


let leads = JSON.parse(localStorage.getItem("leads"))

if (leads === null){
    leads = [];
}

console.log(leads)

function SaveLead(){

    if (item.value.length >= 1){
        leads.push(item.value);
        localStorage.setItem("leads", JSON.stringify(leads));
        Render();
    }
}

function Render(){

    list.innerHTML = "";

    for (let lead of leads){ 
        
        let li = document.createElement("li");
        li.innerHTML=lead;
        list.appendChild(li); 
    }
}
    
function Drop(){
    leads = [];
    localStorage.clear();
    Render();
}

Render()