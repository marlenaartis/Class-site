$( function() {
  $( ".draggable").draggable();
});

function changeImage() {

    if (document.getElementById("drag-2").src == "file:///Users/marlenaartis/Desktop/classwebsite/Class-site/Aura/aura6.jpg")
    {
(document.getElementById("drag-2").src = "file:///Users/marlenaartis/Desktop/classwebsite/Class-site/Aura/aura012.jpg")
    }
    else
    {
        document.getElementById("drag-2").src = "file:///Users/marlenaartis/Desktop/classwebsite/Class-site/Aura/aura012.jpg";
    }
}
$( document ).ready(function() {
 $('#headerVideoLink').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
animateDiv('.float-g');
    animateDiv('.float-h');
    animateDiv('.float-i');
});
