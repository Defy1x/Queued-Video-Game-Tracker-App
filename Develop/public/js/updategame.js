const updateGame = async (event) => {
    event.stopPropagation();

    const gameStatus = event.target.getAttribute("data-gamestatus");
    const response = await fetch(`/api/game/${gameId}`, {
        method: "PUT",
        body: JSON.stringify({ gameStatus }),
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert("Failed to update game.");
    }
};

const deleteGame = async (event) => {
    event.stopPropagation();

    const gameId = event.target.getAttribute("data-gameid");
    const response = await fetch(`/api/game/${gameId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert("Failed to delete from library.");
    }
}

document.querySelector(".update-game")game.addEventListener("click", updateGame);

document.querySelector(".delete-game")game.addEventListener("click", deleteGame);

// document.querySelectorAll(".update-game").forEach((game) => {
//     post.addEventListener("click", updateGame);
// });
// document.querySelectorAll(".delete-game").forEach((game) => {
//     post.addEventListener("click", deleteGame);
// });
