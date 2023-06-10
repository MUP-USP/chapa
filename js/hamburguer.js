// Para fazer o menu hamburguer funcionar
$(".menu").on("click", function () {
  if ($(".sidebar").hasClass("is-open")) {
      $(".menu-hamb").removeClass("is-active");
      $(".sidebar").removeClass("is-open");
  } else {
      $(".menu-hamb").addClass("is-active");
      $(".sidebar").addClass("is-open");
  }
});