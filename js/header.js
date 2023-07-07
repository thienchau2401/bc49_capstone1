$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

if (+window.localStorage.getItem('preferDark')) {
  document.getElementById("myBody").classList.toggle('dark');
}
document.getElementById("switchButton").onclick = function(){
  if (+window.localStorage.getItem("preferDark")) {
    window.localStorage.setItem("preferDark", 0);
  } else {
    window.localStorage.setItem("preferDark", 1);
  }
  document.getElementById("myBody").classList.toggle("dark");
};
