function updateVideoElements () {
    var currentVideoCount = document.getElementsByClassName("video-frame").length;
    var list, pageEnd;
    
    if (mode=='normal') {
        list = videoList;
    } else if (mode=='search') {
        list = searchList;
    } else {
        alert("Variable 'mode' has an unexpected value: "+mode);
    }
    
	for (var i = currentVideoCount; i < Math.min(currentVideoCount+10, list.length); i++) {
		createVideoContainer (list[i]);
	}
    
    $("[lang='ja']").removeClass("notranslate");
    $("[lang='ja']").addClass("notranslate");
    $(".accordion").off("click");
    $(".accordion").on("click",function(){dropdown(this);});
    
    currentVideoCount = document.getElementsByClassName("video-frame").length;
    if (currentVideoCount<list.length) {
        pageEnd = 
            "<button onclick='updateVideoElements ()'>显示更多 &#129123;</button>";
    } else {
        pageEnd = 
            "<p>&#8213; END &#8213;</p>";
    }
    $("#page-end").empty();
    $("#page-end").append(pageEnd);
}

function keyInitialize () {
    var keyElement
    
    for (var i=0; i<videoList.length; i++) {
        keyElement = 
            '<div>'+videoList[i].key+videoList[i].title+videoList[i].subtitle+videoList[i].date+videoList[i].dFileName+videoList[i].credit+videoList[i].comment+'</div>';
        $("#key").append(keyElement);
    }
}

function initialize () {
	initializeList ();
    keyInitialize ();
	updateVideoElements ();
}