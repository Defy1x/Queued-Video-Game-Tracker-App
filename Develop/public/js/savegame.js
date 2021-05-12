const {
  name: gameName,
  description_raw: gameSummary,
  released: gameReleased,
  background_image: gameArtwork,
  tags: [ { name: gameTag } ],
  genres: [ { name: gameGenre } ],
  metacritic: gameRating,
  platforms: [ { platform: { name: gamePlatform } } ],
  developers: [ { name: gameDeveloper } ],
  publishers: [ { name: gamePublisher } ],
  esrb_rating: { name: gameESRB },

} = JSON.parse( document.querySelector('.game-details').dataset.game );

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
      gameStatus
    } );

    const response = await fetch("/api/game/", {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert("Failed to add game to library.");
    }
}

document.querySelector(".new-game-in-progress").addEventListener("click", createGame);
document.querySelector(".new-game-completed").addEventListener("click", createGame);
document.querySelector(".new-game-not-started").addEventListener("click", createGame);
