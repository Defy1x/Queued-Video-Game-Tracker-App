
$(document).ready(function() {

  $('#game-form').submit(function(e){
    e.preventDefault();
    game = $('#game-name').val().toLowerCase();

    console.log(game);

    // if no value entered for game then exit
    if (!game){
      return;
    }

    //show search details page and render results
    document.location.replace( `/search-results?search=${game}` );

    //clear game form value
    $('#game-name').val('');
  })
})
