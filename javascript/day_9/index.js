let element = $(".container");

//selecteur jQuery 

console.log($(document));

//element.text("coco")
element.html("<h1>Titre</h1>")
element.css("color", "blue")
element.css({
    backgroundColor : "green",
    fontSize : "12px"
})

// $(".new-btn").on("click", function() {
//     console.log("new");
// })

$(document).on("click", ".new-btn", function() {
    console.log("newww");
    $(this).style.color = "red"
})

element.append('<input type="button" class="new-btn" value="new">')

$(".btn").on("click", function(){
    console.log(this);
    $(this).css("backgroundColor", "red")
})



console.log(element);