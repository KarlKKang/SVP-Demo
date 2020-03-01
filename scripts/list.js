var titleList = [];
var subtitleList = [];
var dateList = [];
var is4KList = [];
var thumbnailList = [];
var filePathList = [];
var dFilePathList = [];
var dFileNameList = [];
var creditSegmentList = [];
var commentSegmentList = [];

function appendList (param) {
    var index = titleList.length;
    
    if (typeof param.title === 'undefined'){
        alert('\'title\' element for index: ' + index + ' must be defined!');
        param.title = 'Missing title';
    }
    if (typeof param.subtitle === 'undefined'){
        console.log('Element \'subtitle\' is undefined for index: ' + index + '. Assuming empty.');
        param.subtitle = '';
    }
    if (typeof param.date === 'undefined'){
        alert('\'date\' element for index: ' + index + ' must be defined!');
        param.date = 'Missing date';
    }
    if (typeof param.is4K === 'undefined'){
        console.log('Element \'is4K\' is undefined for index: ' + index + '. Assuming false.');
        param.is4K = false;
    }
    if (typeof param.thumbnail === 'undefined'){
        alert('\'thumbnail\' element for index: ' + index + ' must be defined!');
        param.thumbnail = '';
    }
    if (typeof param.filePath === 'undefined'){
        alert('\'filePath\' element for index: ' + index + ' must be defined!');
        param.filePath = '';
    }
    if (typeof param.dFilePath === 'undefined'){
        console.log('Element \'dFilePath\' is undefined for index: ' + index + '. Assuming empty.');
        param.dFilePath = '';
    }
    if (typeof param.dFileName === 'undefined'){
        console.log('Element \'dFilePath\' is undefined for index: ' + index + '. Assuming empty.');
        param.dFileName = '';
    }
    if (typeof param.creditSegment === 'undefined'){
        console.log('Element \'creditSegment\' is undefined for index: ' + index + '. Assuming empty.');
        param.creditSegment = '';
    }
    if (typeof param.commentSegment === 'undefined'){
        console.log('Element \'commentSegment\' is undefined for index: ' + index + '. Assuming empty.');
        param.commentSegment = '';
    }
    
    titleList.push(param.title);
	subtitleList.push(param.subtitle);
	dateList.push(param.date);
	is4KList.push(param.is4K);
	thumbnailList.push(param.thumbnail);
	filePathList.push(param.filePath);
	dFilePathList.push(param.dFilePath);
	dFileNameList.push(param.dFileName);
	creditSegmentList.push(param.creditSegment);
	commentSegmentList.push(param.commentSegment);
}