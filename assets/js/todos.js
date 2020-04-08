//check off todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});
//Click X to fade delete
$("ul").on("click", "span", function(truc) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  truc.stopPropagation();
});
$('input[type="text"]').keypress(function(truc) {
  if (truc.which === 13) {
    //store the input as a value
    let todoText = $(this).val();
    $(this).val("");
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>"
    );
    //use that value to create a new li
  }
});
$(".fa-plus").click(function() {
  $('input[type="text"]').fadeToggle();
});
