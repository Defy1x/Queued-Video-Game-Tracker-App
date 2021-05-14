const updateGame = async (event) => {
    event.stopPropagation();

    console.log("I am being clicked to update!")

    const gameStatus = event.target.getAttribute("data-gamestatus");
    const gameId = event.target.getAttribute("data-gameid");

    const response = await fetch(`/api/game/${gameId}`, {
        method: "PUT",
        body: JSON.stringify({ gameStatus }),
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        setTimeout(function(){ document.location.reload(); }, 2000);
    } else {
        alert("Failed to update game.");
    }
};

const deleteGame = async (event) => {
    event.stopPropagation();

    console.log("I am being clicked to delete!")
    const gameId = event.target.getAttribute("data-gameid");

    const response = await fetch(`/api/game/${gameId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.replace( '/' );
    } else {
        alert("Failed to delete from library.");
    }
}

document.querySelector(".update-game-in-progress").addEventListener("click", updateGame);
document.querySelector(".update-game-completed").addEventListener("click", updateGame);
document.querySelector(".update-game-not-started").addEventListener("click", updateGame);
document.querySelector(".delete-game").addEventListener("click", deleteGame);
