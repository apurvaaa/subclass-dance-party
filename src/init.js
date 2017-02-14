$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    //<!--$(this).data("data-dancer-maker-function-name"); -->

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    //

    // make a dancer with a random position
//dancerMakerFunction
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });


  var lineUpinit = function(event) {

    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  }; 

  $('.lineUp').on('click', function(event) {
    lineUpinit(event);
  });

  $('span').on('mouseover', '.dancer', function(event) {
    if (this.keepStill !== undefined) {
      $(this).beShy();
    }
  });

  $('.interact').on('click', function(event) {
    var recent = window.dancers[window.dancers.length - 1];
    //iterate through window.dancers
      //find distance of each node to recent
    var sortedDistance = window.dancers.map(function(dancer, index) {
      var val2 = Math.sqrt(Math.pow(recent.left - dancer.left, 2) + Math.pow(recent.top - dancer.top, 2));
      return [index, val2];
    }).sort(function(a, b) {
      return a[1] - b[1];
    });
    var numberNeighbors = Math.floor(Math.random() * 6) + 3;
   
    //find center position
      //
    for (var i = 0; i < numberNeighbors; i++) {
      var dancerObj = window.dancers[sortedDistance[i][0]];
      dancerObj.$node.animate({
        left: recent.left,
        top: recent.top
      }, 3000);
    }
    window.dancers.forEach(function(dancer) {
      dancer.$node.animate({
        left: dancer.left,
        top: dancer.top
      }, 3000); });
  });
});
