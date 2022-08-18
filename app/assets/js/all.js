$(document).ready(() => {
  $(".reply-btn").click(function () {
    $(".replied").addClass("d-none");
    $(".footer-btn").addClass("d-none");
    $(".reply-form").show();
  });

  $(".reply-form-btn-cancel").click(function () {
    $(".replied").removeClass("d-none");
    $(".footer-btn").removeClass("d-none");
    $(".reply-form").hide();
  });
});
