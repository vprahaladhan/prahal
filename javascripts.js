function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



AOS.init({
  disable: function() {
      var maxWidth = 1024;
      return window.innerWidth < maxWidth;
  }
  });

window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("navbar").style.top = "0";
      } else {
          document.getElementById("navbar").style.top = "-100px";
      }
      }