
const gameData = JSON.parse( document.querySelector('.game-details').dataset.game);

const gameName = gameData.name;
const gameSummary = gameData.description_raw;
const gameReleased = gameData.released;
const gameArtwork = gameData.background_image;
const gameTag = gameData.tags?.[0]?.name;
const gameGenre = gameData.genres?.[0]?.name;
const gameRating = gameData.metacritic;
const gamePlatform = gameData.platforms?.[0]?.platform?.name;
const gameDeveloper = gameData.developers?.[0]?.name;
const gamePublisher = gameData.publishers?.[0]?.name;
const gameESRB = gameData.esrb_rating?.name;
const gameWebsite = gameData.website;

const createGame = async (event) => {
    event.stopPropagation();

    const gameStatus = event.target.getAttribute("data-gamestatus");

    const body = JSON.stringify( {
      gameName,
      gameSummary,
      gameReleased,
      gameArtwork,
      gameTag,
      gameGenre,
      gameRating,
      gamePlatform,
      gameDeveloper,
      gamePublisher,
      gameESRB,
      gameWebsite,
      gameStatus
    } );

    const response = await fetch("/api/game/", {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        console.log("Game Added!")
        document.location.reload();
    } else {
        alert("Failed to add game to library.");
    }
}

document.querySelector(".new-game-in-progress").addEventListener("click", createGame);
document.querySelector(".new-game-completed").addEventListener("click", createGame);
document.querySelector(".new-game-not-started").addEventListener("click", createGame);
