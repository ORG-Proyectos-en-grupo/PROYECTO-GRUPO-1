let pokemons = [
    { name: 'Bulbasaur', id: '001', type: 'Grass', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png', description: 'Es un Pokémon de tipo hierba/veneno. Tiene un bulbo en su espalda que le permite fotosintetizar.' },
    { name: 'Ivysaur', id: '002', type: 'Grass', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png', description: 'Es un Pokémon de tipo hierba/veneno. Se caracteriza por tener un bulbo en su espalda que le permite fotosintetizar.' },
    { name: 'Venusaur', id: '003', type: 'Grass', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png', description: 'Es un Pokémon de tipo hierba/veneno. Es muy fuerte y tiene un gran poder de ataque.' },
    { name: 'Charmander', id: '004', type: 'Fire', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png', description: 'Es un Pokémon de tipo fuego. Es muy valiente y se caracteriza por tener una llama en la punta de su cola.' },
    { name: 'Charmeleon', id: '005', type: 'Fire', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png', description: 'Es un Pokémon de tipo fuego. Es muy veloz y fuerte y se caracteriza por tener una llama en la punta de su cola.' },
    { name: 'Charizard', id: '006', type: 'Fire', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png', description: 'Es un Pokémon de tipo fuego/volador. Es muy poderoso y se caracteriza por tener alas muy grandes.' },
    { name: 'Squirtle', id: '007', type: 'Water', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png', description: 'Es un Pokémon de tipo agua. Se caracteriza por tener un caparazón en su espalda.' },
    { name: 'Wartortle', id: '008', type: 'Water', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png', description: 'Es un Pokémon de tipo agua. Su caparazón es más grande y tiene orejas peludas.' },
    { name: 'Blastoise', id: '009', type: 'Water', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png', description: 'Es un Pokémon de tipo agua. Tiene cañones de agua en su caparazón.' },
    { name: 'Caterpie', id: '010', type: 'Bug', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/010.png', description: 'Es un Pokémon de tipo bicho. Se caracteriza por ser pequeño y verde.' },
    { name: 'Metapod', id: '011', type: 'Bug', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/011.png', description: 'Es un Pokémon de tipo bicho. Tiene un caparazón duro y está en proceso de evolución.' },
    { name: 'Butterfree', id: '012', type: 'Bug/Flying', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/012.png', description: 'Es un Pokémon de tipo bicho/volador. Es una mariposa que puede volar.' },
    { name: 'Weedle', id: '013', type: 'Bug/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/013.png', description: 'Es un Pokémon de tipo bicho/veneno. Tiene un aguijón en su cabeza.' },
    { name: 'Kakuna', id: '014', type: 'Bug/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/014.png', description: 'Es un Pokémon de tipo bicho/veneno. Está en proceso de evolución.' },
    { name: 'Beedrill', id: '015', type: 'Bug/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/015.png', description: 'Es un Pokémon de tipo bicho/veneno. Es muy veloz y tiene aguijones en sus brazos.' },
    { name: 'Pidgey', id: '016', type: 'Normal/Flying', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/016.png', description: 'Es un Pokémon de tipo normal/volador. Es una pequeña ave.' },
    { name: 'Pidgeotto', id: '017', type: 'Normal/Flying', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/017.png', description: 'Es un Pokémon de tipo normal/volador. Es más grande y fuerte que Pidgey.' },
    { name: 'Pidgeot', id: '018', type: 'Normal/Flying', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/018.png', description: 'Es un Pokémon de tipo normal/volador. Es muy rápido y tiene grandes alas.' },
    { name: 'Rattata', id: '019', type: 'Normal', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/019.png', description: 'Es un Pokémon de tipo normal. Es un pequeño roedor.' },
    { name: 'Raticate', id: '020', type: 'Normal', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/020.png', description: 'Es un Pokémon de tipo normal. Es un roedor más grande y fuerte.' },
    { name: 'Spearow', id: '021', type: 'Normal/Flying', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/021.png', description: 'Es un Pokémon de tipo normal/volador. Es un ave pequeña y agresiva.' },
    { name: 'Fearow', id: '022', type: 'Normal/Flying', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/022.png', description: 'Es un Pokémon de tipo normal/volador. Es un ave grande y rápida.' },
    { name: 'Ekans', id: '023', type: 'Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/023.png', description: 'Es un Pokémon de tipo veneno. Se caracteriza por ser una serpiente.' },
    { name: 'Arbok', id: '024', type: 'Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/024.png', description: 'Es un Pokémon de tipo veneno. Es una serpiente más grande y peligrosa.' },
    { name: 'Pikachu', id: '025', type: 'Electric', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png', description: 'Es un Pokémon de tipo eléctrico. Es muy conocido y puede generar electricidad.' },
    { name: 'Raichu', id: '026', type: 'Electric', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png', description: 'Es un Pokémon de tipo eléctrico. Es la evolución de Pikachu y puede generar más electricidad.' },
    { name: 'Sandshrew', id: '027', type: 'Ground', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/027.png', description: 'Es un Pokémon de tipo tierra. Tiene una piel dura y vive en el desierto.' },
    { name: 'Sandslash', id: '028', type: 'Ground', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/028.png', description: 'Es un Pokémon de tipo tierra. Tiene garras afiladas y es muy veloz.' },
    { name: 'Nidoran♀', id: '029', type: 'Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/029.png', description: 'Es un Pokémon de tipo veneno. Tiene orejas grandes y es muy territorial.' },
    { name: 'Nidorina', id: '030', type: 'Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/030.png', description: 'Es un Pokémon de tipo veneno. Es la evolución de Nidoran♀ y es más fuerte.' },
    { name: 'Nidoqueen', id: '031', type: 'Poison/Ground', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/031.png', description: 'Es un Pokémon de tipo veneno/tierra. Es muy fuerte y protectora.' },
    { name: 'Nidoran♂', id: '032', type: 'Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/032.png', description: 'Es un Pokémon de tipo veneno. Tiene un cuerno venenoso y es muy territorial.' },
    { name: 'Nidorino', id: '033', type: 'Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/033.png', description: 'Es un Pokémon de tipo veneno. Es la evolución de Nidoran♂ y es más fuerte.' },
    { name: 'Nidoking', id: '034', type: 'Poison/Ground', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/034.png', description: 'Es un Pokémon de tipo veneno/tierra. Es muy fuerte y agresivo.' },
    { name: 'Clefairy', id: '035', type: 'Fairy', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/035.png', description: 'Es un Pokémon de tipo hada. Es muy lindo y tiene poderes mágicos.' },
    { name: 'Clefable', id: '036', type: 'Fairy', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/036.png', description: 'Es un Pokémon de tipo hada. Es la evolución de Clefairy y tiene más poderes mágicos.' }
];


const pokemonList = document.getElementById('pokemonList');
const sortPokemons = document.getElementById('sortPokemons');
const themeToggle = document.getElementById('themeToggle');
const modalPokemon = document.getElementById('modalPokemon');
const modalName = document.getElementById('modalName');
const modalId = document.getElementById('modalId');
const modalImage = document.getElementById('modalImage');
const modalType = document.getElementById('modalType');
const modalDescription = document.getElementById('modalDescription');
const closeModalPokemon = document.getElementById('closeModalPokemon');

displayPokemons(pokemons); // Mostrar los pokemons al iniciar la página

function displayPokemons(pokemons) {
    pokemonList.innerHTML = '';

    pokemons.forEach((pokemon, index) => {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');
        pokemonList.appendChild(pokemonCard);
        pokemonCard.setAttribute('data-name', pokemon.name);

        pokemonList.appendChild(pokemonCard);
        pokemonCard.setAttribute('data-name', pokemon.name);



        pokemonCard.innerHTML = `
            <p>${pokemon.id}</p>
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
        `;

        if (!pokemon.description) {
            console.error(`El pokemon ${pokemon.name} no tiene descripción.`);
        }
        pokemonCard.addEventListener('click', () => showModal(pokemon));

        pokemonList.appendChild(pokemonCard);
pokemonList.appendChild(pokemonCard);
    
pokemonList.appendChild(pokemonCard);
    
=======

    });    
}

function showModal(pokemon) {
    if (!pokemon.name || !pokemon.id) {
        console.error(`El pokemon ${pokemon.name} no tiene nombre o id.`);
        return;
    }
    if (pokemon.type === "Grass"){
        modalPokemon.classList.add("grass-mode");
    } else if (pokemon.type === "Fire"){
        modalPokemon.classList.add("fire-mode");
    } else if (pokemon.type === "Water"){
        modalPokemon.classList.add("water-mode");
    } else if (pokemon.type === "Bug"){
        modalPokemon.classList.add("bug-mode");
    } else if (pokemon.type === "Bug/Flying"){
        modalPokemon.classList.add("bug_flying-mode");
    } else if (pokemon.type === "Bug/Poison"){
        modalPokemon.classList.add("bug_poison-mode");
    } else if (pokemon.type === "Normal"){
        modalPokemon.classList.add("normal-mode");
    } else if (pokemon.type === "Normal/Flying"){
        modalPokemon.classList.add("normal_flying-mode");
    } else if (pokemon.type === "Poison"){
        modalPokemon.classList.add("poison-mode");
    } else if (pokemon.type === "Poison/Ground"){
        modalPokemon.classList.add("poison_ground-mode");
    } else if (pokemon.type === "Electric"){
        modalPokemon.classList.add("electric-mode");
    } else if (pokemon.type === "Ground"){
        modalPokemon.classList.add("ground-mode");
    } else if (pokemon.type === "Fairy"){
        modalPokemon.classList.add("fairy-mode");
    }
    modalName.textContent = pokemon.name;
    modalId.textContent = pokemon.id;
    modalImage.src = pokemon.image;
    modalType.textContent = pokemon.type;
    modalDescription.textContent = `Descripción: ${pokemon.description || 'No disponible'}`;
    //modalDescription.textContent = `Descripción: ${pokemon.description || 'No disponible'}`;
    modalPokemon.classList.remove('hidden');
}

closeModalPokemon.addEventListener('click', () => {
    modalPokemon.classList.add("hidden");
    modalPokemon.classList.remove("grass-mode", "fire-mode", "water-mode", "bug-mode", "bug_flying-mode", "poison-mode", "bug_poison-mode", "normal-mode",
        "normal_flying-mode", "poison_ground-mode", "electric-mode", "ground-mode", "fairy-mode");
});

sortPokemons.addEventListener('change', (e) => {
    const sortBy = e.target.value;
    const sortedPokemons = [...pokemons].sort((a, b) => {
        if (sortBy === 'nameASC') {
            return b.name.localeCompare(a.name);
        } else if (sortBy === 'nameDESC') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'idDESC') {
            return b.id - a.id;
        } else if (sortBy === 'idASC') {
            return a.id - b.id;
        } else if (sortBy === 'type') {
            return a.type.localeCompare(b.type);
        }
    });
    displayPokemons(sortedPokemons);
});
// Cambiar entre modo oscuro y claro
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('other-mode');
    document.querySelector('nav').classList.toggle('other-mode');
    document.querySelector('aside').classList.toggle('other-mode');

    document.querySelectorAll('button').forEach(button => {
        button.classList.toggle('other-mode');
    });
    
    document.querySelectorAll('.pokemon-card').forEach(card => {
        card.classList.toggle('other-mode');
    });
    
    themeToggle.textContent = document.body.classList.contains('other-mode') 
        ? 'Cambiar a modo oscuro' 
        : 'Cambiar a modo claro';
});










function savePokemons() {
    localStorage.setItem('pokemon', JSON.stringify(pokemons));
}

// Cargar películas desde localStorage al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    const storedPokemons = JSON.parse(localStorage.getItem('pokemons'));
    if (storedPokemons) {
        pokemons_store = storedPokemons;
    }
    displayPokemons(pokemons_store); // Mostrar las películas guardadas
    displayPokemons(pokemons);
});

document.getElementById('nameFilter').addEventListener('input', function (e) {
    const searchValue = e.target.value.toLowerCase(); // lo que escribe el pibe en el buscador
    const pokemonCard = document.querySelectorAll('.pokemon-card');
    
    pokemonCard.forEach(card => {
        const pokemonName = card.getAttribute('data-name').toLowerCase(); // nombre del pokemon
        if (pokemonName.includes(searchValue)) {
            card.style.display = ""; // Muestra la tarjeta
        } else {
            card.style.display = 'none'; // se oculta la targeta
        }

    })
})


document.getElementById('nameFilter').addEventListener('input', function (e) {
    const searchValue = e.target.value.toLowerCase(); // lo que escribe el pibe en el buscador
    const pokemonCard = document.querySelectorAll('.pokemon-card');
    
    pokemonCard.forEach(card => {
        const pokemonName = card.getAttribute('data-name').toLowerCase(); // nombre del pokemon
        if (pokemonName.includes(searchValue)) {
            card.style.display = ""; // Muestra la tarjeta
        } else {
            card.style.display = 'none'; // se oculta la targeta
        }

    })
})

const btnNosotros = document.getElementById('btnNosotros');
const desarrolladores = document.getElementById('desarrolladores');

btnNosotros.addEventListener('click', () => {
    if (desarrolladores.style.display === 'none' || desarrolladores.style.display === '') {
        desarrolladores.style.display = 'block'; // Mostrar la sección
    } else {
        desarrolladores.style.display = 'none'; // Ocultar la sección
    }
});

document.getElementById("perfil").addEventListener("click", (event) => {
    event.stopPropagation(); // Evita que el clic en el perfil cierre el menú
    const dropdown = document.getElementById("profileDropdown");
    dropdown.classList.toggle("hidden"); // Alterna la visibilidad
});

// Cierra el menú desplegable al hacer clic fuera de él
window.addEventListener("click", (event) => {
    const dropdown = document.getElementById("profileDropdown");
    if (!event.target.closest("#perfil") && !dropdown.contains(event.target)) {
        dropdown.classList.add("hidden");
    }
});
document.getElementById("aboutUsButton").addEventListener("click", function() {
    const aboutUsSection = document.getElementById("aboutUs");
    aboutUsSection.scrollIntoView({ behavior: "smooth" });
});

