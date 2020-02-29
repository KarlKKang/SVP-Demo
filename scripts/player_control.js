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