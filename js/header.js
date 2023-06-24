$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
document.getElementById("switchButton").onclick = function(){
  document.getElementById("myBody").classList.toggle("dark");
};
