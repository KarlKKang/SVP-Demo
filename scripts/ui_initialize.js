function initializeElements () {
	for (var i = title.length-1; i >=0; i--){
		createVideoContainer (title[i], subtitle[i], date[i], is4K[i], thumbnail[i], filePath[i], dFilePath[i], dFileName[i], creditSegment[i], commentSegment[i]);
	}
}

function initialize () {
	initializeList ();
	initializeElements ();
	updateBackground();
}