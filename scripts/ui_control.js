function dropdown (element) {
    element.classList.toggle("active");
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

function headerStyleUpdate () {
    var element = document.getElementById("header");
    if ($(window).scrollTop() >= 80){
        element.setAttribute("class", "header-fixed");
    } else {
        element.removeAttribute("class");
    }
}

function navUpdate () {
    var element = document.getElementById("nav-btn");
    if (element.className==""){
        element.setAttribute("class", "active");
        showMenu ("nav-menu-1");
    } else {
        element.removeAttribute("class");
        resetAllMenu ();
    }
}

function showMenu (id) {
    document.getElementById("nav-menus").style.display = "block";
    document.getElementById(id).style.display = "block";
    $("#"+id).animate({opacity: "1"},300);
    menuSmallScreenOptimize ();
}

function hideMenu (id) {
    $("#"+id).animate({opacity: "0"},300,"swing",function () {
        document.getElementById(id).style.display = "none";
        if (id == "nav-menu-1")
            document.getElementById("nav-menus").style.display = "none";
    });
}

function resetAllMenu () {
    $("#nav-menus").animate({opacity: "0"},300,"swing",function () {
        $(this).css("display", "none");
        $(this).css("opacity", 1);
        $(this).children().css("display", "none");
        $(this).children().css("opacity", 0);
    });
}

function menuSmallScreenOptimize () {
    var h = window.innerHeight;
    var menuList = $("#nav-menus").children();
    var content, contentHeight
    for (var i=0; i<menuList.length; i++){
        content = menuList[i].getElementsByClassName("nav-menu-content")[0];
        contentHeight = content.offsetHeight;
        if (contentHeight > h){
            content.classList.add("small-screen");
        } else{
            content.classList.remove("small-screen");
        }
    }
}

function scrollToTop () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function updatePage (command) {
    if (command != 'search') {
        mode='normal';
        document.getElementById("search-bar").getElementsByTagName("input")[0].value='';
    }
        
    
    if (command == "video" || command == "search"){
        scrollToTop ();
        $(".video-frame").remove();
        $("#search-bar").css("display", "flex");
        $(".readme").css("display", "none");
        updateVideoElements ();
        if (document.getElementsByClassName('video-frame').length==0) {
            $("#page-end").empty();
            $("#page-end").append('<p>无结果</p><p>如果遇到困难请先阅读“注意事项”的“关于网页使用”部分：）</p>');
        }
        $("#page-end").css("display", "block");
    } else if (command == "readme") {
        $(".readme").css("display", "block");
        $("#search-bar").css("display", "none");
        $("#page-end").css("display", "none");
        $(".video-frame").css("display", "none");
    } else {
        alert("Function updatePage (command) takes an invalid 'command' parameter: "+command);
    }
    if ($('#nav-btn').hasClass('active')) {
        navUpdate ();
    }
}

function smoothUpdatePage (command, rangeId, fct = function () {}) {
    $('#'+rangeId).fadeTo(300, 0, function () {
        updatePage (command);
        $(this).delay(0).fadeTo(300, 1, fct);
    });
}

function search (input) {
    var keys = document.getElementById('key').getElementsByTagName('div');
    function matched (searchIn, searchFor) {
        var flag = true;
        searchFor = searchFor.split(' ');
        for (var i=0; i<searchFor.length; i++) {
            if (searchIn.indexOf(searchFor[i])==-1) {
                flag = false;
            }
        }
        return flag;
    }
    if (input == '') {
        smoothUpdatePage ('video','videos');
    }
    else {
        searchList = [];
        for (var i=0; i<keys.length; i++){
            if (matched ($(keys[i]).text(),input) || matched ($(keys[i]).text().replace(/ /g, ""),input)){
                searchList.push(videoList[i]);
            }
        }
        mode='search';
        smoothUpdatePage ('search','videos');
    }
}

function goTo (id) {
    if (mode == 'normal') {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        if (document.getElementById(id)!=null){
            document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            mode == 'normal';
            smoothUpdatePage ('video','main', function () {
                while (document.getElementById(id)==null) {
                   updateVideoElements ();
                }
                document.getElementById(id).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    }
}

function addGoogleTranslateElement (status) {
    if (!status) {
        var element = "<p class='unavailable'>您所在的国家/地区暂不提供此服务</p>";
        $("#google_translate_element").empty();
        $("#google_translate_element").append(element);
    }
}

function googleTranslateMonitor () {
    var mutationObserver = new MutationObserver(function () {googleTranslateReset ();});
    mutationObserver.observe(document.getElementById("google_translate_element"), {
        attributes: false,
        characterData: false,
        childList: true,
        subtree: true,
        attributeOldValue: false,
        characterDataOldValue: false
    });
    mutationObserver.observe(document.getElementsByTagName("body")[0], {
        attributes: true,
        characterData: false,
        childList: false,
        subtree: false,
        attributeOldValue: false,
        characterDataOldValue: false
    });
}

function googleTranslateReset () {
    $(".goog-te-banner-frame").remove();
    $("body").css("top", 0);
    $(".goog-te-combo option[value!='zh-TW'][value!='zh-CN'][value!='']").remove();
}

function googleStatusCheck () {
    var image = document.getElementById("ip_check_img");
    image.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    image.onload=function(){addGoogleTranslateElement (true);console.log('Google is available');};
    image.onerror=function(){addGoogleTranslateElement (false);console.log('Google is not available');};
    image.onabort=function(){addGoogleTranslateElement (false);console.log('Google is not available');};
}

function mobileCheck() {
    var isMobile = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(navigator.userAgent);
    return isMobile;
}

window.addEventListener('load', function () {
    googleTranslateReset ();
    googleTranslateMonitor ();
    setTimeout(function () {
        $("#loadingScreen").fadeOut(500);
    }, 3000)
})
