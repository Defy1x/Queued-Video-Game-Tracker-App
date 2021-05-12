const createGame = async (event) => {
    event.stopPropagation();

    console.log("I am being clicked!");

    const gameStatus = event.target.getAttribute("data-gamestatus");

    const response = await fetch("/api/game/", {
        console.log("game added! with game status of" + gameStatus)
        method: "POST",
        body: JSON.stringify({ gameStatus }),
        headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
        document.location.reload();
    } else {
        alert("Failed to create post.");
    }
}

document.querySelector(".new-game").addEventListener("click", createGame);
