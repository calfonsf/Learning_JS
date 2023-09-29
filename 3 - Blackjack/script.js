const new_game = document.querySelector(".btn1");
const draw_card = document.querySelector(".btn2");
const stay = document.querySelector(".btn3");
const cards_label = document.querySelector(".cards");
const dcards_label = document.querySelector(".dcards");
const sum_label = document.querySelector(".sum");
const message = document.querySelector(".message");


new_game.onclick = start;
draw_card.onclick = draw;
stay.onclick = Stay;

let cards = [];
let cash = document.querySelector(".cash")
let sum = 0;

function start()
{
    // Initial Preparation
    draw_card.style.display = "inline";
    stay.style.display = "inline";
    message.innerHTML = "" ;
    cards = [];

    // drawig 2 cards
    let card = Math.round(Math.random() * 9 + 2);
    let card2 = Math.round(Math.random() * 9 + 2);
    sum = card + card2;

    cards.push(card);
    cards.push(card2);


    cards_label.innerHTML = `Cards: ${card}, ${card2}`;
    sum_label.innerHTML = `Sum: ${sum}`;
}


function draw()
{
    let new_card = Math.round(Math.random() * 9 + 2);
    cards_label.innerHTML += `, ${new_card}`;
    cards.push(new_card);
    
    sum = cards.reduce((sum, a) => sum + a, 0);
    sum_label.innerHTML = `Sum: ${sum}`;

    if (sum > 21)
    {
        message.innerHTML = "OUT OF RANGE";
        draw_card.style.display = "none";
        cash.innerHTML = Number(cash.innerHTML) - 10;
    }
    else if(sum === 21)
    {
        message.innerHTML = "BLACKJACK";
        draw_card.style.display = "none";
        cash.innerHTML = Number(cash.innerHTML) + 10;
    }
}

function Stay(){

    let card = Math.round(Math.random() * 9 + 2);
    let card2 = Math.round(Math.random() * 9 + 2);

    dcards_label.style.display = "inline";
    dcards_label.innerHTML = `Dealer Cards: ${card}, ${card2}`

    if (card + card2 > sum){
        message.innerHTML = "Losed";
        draw_card.style.display = "none";
        cash.innerHTML = Number(cash.innerHTML) - 10;
    }
    else if (card + card2 < sum)
    {
        message.innerHTML = "winned";
        draw_card.style.display = "none";
        cash.innerHTML = Number(cash.innerHTML) + 10;
    }
}