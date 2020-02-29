function createVideoContainer (title, subtitle, date, is4K, thumbnail, filePath, dFilePath, dFileName, creditSegment, commentSegment) {
	var subtitleSegment;
	var disabled;
	var downloadSegment;
	
	if (is4K) {
		disabled = '';
	} else {
		disabled = 'disabled';
	}
	
	if (dFilePath=='none'||dFilePath=='') {
		downloadSegment = '';
	} else {
		downloadSegment = 
			'<button class="accordion">下载链接</button>\
			<div class="panel">\
				<p><a href="https://storage.googleapis.com/svp-demo/videos/download/' + dFilePath + '">' + dFileName + '</a></p>\
			</div>';
	}
	
	if (subtitle=='none'||subtitle=='') {
		subtitleSegment = '';
	} else {
		subtitleSegment = '<h3 align="center">' + subtitle + '</h3>';
	}
	
	
	var element = 
		'<div class="VideoFrame">\
			<h1 align="center">' + title + '</h1>' +
			subtitleSegment + 
			'<br />\
			<p class="date">' + date + '</p>\
			<br />\
			<hr>\
			<br />\
			<div class="selectMenu">\
				<select onchange="resolutionSwitch(this)">\
					<option value="2160p"' + disabled + '>2160p 60fps</option>\
					<option value="1080p" selected>1080p 60fps</option>\
				</select>\
			</div>\
			<video poster="https://storage.googleapis.com/svp-demo/images/thumbnails/' + thumbnail + '" controls preload="none">\
				<source src="https://storage.googleapis.com/svp-demo/videos/online/' + filePath + '" type="video/mp4">\
				<source src="https://storage.googleapis.com/svp-demo/videos/online/' + filePath + '" type="video/mp4">\
				此浏览器不支持在线视频播放，请更换浏览器或播放设备播放，或在下方“下载链接”区域下载高质量的视频用本地播放器播放。\
			</video>' + 
			downloadSegment +
			'<button class="accordion">版权及来源</button>\
			<div class="panel">'+
				creditSegment +
			'</div>\
			<button class="accordion">一些废话</button>\
			<div class="panel">' +
				commentSegment +
			'</div>\
			<br />\
		</div>';
	
	$("#initiator").after(element);
}