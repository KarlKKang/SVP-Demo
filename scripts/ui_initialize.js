function initializeElements () {
	for (var i = 0; i < title.length; i++){
		createVideoContainer (title[i], subtitle[i], date[i], is4K[i], thumbnail[i], filePath[i], dFilePath[i], dFileName[i], creditSegment[i], commentSegment[i]);
	}
}

function initialize () {
	initializeList ();
	initializeElements ();
	updateBackground();
}