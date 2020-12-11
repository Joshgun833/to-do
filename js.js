
$(document).on("click", ".Add", function () {
  var text = $(".mytext").val();
  if (text != '') {
    $("#icine").append("<li class='yenii'><button class='yoxa'></button></li>")


    $(".yenii").last().append(function () {
      var text = $(".mytext").val();
      return text;
    });

  }
  else {
    alert('Xana bosdu')
  }

})//Elave elemek


$(document).on("click", "ul#icine > li", function () {
  $(this).addClass("silinen")



})//Secmek
$(document).on("dblclick", "ul#icine > li", function () {
  $(this).removeClass("silinen")
  

})//secmememk
$(document).on("click", "ul#icine>li>button", function () {
  $(this).parent().detach();
})//secilen elementi silmek
$(document).on("click", ".dell", function () {
  $("ul#icine>li.silinen").remove()
})//secilen elementleri silmek
  