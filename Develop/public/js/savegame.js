const {
  name: gameName,
  description_raw: gameSummary,
  released: gameReleased,
  background_image: gameArtwork,
  tags.0.name: gameTag,
  genres.0.name: gameGenre,
  metacritic: gameRating,
  platforms.0.platform.name: gamePlatform,
  developers.0.name: gameDeveloper,
  publishers.0.name: gamePublisher,
  esrb_rating.name: gameESRB,

} = JSON.parse( document.querySelector('.game-details').dataset.game );

const createGame = async (event) => {
    event.stopPropagation();

    const gameStatus = event.target.getAttribute("data-gamestatus");

    console.log( {
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
      gameStatus } );

    const response = await fetch("/api/game/", {
        method: "POST",
        body: JSON.stringify({ gameStatus }),
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
