$(document).ready(function() {

  $('#game-form').submit(function(e){
    e.preventDefault()
})

// grab value from form
$('#search-btn').click((event) =>{
event.preventDefault()
game = $('#game-name').val().toLowerCase()

console.log(game)

// if no value entered for game then exit
if (!game){
return;
}

// run search game (1st api)
search(game);

//clear game form value
$('#game-name').val('')
})
});


// async function to search for a game
async function search(game) {

  try {

    const url = 'https://api.rawg.io/api'
    const apiKey = process.env.RAWG_KEY

    let response = await axios.get(url, {
        params: {
        q: game,
        appid: apiKey,
        }
      })
      console.log(response.data)
      displayResults(response.data)

    } catch (error) {
      alert('No game found!')
    }
  }
//closing bracket for search game and axios call
}

//closing bracket for document ready
}
