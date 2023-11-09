let pokemon = "bulbasaur"


fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
.then(response => response.json())
.then(res => {

    console.log(res)

    url = res.sprites.front_default

    const name = document.createElement('h2');
    const sprite = document.createElement('img');
    
    name.innerText = `${res.id} ${res.name}`
    sprite.src = url;
    sprite.style.width = "200px"
    sprite.style.height = "200px"

    document.querySelector('.Pokedex').append(name)
    document.querySelector('.Pokedex').append(sprite)



})