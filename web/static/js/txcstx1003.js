$(function () {
    var winr = $(window);
    var surl = location.href;
    var surl2 = $(".place a:eq(1)").attr("href");

    $(".nav li a").each(function () {
        if ($(this).attr("href") == surl || $(this).attr("href") == surl2) $(this).parent().addClass("on");
    });

    $(".nav-on").click(function () {
        $(".wap-nav-box").animate({left: "0",});
        $(".wap-nav").fadeIn();
    });
    $(".nav-off,.nav-off1").click(function () {
        $(".wap-nav-box").animate({left: "-220",});
        $(".wap-nav").fadeOut();
    });

    $(".user-on").click(function () {
        $(".login-head").slideToggle();
    });


    if (winr.width() >= 800) {
        if ($('div').hasClass('info-fixed')) {
            var fixedh = $(".info-fixed").offset().top;
        }
        var dv = $(".info-fixed"), st;
        $(window).scroll(function () {
            st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            if (st > fixedh) {
                dv.addClass("info-fixed1");
            } else {
                dv.removeClass("info-fixed1");
            }
        });
    }

    $(".zp-on").click(function () {
        $('html,body').animate({scrollTop: $("#zpjj").offset().top}, 800);
    });

    // $("img.lazy").lazyload({threshold: -200, skip_invisible: true});
    var data = {
        os: navigator.platform,
        //pageId:document.title,
        referrer: document.referer,
        url: window.location.href,
        timeZone: new Date().getTimezoneOffset() / 60
    };



});

function checkSearch() {
    var searchInput = document.querySelector('#searchInput').value;
    var searchVal = searchInput.trim();
    if (searchVal == '') {
        showTip("哎呀，你好像忘记输入搜索内容了！");
        return false;
    }
    if (searchVal.length < 2) {
        showTip("搜索关键字至少需要2个字哟！");
        return false;
    }
    return true;
}


function showTip(str) {
    if (!$('#NBDiggTip')[0]) {
        $('body').append("<div id='NBDiggTip' class='NBDiggOK' ></div>")
    }
    $('#NBDiggTip').html(str);
    $("#NBDiggTip").fadeIn();
    setTimeout(function () {
        $("#NBDiggTip").fadeOut();
    }, 3000);
}


/**
 * 获取URL中的参数
 * @param name
 * @returns {string|null}
 */
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

/**
 * 设置cookie
 * @param cname
 * @param cvalue
 * @param exdays
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

/**
 * 读cookie
 * @param cname
 * @returns {string}
 */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function saveAGCookie() {
    var agCode = getUrlParam("ag");
    if (agCode && agCode.length > 0) {
        setCookie("agCode", agCode, 10)
    }
}


function showLoading() {
    var div = '<div class="loading">' +
        '    <div class="load_main">' +
        '        <i class="fa fa-spinner fa-spin"></i>' +
        '    </div>' +
        '</div>';
    if (!$('.loading')[0]) {
        $('body').append(div)
    }
    $('.loading').fadeIn(500);
}

function hideLoading() {
    if ($('.loading')[0]) {
        $('.loading').fadeOut(500);
    }
}


function tabs(tabTit, on, tabCon) {
    $(tabTit).children().click(function () {
        $(this).addClass(on).siblings().removeClass(on);
        var index = $(tabTit).children().index(this);
        $(tabCon).children().eq(index).show().siblings().hide();
    });
};
tabs(".tab-hd", "active", ".tab-bd");
$("a[data-id*='ad-']").on('click', function () {
    $.ajax({type: "get", url: ctx + "ad/addHit?id=" + $(this).attr("data-id").split("-")[1]});
})

// zbp.plugin.unbind("comment.reply", "system");
// zbp.plugin.on("comment.reply", "txtsj", function(id) {
//     var i = id;
//     $("#inpRevID").val(i);
//     var frm = $('#divCommentPost'),
//         cancel = $("#cancel-reply");
//
//     frm.before($("<div id='temp-frm' style='display:none'>")).addClass("reply-frm");
//     $('#AjaxComment' + i).before(frm);
//
//     cancel.show().click(function() {
//         var temp = $('#temp-frm');
//         $("#inpRevID").val(0);
//         if (!temp.length || !frm.length) return;
//         temp.before(frm);
//         temp.remove();
//         $(this).hide();
//         frm.removeClass("reply-frm");
//         return false;
//     });
//     try {
//         $('#txaArticle').focus();
//     } catch (e) {}
//     return false;
// });
//
// zbp.plugin.on("comment.get", "txtsj", function (logid, page) {
//     $('span.commentspage').html("提交中...");
// });
// zbp.plugin.on("comment.got", "txtsj", function (logid, page) {
//     $("#cancel-reply").click();
// });
// zbp.plugin.on("comment.postsuccess", "txtsj", function () {
//     $("#cancel-reply").click();
// });