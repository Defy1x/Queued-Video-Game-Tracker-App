
$(document).ready(function() {

  $('#game-form').submit(function(e){
    e.preventDefault();
    game = $('#game-name').val().toLowerCase();

    console.log(game);

    // if no value entered for game then exit
    if (!game){
      return;
    }

    //show search details on home page and render results
    document.location.assign( `/search-results?search=${game}` );

    //clear game form value
    $('#game-name').val('');
  })
})
