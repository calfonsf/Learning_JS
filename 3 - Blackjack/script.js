const new_game = document.querySelector(".btn1");
const draw_card = document.querySelector(".btn2");
const cards_label = document.querySelector(".cards")
const sum_label = document.querySelector(".sum")

new_game.onclick = start;
draw_card.onclick = draw;

let cards = []

function start()
{
    cards = []

    let card = Math.round(Math.random() * 10 + 1)
    let card2 = Math.round(Math.random() * 10 + 1)

    cards.push(card)
    cards.push(card2)

    cards_label.innerHTML = `Cards: ${card}, ${card2}` 
    sum_label.innerHTML = `Sum: ${card + card2}`
}

function draw()
{
    let new_card = Math.round(Math.random() * 10 + 1)
    cards_label.innerHTML += `, ${new_card}` 
    cards.push(new_card)
    let sum = cards.reduce((sum, a) => sum + a, 0);
    sum_label.innerHTML = `Sum: ${sum}`

    if (sum > 21)
    {
        alert("out of range")
    }
    else if(sum === 21)
    {
        alert("Blackjack")
    }
}
