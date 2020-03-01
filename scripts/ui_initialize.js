function initializeElements () {
	for (var i = titleList.length-1; i >=0; i--){
		createVideoContainer (titleList[i], subtitleList[i], dateList[i], is4KList[i], thumbnailList[i], filePathList[i], dFilePathList[i], dFileNameList[i], creditSegmentList[i], commentSegmentList[i]);
	}
}

function initialize () {
	initializeList ();
	initializeElements ();
	updateBackground();
}