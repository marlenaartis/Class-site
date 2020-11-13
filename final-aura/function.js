$( function() {
  $( ".draggable").draggable();
});

function changeImage() {

    if (document.getElementById("drag-2").src == "aura6.jpg")
    {
(document.getElementById("drag-2").src = "aura012.jpg")
    }
    else
    {
        document.getElementById("drag-2").src = "aura012.jpg";
    }
}

// Drifter
// ---------------------------------------------
function makeNewPosition(){
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(document).height() - 50;
  var w = $(document).width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh,nw];
}

function animateDiv(myclass){
  var newq = makeNewPosition();
  var oldq = $('.drifter').offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $(myclass).animate({ top: newq[0], left: newq[1] }, speed, function(){
    animateDiv(myclass);
  });
}

function calcSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);
  var greatest = x > y ? x : y;
  var speedModifier = 0.07;
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
});
