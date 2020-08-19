$(document).ready(function () {
  $("#links").hide();
  $("#nav-btn").click(changeNav);

  function changeNav() {
    $("#links").toggle(1500);
    $("#nav-btn").toggleClass("turn");
  }
});
