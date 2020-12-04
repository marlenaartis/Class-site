$( function() {
  $( ".draggable").draggable();
});

$(document).delegate("div", "click", function() {
   window.location = $(this).find("a").attr("href");
});
// Drifter
// ---------------------------------------------
function makeNewPosition(){
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(document).height() - 5;
  var w = $(document).width() - 5;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh,nw];
}

function animateDiv(myclass){
  var newq = makeNewPosition();
  var oldq = $('.drifter').offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $(myclass).animate({ top: newq[1], left: newq[0] }, speed, function(){
    animateDiv(myclass);

  });
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[1] - next[0]);
  var greatest = x > y ? x : y;
  var speedModifier = 0.02;
  var speed = Math.ceil(greatest/speedModifier);
  return speed;
}

function randomPosition(myclass){
  var randomW = Math.floor(80*Math.random());
  var randomH = Math.floor(80*Math.random());
  $(myclass).css({'top' : randomH + '%'});
  $(myclass).css({'left' : randomW + '%'});
};

function randomPosition2(myclass){
  var randomW = Math.floor(80*Math.random());
  var randomH = Math.floor(80*Math.random());
  $(myclass).css({'bottom' : randomH + '%'});
  $(myclass).css({'right' : randomW + '%'});
};




$( document ).ready(function() {
 $('#headerVideoLink').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
    animateDiv('.float-a');
    animateDiv('.float-b');
    animateDiv('.float-c');
    animateDiv('.float-d');
    animateDiv('.float-e');
    animateDiv('.float-f');
    animateDiv('.float-g');
    animateDiv('.float-h');
    animateDiv('.float-i');
    animateDiv('.float-j');
    animateDiv('.float-k');
    animateDiv('.float-l');
    animateDiv('.float-m');
    animateDiv('.float-n');
    animateDiv('.float-o');
    animateDiv('.float-p');
    animateDiv('.float-q');
    animateDiv('.float-r');
    animateDiv('.float-s');
    animateDiv('.float-t');
      animateDiv('.float-u');
      animateDiv('.float-v');
      animateDiv('.float-w');
      animateDiv('.float-x');
      animateDiv('.float-y');
      animateDiv('.float-z');
      animateDiv('.float-aa');
      animateDiv('.float-ab');
      animateDiv('.float-ac');
      animateDiv('.float-ad');
      animateDiv('.float-ae');
      animateDiv('.float-af');
      animateDiv('.float-ag');
      animateDiv('.float-ah');
      animateDiv('.float-ai');
      animateDiv('.float-aj');
      animateDiv('.float-ak');
      animateDiv('.float-al');
      animateDiv('.float-am');
      animateDiv('.float-an');
      animateDiv('.float-ao');
      animateDiv('.float-ap');
      animateDiv('.float-aq');
      animateDiv('.float-ar');
      animateDiv('.float-as');
      animateDiv('.float-at');


});
