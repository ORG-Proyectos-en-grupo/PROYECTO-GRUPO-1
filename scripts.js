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
    { name: 'Clefable', id: '036', type: 'Fairy', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/036.png', description: 'Es un Pokémon de tipo hada. Es la evolución de Clefairy y tiene más poderes mágicos.' },
    { name: 'Vulpix', id: '037', type: 'Fire', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/037.png', description: 'Es un Pokémon de tipo fuego. Tiene 6 colas y es muy veloz.' },
    { name: 'Ninetales', id: '038', type: 'Fire', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/038.png', description: 'Es un Pokémon de tipo fuego. Es la evolución de Vulpix y tiene 9 colas.' },
    { name: 'Jigglypuff', id: '039', type: 'Normal/Fairy', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/039.png', description: 'Es un Pokémon de tipo normal/hada. Tiene una voz muy fuerte y puede dormir a sus oponentes.' },
    { name: 'Wigglytuff', id: '040', type: 'Normal/Fairy', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/040.png', description: 'Es un Pokémon de tipo normal/hada. Es la evolución de Jigglypuff y tiene una voz más fuerte.' },
    { name: 'Zubat', id: '041', type: 'Poison/Flying', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/041.png', description: 'Es un Pokémon de tipo veneno/volador. Tiene alas y puede volar.' },
    { name: 'Golbat', id: '042', type: 'Poison/Flying', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/042.png', description: 'Es un Pokémon de tipo veneno/volador. Es la evolución de Zubat y tiene alas más fuertes.' },
    { name: 'Oddish', id: '043', type: 'Grass/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/043.png', description: 'Es un Pokémon de tipo hierba/veneno. Tiene una planta en la cabeza y puede lanzar semillas.' },
    { name: 'Gloom', id: '044', type: 'Grass/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/044.png', description: 'Es un Pokémon de tipo hierba/veneno. Es la evolución de Oddish y tiene una planta más grande.' },
    { name: 'Vileplume', id: '045', type: 'Grass/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/045.png', description: 'Es un Pokémon de tipo hierba/veneno. Es la evolución de Gloom y tiene una planta gigante.' },
    { name: 'Paras', id: '046', type: 'Bug/Grass', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/046.png', description: 'Es un Pokémon de tipo insecto/hierba. Tiene un hongo en la cabeza y puede lanzar semillas.' },
    { name: 'Parasect', id: '047', type: 'Bug/Grass', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/047.png', description: 'Es un Pokémon de tipo insecto/hierba. Es la evolución de Paras y tiene un hongo más grande.' },
    { name: 'Venonat', id: '048', type: 'Bug/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/048.png', description: 'Es un Pokémon de tipo insecto/veneno. Tiene ojos grandes y puede lanzar veneno.' },
    { name: 'Venomoth', id: '049', type: 'Bug/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/049.png', description: 'Es un Pokémon de tipo insecto/veneno. Es la evolución de Venonat y tiene alas.' },
    { name: 'Diglett', id: '050', type: 'Ground', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/050.png', description: 'Es un Pokémon de tipo tierra. Tiene patas pequeñas y puede cavar.' },
    { name: 'Dugtrio', id: '051', type: 'Ground', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/051.png', description: 'Es un Pokémon de tipo tierra. Es la evolución de Diglett y tiene patas más largas.' },
    { name: 'Meowth', id: '052', type: 'Normal', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/052.png', description: 'Es un Pokémon de tipo normal. Tiene un collar y puede robar.' },
    { name: 'Persian', id: '053', type: 'Normal', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/053.png', description: 'Es un Pokémon de tipo normal. Es la evolución de Meowth y tiene un collar más grande.' },
    { name: 'Psyduck', id: '054', type: 'Water', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/054.png', description: 'Es un Pokémon de tipo agua. Tiene una cola y puede nadar.' },
    { name: 'Golduck', id: '055', type: 'Water', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/055.png', description: 'Es un Pokémon de tipo agua. Es la evolución de Psyduck y tiene una cola más larga.' },
    { name: 'Mankey', id: '056', type: 'Fighting', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/056.png', description: 'Es un Pokémon de tipo lucha. Tiene una cola y puede golpear.' },
    { name: 'Primeape', id: '057', type: 'Fighting', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/057.png', description: 'Es un Pokémon de tipo lucha. Es la evolución de Mankey y tiene una cola más fuerte.' },
    { name: 'Growlithe', id: '058', type: 'Fire', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/058.png', description: 'Es un Pokémon de tipo fuego. Tiene un pelaje amarillo y puede correr.' },
    { name: 'Arcanine', id: '059', type: 'Fire', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/059.png', description: 'Es un Pokémon de tipo fuego. Es la evolución de Growlithe y tiene un pelaje más brillante.' },
    { name: 'Poliwag', id: '060', type: 'Water', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/060.png', description: 'Es un Pokémon de tipo agua. Tiene una cola y puede nadar.' },
    { name: 'Poliwhirl', id: '061', type: 'Water', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/061.png', description: 'Es un Pokémon de tipo agua. Es la evolución de Poliwag y tiene una cola más larga.' },
    { name: 'Poliwrath', id: '062', type: 'Water/Fighting', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/062.png', description: 'Es un Pokémon de tipo agua/lucha. Es la evolución de Poliwhirl y tiene una cola más fuerte.' },
    { name: 'Abra', id: '063', type: 'Psychic', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/063.png', description: 'Es un Pokémon de tipo psíquico. Tiene una cola y puede teletransportarse.' },
    { name: 'Kadabra', id: '064', type: 'Psychic', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/064.png', description: 'Es un Pokémon de tipo psíquico. Es la evolución de Abra y tiene una cola más larga.' },
    { name: 'Alakazam', id: '065', type: 'Psychic', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/065.png', description: 'Es un Pokémon de tipo psíquico. Es la evolución de Kadabra y tiene una cola más larga.' },
    { name: 'Machop', id: '066', type: 'Fighting', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/066.png', description: 'Es un Pokémon de tipo lucha. Tiene una cola y puede golpear.' },
    { name: 'Machoke', id: '067', type: 'Fighting', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/067.png', description: 'Es un Pokémon de tipo lucha. Es la evolución de Machop y tiene una cola más fuerte.' },
    { name: 'Machamp', id: '068', type: 'Fighting', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/068.png', description: 'Es un Pokémon de tipo lucha. Es la evolución de Machoke y tiene una cola más fuerte.' },
    { name: 'Bellsprout', id: '069', type: 'Grass/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/069.png', description: 'Es un Pokémon de tipo hierba/veneno. Tiene una planta en la cabeza y puede lanzar semillas.' },
    { name: 'Weepinbell', id: '070', type: 'Grass/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/070.png', description: 'Es un Pokémon de tipo hierba/veneno. Es la evolución de Bellsprout y tiene una planta más grande.' },
    { name: 'Victreebel', id: '071', type: 'Grass/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/071.png', description: 'Es un Pokémon de tipo hierba/veneno. Es la evolución de Weepinbell y tiene una planta gigante.' },
    { name: 'Tentacool', id: '072', type: 'Water/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/072.png', description: 'Es un Pokémon de tipo agua/veneno. Tiene una cola y puede lanzar semillas.' },
    { name: 'Tentacruel', id: '073', type: 'Water/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/073.png', description: 'Es un Pokémon de tipo agua/veneno. Es la evolución de Tentacool y tiene una cola más larga.' },
    { name: 'Geodude', id: '074', type: 'Rock/Ground', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/074.png', description: 'Es un Pokémon de tipo roca/tierra. Tiene una cola y puede cavar.' },
    { name: 'Graveler', id: '075', type: 'Rock/Ground', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/075.png', description: 'Es un Pokémon de tipo roca/tierra. Es la evolución de Geodude y tiene una cola más larga.' },
    { name: 'Golem', id: '076', type: 'Rock/Ground', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/076.png', description: 'Es un Pokémon de tipo roca/tierra. Es la evolución de Graveler y tiene una cola más fuerte.' },
    { name: 'Ponyta', id: '077', type: 'Fire', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/077.png', description: 'Es un Pokémon de tipo fuego. Tiene un pelaje amarillo y puede correr.' },
    { name: 'Rapidash', id: '078', type: 'Fire', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/078.png', description: 'Es un Pokémon de tipo fuego. Es la evolución de Ponyta y tiene un pelaje más brillante.' },
    { name: 'Slowpoke', id: '079', type: 'Water', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/079.png', description: 'Es un Pokémon de tipo agua. Tiene una cola y puede nadar.' },
    { name: 'Slowking', id: '080', type: 'Water', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/080.png', description: 'Es un Pokémon de tipo agua. Es la evolución de Slowpoke y tiene una cola más larga.' },
    { name: 'Magnemite', id: '081', type: 'Electric/Steel', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/081.png', description: 'Es un Pokémon de tipo eléctrico/acero. Tiene una cola y puede lanzar magnéticos.' },
    { name: 'Magneton', id: '082', type: 'Electric/Steel', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/082.png', description: 'Es un Pokémon de tipo eléctrico/acero. Es la evolución de Magnemite y tiene una cola más fuerte.' },
    { name: 'Farfetchd', id: '083', type: 'Normal/Flying', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/083.png', description: 'Es un Pokémon de tipo normal/volador. Tiene una cola y puede volar.' },
    { name: 'Doduo', id: '084', type: 'Normal/Flying', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/084.png', description: 'Es un Pokémon de tipo normal/volador. Tiene dos cabezas y puede volar.' },
    { name: 'Dodrio', id: '085', type: 'Normal/Flying', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/085.png', description: 'Es un Pokémon de tipo normal/volador. Es la evolución de Doduo y tiene dos cabezas más fuertes.' },
    { name: 'Seel', id: '086', type: 'Water', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/086.png', description: 'Es un Pokémon de tipo agua. Tiene una cola y puede nadar.' },
    { name: 'Dewgong', id: '087', type: 'Water/Ice', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/087.png', description: 'Es un Pokémon de tipo agua/hielo. Es la evolución de Seel y tiene una cola más larga.' },
    { name: 'Grimer', id: '088', type: 'Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/088.png', description: 'Es un Pokémon de tipo veneno. Tiene una cola y puede lanzar veneno.' },
    { name: 'Muk', id: '089', type: 'Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/089.png', description: 'Es un Pokémon de tipo veneno. Es la evolución de Grimer y tiene una cola más fuerte.' },
    { name: 'Shellder', id: '090', type: 'Water', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/090.png', description: 'Es un Pokémon de tipo agua. Tiene una cola y puede nadar.' },
    { name: 'Cloyster', id: '091', type: 'Water/Ice', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/091.png', description: 'Es un Pokémon de tipo agua/hielo. Es la evolución de Shellder y tiene una cola más larga.' },
    { name: 'Gastly', id: '092', type: 'Ghost/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/092.png', description: 'Es un Pokémon de tipo fantasma/veneno. Tiene una cola y puede lanzar veneno.' },
    { name: 'Haunter', id: '093', type: 'Ghost/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/093.png', description: 'Es un Pokémon de tipo fantasma/veneno. Es la evolución de Gastly y tiene una cola más larga.' },
    { name: 'Gengar', id: '094', type: 'Ghost/Poison', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/094.png', description: 'Es un Pokémon de tipo fantasma/veneno. Es la evolución de Haunter y tiene una cola más fuerte.' },
    { name: 'Onix', id: '095', type: 'Rock/Ground', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/095.png', description: 'Es un Pokémon de tipo roca/tierra. Tiene una cola y puede lanzar rocas.' },
    { name: 'Drowzee', id: '096', type: 'Psychic', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/096.png', description: 'Es un Pokémon de tipo psíquico. Tiene una cola y puede lanzar ondas mentales.' },
    { name: 'Hypno', id: '097', type: 'Psychic', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/097.png', description: 'Es un Pokémon de tipo psíquico. Es la evolución de Drowzee y tiene una cola más fuerte.' },
    { name: 'Krabby', id: '098', type: 'Water', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/098.png', description: 'Es un Pokémon de tipo agua. Tiene una cola y puede nadar.' },
    { name: 'Kingler', id: '099', type: 'Water', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/099.png', description: 'Es un Pokémon de tipo agua. Es la evolución de Krabby y tiene una cola más larga.' },
    { name: 'Voltorb', id: '100', type: 'Electric', image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/100.png', description: 'Es un Pokémon de tipo eléctrico. Tiene una cola y puede lanzar descargas eléctricas.' },
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

displayPokemons(pokemons); // Mostrar las pokemons al iniciar la página

function displayPokemons(pokemons) {
    pokemonList.innerHTML = '';

    pokemons.forEach((pokemon, index) => {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');
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
    }  else if (pokemon.type === "Bug/Flying"){
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


function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('main > section');
    secciones.forEach(seccion => {
        seccion.classList.remove('visible');
        seccion.classList.add('hidden');
    });

    const seccionActiva = document.getElementById(seccionId);
    if (seccionActiva) {
        seccionActiva.classList.remove('hidden');
        seccionActiva.classList.add('visible');
    }
}

function mostrarSeccion(seccionId) {

    const secciones = document.querySelectorAll('main > section');
    secciones.forEach(seccion => {
        seccion.classList.remove('visible');
        seccion.classList.add('hidden');
    });

    const seccionActiva = document.getElementById(seccionId);
    seccionActiva.classList.remove('hidden');
    seccionActiva.classList.add('visible');
}