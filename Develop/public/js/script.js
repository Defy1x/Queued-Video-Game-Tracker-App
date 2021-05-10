
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
})
