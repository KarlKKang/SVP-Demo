function resolutionSwitch(select) {
    var resolution = select.options[select.selectedIndex].value;
    var videoSource = select.parentNode.parentNode.getElementsByTagName("video")[0].getElementsByTagName("source")[0];
    var videoSourceDirectory = videoSource.src;
    var newVideoSourceDirectory;

    newVideoSourceDirectory = generateNewDirectory(videoSourceDirectory, resolution);
    videoSource.setAttribute("src", newVideoSourceDirectory);

    videoSource.parentNode.load();
}


function generateNewDirectory(currentDirectory, resolution) {
    var newDirectory;

    newDirectory = currentDirectory.replace("1080p", resolution);
    newDirectory = newDirectory.replace("2160p", resolution);

    return newDirectory;
}
