var videoList = [];
var searchList = [];
var mode='normal';

function appendList (param) {
    var index = videoList.length;
    
    if (typeof param.tag === 'undefined'){
        console.log('Element \'tag\' is undefined for index ' + index + '. Assuming empty.');
        param.tag = '';
    }
    if (typeof param.key === 'undefined'){
        console.log('Element \'key\' is undefined for index ' + index + '. Assuming empty.');
        param.key = '';
    }
    if (typeof param.title === 'undefined'){
        alert('\'title\' element for index ' + index + ' must be defined!');
        param.title = 'Missing title';
    }
    if (typeof param.subtitle === 'undefined'){
        console.log('Element \'subtitle\' is undefined for index ' + index + '. Assuming empty.');
        param.subtitle = '';
    }
    if (typeof param.date === 'undefined'){
        alert('\'date\' element for index ' + index + ' must be defined!');
        param.date = 'Missing date';
    }
    if (typeof param.is4K === 'undefined'){
        console.log('Element \'is4K\' is undefined for index ' + index + '. Assuming false.');
        param.is4K = false;
    }
    if (typeof param.thumbnail === 'undefined'){
        console.log('Element \'thumbnail\' is undefined for index ' + index + '. Assuming empty.');
        param.thumbnail = '';
    }
    if (typeof param.filePath === 'undefined'){
        console.log('Element \'filePath\' is undefined for index ' + index + '. Assuming empty.');
        param.filePath = '';
    }
    if (typeof param.alt === 'undefined'){
        console.log('Element \'alt\' is undefined for index ' + index + '. Assuming empty.');
        param.alt = '';
    }
    if (typeof param.dFilePath === 'undefined'){
        console.log('Element \'dFilePath\' is undefined for index ' + index + '. Assuming empty.');
        param.dFilePath = '';
    }
    if (typeof param.dFileName === 'undefined'){
        console.log('Element \'dFilePath\' is undefined for index ' + index + '. Assuming empty.');
        param.dFileName = '';
    }
    if (typeof param.credit === 'undefined'){
        console.log('Element \'credit\' is undefined for index ' + index + '. Assuming empty.');
        param.credit = '';
    }
    if (typeof param.comment === 'undefined'){
        console.log('Element \'comment\' is undefined for index ' + index + '. Assuming empty.');
        param.comment = '';
    }
    
    if ((param.dFilePath == '' || param.dFilePath == 'none') && (param.dFileName != '' && param.dFileName != 'none')){
        alert('Element \'dFileName\' is defined for index ' + index + ' but element \'dFilePath\' is undefined.');
    } else if ((param.dFileName == '' || param.dFileName == 'none')&&(param.dFilePath != '' && param.dFilePath != 'none')) {
        alert('Element \'dFilePath\' is defined for index ' + index + ' but element \'dFileName\' is undefined.');
    }
    
    if (param.filePath == '' || param.filePath == 'none'){
        if (param.thumbnail =='' || param.thumbnail =='none'){
            console.log('Elements \'thumbnail\' and \'filePath\' are both undefined for index ' + index + '.');
        }
        if (param.alt =='' || param.alt =='none'){
            console.log('Elements \'filePath\' and \'alt\' are both undefined for index ' + index + '. Using default value for \'alt\'.');
            param.alt = '<p>Video currently unavailable.</p>';
        }
    } else{
        if (param.alt !='' && param.alt !='none'){
            console.log('Elements \'filePath\' and \'alt\' are both defined for index ' + index + '. Revert \'alt\' to empty.');
            param.alt = '';
        }
    }
    
    videoList.push(param);
}