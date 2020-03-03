function initializeElements () {
	for (var i = videoList.length-1; i >=0; i--){
		createVideoContainer (videoList[i]);
	}
}

function initialize () {
	initializeList ();
	initializeElements ();
	updateBackground();
}