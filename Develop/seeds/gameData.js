const sequelize = require("../config/connection.js");
const { Game } = require("../models");

const gameData = [
    {
        userId: 1,
        gameName: "Doom Eternal",
        gameSummary: "As the DOOM Slayer, you return to find Earth has suffered a demonic invasion. Raze Hell and discover the Slayer’s origins and his enduring mission to rip and tear…until it is done. Experience the ultimate combination of speed and power as you battle your way across dimensions with the next leap in push-forward, first-person combat. Slayer Threat Level at Maximum Armed with a shoulder-mounted flamethrower, retractable wrist-mounted blade, upgraded guns and mods, and abilities like the Double Dash, you're faster, stronger, and more versatile than ever. Unholy Trinity Take what you need from your enemies: Glory kill for extra health, incinerate for armor, and chainsaw demons to stock up on ammo to become the ultimate demon-slayer. BATTLEMODE BATTLEMODE is the new 2 versus 1 multiplayer experience built from the ground up at id Software. A fully-armed DOOM Slayer faces off against two player-controlled demons, duking it in a best-of-five round match of intense first-person combat. BATTLEMODE launches with 6 handcrafted maps and 5 playable demons – the Marauder, Archvile, Revenant, Mancubus and Pain Elemental.",
        gameArtwork: "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
        gamePlatform: "Xbox One",
        gameGenre: "Action",
        gameTag: "Singleplayer",
        gameESRB: "Mature",
        gameReleased: "2020-03-20",
        gameRating: 88,
        gamePublisher: "Bethesda Softworks",
        gameDeveloper: "Bethesda Softworks",
        gameWebsite:"https://bethesda.net/en/game/doom",
        gameStatus: 1,
    },
    {
        userId: 1,
        gameName: "Returnal",
        gameSummary: "Returnal combines side-scrolling action with roguelike gameplay into a third-person shooter where players fight to survive a hostile planet that changes with every death. Players can switch instinctively between firing modes by using a single adaptive trigger and can get right back into the action after dying. PS5's immersive 3D audio brings the alien world to life around the player, helping players navigate the intense positional combat.",
        gameArtwork: "https://media.rawg.io/media/games/9ea/9ea75a5e0f437d7a982147014899e0ea.jpg",
        gamePlatform: "PlayStation 5",
        gameGenre: "Action",
        gameTag: "Sci-fi",
        gameESRB: "Teen",
        gameReleased: "2021-04-30",
        gameRating: 86,
        gamePublisher: "Sony Interactive Entertainment",
        gameDeveloper: "Housemarque",
        gameWebsite:"https://housemarque.com/games/returnal",
        gameStatus: 2,
    },
    {
        userId: 1,
        gameName: "Control",
        gameSummary: "Control is a surrealist low-fantasy game about a secret organization that deals with the paranormal activities. ###Plot The game follows Jesse Faden, a woman with superhuman powers. She works with the Federal Bureau of Control, a secret governmental organization that deals with the paranormal phenomena, often by annihilating it as a threat. The Bureau headquarters, known as the Oldest House, is taken over by a supernatural power called the Hiss. The director of Bureau, Zachariah Trench, is killed, and Faden is unexpectedly promoted to his place, while the ghost of her predecessor haunts her. She has to travel the endless corridors of the Oldest House and defeat the Hiss using magical Director's Pistol. ###Setting Most of the game takes place in the FBC building, which is a high-rise on Manhattan. The Oldest House is a non-euclidian space, which is larger on the inside. Its corridors and rooms change shape and positions depending on the rituals its inhabitants perform. The Oldest House stores the magical artifacts called Altered Items. ###Gameplay The player controls Faden from the third person view. To defeat her enemies, she uses various superhuman powers, such as telekinesis or levitation. She also wields the shape-shifting Director's Pistol and the magic artifacts she can obtain as a reward for completing quests. Jesse's skills grow throughout the game. There is no multiplayer mode.",
        gameArtwork: "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg",
        gamePlatform: "Xbox Series S/X",
        gameGenre: "Action",
        gameTag: "Singleplayer",
        gameESRB: "Mature",
        gameReleased: "2019-08-27",
        gameRating: 84,
        gamePublisher: "505 Games",
        gameDeveloper: "505 Games",
        gameWebsite: "https://controlgame.com/",
        gameStatus: 3,
    }
]

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
