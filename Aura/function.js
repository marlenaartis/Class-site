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
