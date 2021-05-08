// const searchGames = await (val) => {
//   const response = await fetch(`https://api.rawg.io/api/games?key=${ process.env.RAWG_KEY }&search=${ val }`);
//   const data = await response.json();
// }

$(document).ready(function() {

  $('#game-form').submit(function(e){
    e.preventDefault();
    game = $('#game-name').val().toLowerCase();

    console.log(game);

    // if no value entered for game then exit
    if (!game){
      return;
    }

    // run search game (1st api)
    // search(game);
    document.location.assign( `/search-results?search=${ game }` );
    // navigate to /search-results?game=${game}

    //clear game form value
    $('#game-name').val('');
  })


  // async function to search for a game
  // async function search(game) {
  //   try {
  //     let response = await axios({
  //         baseURL: 'http://localhost:3001',
  //         url: '/api/rawg/games',
  //         params: {
  //           search: game,
  //         }
  //       })
  //       console.log(response.data)
  //       // displayResults(response.data.results)
  //
  //   } catch (error) {
  //     alert('No game found!')
  //   }
  // //closing bracket for search game and axios call
  // }

// closing bracket for document ready
})
