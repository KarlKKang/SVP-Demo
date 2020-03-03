function createVideoContainer (param) {
    var title = param.title, subtitle = param.subtitle, date = param.date, is4K = param.is4K, thumbnail = param.thumbnail, filePath = param.filePath, alt = param.alt; dFilePath = param.dFilePath, dFileName = param.dFileName, credit = param.credit, comment = param.comment;
	var subtitleSegment;
    var videoSegment;
    var downloadAccordionClass;
    var creditAccordionClass;
    var commentAccordionClass;
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if (subtitle=='none'||subtitle=='') {
		subtitleSegment = '';
	} else {
		subtitleSegment = '<h3 align="center">' + subtitle + '</h3>';
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if (is4K) {
		is4K = '';
	} else {
		is4K = 'disabled';
	}
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if (filePath=='none'||filePath=='') {
		videoSegment = alt + '<br />';
	} else {
		videoSegment = 
            '<div class="selectMenu">\
				<select onchange="resolutionSwitch(this)">\
					<option value="2160p"' + is4K + '>2160p 60fps</option>\
					<option value="1080p" selected>1080p 60fps</option>\
				</select>\
			</div>\
            <div class="video">\
                <video poster="https://storage.googleapis.com/svp-demo/images/thumbnails/' + thumbnail + '" controls preload="none">\
                    <source src="https://storage.googleapis.com/svp-demo/videos/online/' + filePath + '" type="video/mp4">\
                    <source src="https://storage.googleapis.com/svp-demo/videos/online/' + filePath + '" type="video/mp4">\
                    此浏览器不支持在线视频播放，请更换浏览器或播放设备播放，或在下方“下载链接”区域下载高质量的视频用本地播放器播放。\
                </video>\
            </div>'
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if (dFilePath=='none'||dFilePath=='') {
		downloadAccordionClass = 'accordionDisabled';
	} else {
        downloadAccordionClass = 'accordion';
	}
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if (credit=='none'||credit=='') {
		creditAccordionClass = 'accordionDisabled';
	} else {
        creditAccordionClass = 'accordion';
	}
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	if (comment=='none'||comment=='') {
		commentAccordionClass = 'accordionDisabled';
	} else {
        commentAccordionClass = 'accordion';
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	var element = 
		'<div class="VideoFrame">\
			<h1 align="center" lang="ja">' + title + '</h1>' +
			subtitleSegment + 
			'<br />\
			<p class="date">' + date + '</p>\
			<br />\
			<hr>\
			<br />' +
            videoSegment +  
			'<button class="' + downloadAccordionClass + '">下载链接</button>\
			<div class="panel">\
				<p><a href="https://storage.googleapis.com/svp-demo/videos/download/' + dFilePath + '">' + dFileName + '</a></p>\
			</div>\
			<button class="' + creditAccordionClass + '">版权及来源</button>\
			<div class="panel">'+
				credit +
			'</div>\
			<button class="' + commentAccordionClass + '">一些废话</button>\
			<div class="panel">' +
				comment +
			'</div>\
			<br />\
		</div>';
	
	$("#initiator").after(element);
}