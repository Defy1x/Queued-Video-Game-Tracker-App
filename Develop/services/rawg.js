const searchGames = await (val) => {
  const response = await fetch(`https://api.rawg.io/api/games?key=${ process.env.RAWG_KEY }&search=${ val }`);
  const data = await response.json();
}

module.exports = {
  searchGames
}
