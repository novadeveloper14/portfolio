var text = "Hi, i'm Johan Nova </>";
var i = 0;
var cursor = "|";

function typeWriter() {
  if (i < text.length) {
    document.getElementById("demo").innerHTML += text.charAt(i);
    i = i + 1;
    setTimeout(typeWriter, 100);
  } else {
    setInterval(function () {
      if (window.innerWidth < 915) {
        cursor = "";
      } else {
        cursor = "|";
      }
      document.getElementById("demo").innerHTML += cursor;
      setTimeout(function () {
        document.getElementById("demo").innerHTML = document
          .getElementById("demo")
          .innerHTML.slice(0, -1);
      }, 500);
    }, 1000);
  }
}

function moveWhitKeyBottom(sitio) {
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 40) {
      window.location.href = sitio;
    }
  });
}

function moveWhitKeyTop(sitio) {
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 38) {
      window.location.href = sitio;
    }
  });
}
