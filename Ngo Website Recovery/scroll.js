window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style.padding = "2px 5px";
    document.getElementById("navbar").style.boxShadow ="5px 10px 50px rgb(30, 30, 30)";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "5px 5px";
    document.getElementById("navbar").style.boxShadow ="";
    document.getElementById("logo").style.fontSize = "35px";
  }
}