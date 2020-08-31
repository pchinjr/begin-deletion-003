var characters = []; //empty array to hold the split characters

$('#content').on('keyup', function(){
  var entry = $("#content").val();
  var splitt = entry.split("");
  characters = splitt;
  removeTimer.play();
});

$('#content').on('keypress', function(){
  removeTimer.stop();
});

var removeTimer = $.timer( function() {
  characters.shift(); //removes first element from array
  $('#content').val( characters.join("") );
}, 3000, false);

autosize(document.querySelectorAll('textarea'));
