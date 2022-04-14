var unmastered = document.getElementById("unmastered");
var mastered = document.getElementById("mastered");
var playing = document.getElementById("playingButton");
var playspan = document.getElementById("playspan");
var masteredButton = document.getElementById("masteredButton");
var unmasteredButton = document.getElementById("unmasteredButton");
var slider = document.getElementById("slider");
var pic = document.getElementById("pic");
var picture = document.getElementById("picture");
//mastered.volume = 0.6;
var unmasteredIsPlaying = true;
var isPlaying = false;
var localTime = 0;

var myObj = {
  bones: {
    img: "1UzjXC76kOSFo7XM0JwWxJDRq5NHdNunu",
    unmastered: "1ba7Za7qZxuCnDTGFiumgFBQfy5Stpe1x",
    mastered: "1-Cy0LmvTc22PzFkT0HCejPXos9DJMlXF"
  },
  brockhampton: {
    img: "1qi8ZVhbWQ4cXuu7CyyC4rp7fbpcWG3AL",
    unmastered: "1R8uxekS7ia2mPJm_N5Z2ELXHFEB04L4_",
    mastered: "1XurBHHz1sD5qyKAQ2V03qr77TiVxEUq0"
  },
  lofi: {
    img: "1ktKK9ZX95Phyh13rf9wAUWeckm17MAAi",
    unmastered: "1mX0z6HkypPtVc4TgoE2JfhpMy-gB31P5",
    mastered: "1aqMH9hHfKHjQvgcHCPhXbzR_ohulbmFK"
  },
  trap: {
    img: "1Tu0_evIPVwtvC0Ixm5F-mXyfASzNuVqf",
    unmastered: "1iowxOLdcNUEnqQHhUjmMHT-N3SMQYAEO",
    mastered: "1qArjEoLupkkeNQHnR-3PZjAXrroh3oeQ"
  }
};

$(document).ready(function () {
  $("#masteredButton").click(function () {
    if (unmasteredIsPlaying === true) {
      $("#pic").removeClass("addGrayscale");
      if (isPlaying === true) {
        mastered.currentTime = unmastered.currentTime;
        unmastered.pause();
        mastered.play();
      } else {
        localTime = mastered.currentTime;
      }

      unmasteredIsPlaying = false;
      masteredButton.style.opacity = "1";
      unmasteredButton.style.opacity = "0.5";
    } else {
    }
  });

  $("#unmasteredButton").click(function () {
    $("#pic").addClass("addGrayscale");
    if (unmasteredIsPlaying === true) {
    } else {
      if (isPlaying === true) {
        unmastered.currentTime = mastered.currentTime;
        mastered.pause();
        unmastered.play();
      } else {
        localTime = mastered.currentTime;
      }

      unmasteredIsPlaying = true;
      masteredButton.style.opacity = "0.5";
      unmasteredButton.style.opacity = "1";
    }
  });

  $("#playingButton").click(function () {
    if (isPlaying === false) {
      playspan.innerHTML = "pause";
      if (unmasteredIsPlaying === true) {
        unmastered.currentTime = localTime;
        unmastered.play();
      } else {
        mastered.currentTime = localTime;
        mastered.play();
      }
      isPlaying = true;

      return;
    }
    if (isPlaying === true) {
      playspan.innerHTML = "play";
      if (unmasteredIsPlaying === true) {
        localTime = unmastered.currentTime;
        unmastered.pause();
      } else {
        localTime = mastered.currentTime;
        mastered.pause();
      }
      isPlaying = false;
      return;
    }
  });

  setInterval(function () {
    if ($("#slider").is(":hover")) {
    } else {
      if (unmasteredIsPlaying) {
        $("#slider").val(unmastered.currentTime * (100 / unmastered.duration));
      } else {
        $("#slider").val(mastered.currentTime * (100 / mastered.duration));
      }
    }
  }, 100);
});

function updateSlider(x) {
  unmastered.currentTime = (x * unmastered.duration) / 100;
  mastered.currentTime = (x * mastered.duration) / 100;
}
function eventFire(el, etype) {
  if (el.fireEvent) {
    el.fireEvent("on" + etype);
  } else {
    var evObj = document.createEvent("Events");
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function selection(type) {
  var x = type;
  var y = type;
  var z = type;
  y = y + "-mastered.mp3";
  x = x + "-unmastered.mp3";
  z = z + ".jpg";

  unmastered.src =
    "https://drive.google.com/uc?id=" + myObj[type]["unmastered"];
  mastered.src = "https://drive.google.com/uc?id=" + myObj[type]["mastered"];
  picture.src = "https://drive.google.com/uc?id=" + myObj[type]["img"];
  isPlaying = false;
  eventFire(playspan, "click");
}
