function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "dropdown") {
      x.className += " hidden";
    } else {
      x.className = "dropdown";
    }
  }