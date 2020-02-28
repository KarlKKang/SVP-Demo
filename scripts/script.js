function updateBackground() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var ratio = h/w;
  if (mobileCheck()){
    document.getElementById("mainBody").style.background = "#323232";
  }
  else if (ratio>4/3) {
    document.getElementById("mainBody").style.background = "url(https://storage.googleapis.com/svp-demo/images/DP_0011_veED_009_1620x2160.png) no-repeat center center";
  }
  else {
    document.getElementById("mainBody").style.background = "url(https://storage.googleapis.com/svp-demo/images/DP_0011_veED_009_3840x2160.jpg) no-repeat center center";
  }
  document.getElementById("mainBody").style.backgroundAttachment = "fixed";
  document.getElementById("mainBody").style.backgroundSize = "cover";
}


function dropdown() {
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}


function mobileCheck() {
  var isMobile = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent);

  return isMobile;
}


function resolutionSwitch (dropdown) {
  var resolution = dropdown.options[dropdown.selectedIndex].value;
  var video = dropdown.parentNode.parentNode.getElementsByTagName("video")[0].getElementsByTagName("source")[0];
  var videoDirectory = video.src;
  var newVideoDirectory;

  newVideoDirectory = generateNewDirectory (videoDirectory, resolution);
  video.setAttribute("src", newVideoDirectory);

  video.parentNode.load();
  
}


function generateNewDirectory (currentDirectory, resolution) {
  var newDirectory;

  newDirectory = currentDirectory.replace("1080p", resolution);
  newDirectory = newDirectory.replace("2160p", resolution);

  return newDirectory;
}
