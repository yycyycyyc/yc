var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    effect: 'effect',
    speed: 3000,
    paginationClickable: true,

    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    // 如果需要滚动条
//        scrollbar: '.swiper-scrollbar',
})


//
//var immigration = document.getElementById("immigration")
//var immleft = document.getElementById("immleft")
//var immright = document.getElementById("immright")
//var bantop=document.getElementById("bantop")
//console.log(bantop)
//var banrig = document.getElementById("banrig")
//var banleft = document.getElementById("banleft")
//var ulobj = document.querySelector("ulobj")
//console.log(ulobj)
//var ulobj1 = document.querySelector("ulobjj")
//console.log(ulobj1)
//banleft.onmouseover = immleft.onmouseover = function () {
//    ulobj.style.display = "block"
//}
//banleft.onmouseout = immleft.onmouseout = function () {
//    ulobj.style.display = "none"
//}
//banrig.onmouseover = immright.onmouseover = function () {
//    ulobj1.style.display = "block"
//}
//banrig.onmouseout = immright.onmouseout = function () {
//    ulobj1.style.display = "none"
//}

/***********************选项卡***************************/
var box = document.getElementById("box");
var uls = document.getElementsByClassName("ul")[0]
//var lis = uls.getElementsByTagName("li");
var lis = uls.getElementsByTagName("li")
var odivs = box.getElementsByTagName("div")
var shu = box.getElementsByTagName("div")[0];
console.log(odivs)
for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;//存储i值
    lis[i].onclick = function () {//给所有的li添加点击事件
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = "";//清除所有li的class类名
            odivs[j].className = "";//清除所有p的class类名 }    this.className="cover";//当点击当前的li时给添加class类名     p[this.index].className="dis";//当点击的时候显示当前所对应p 的class类名
        }
        this.className = "on";//当点击当前的li时给添加class类名
        odivs[this.index].className = "shu";//当点击的时候显示当前所对应p 的class类名

    }
}


var boxOn = document.getElementById('rotate');
console.log(boxOn)
var move = boxOn.querySelector("ul")[0];
var alis = boxOn.querySelectorAll("li");
console.log(boxOn);
var ostyle = document.querySelector("style")
for (var i = 0; i < alis.length; i++) {
    (function (i) {
        window.setTimeout(function () {
            ostyle.innerHTML += ".rotate-left ul li:nth-child(" + (i + 1) + "){transform:rotateY(" + (alis.length - 1 - i) * 36 + "deg)translateZ(200px);transition:0.7s}"
        }, i * 100)
    })(i)
}

var rightimg = document.getElementById("rightimg")
var pauses = document.getElementById("pause")
var aud = document.getElementById("aud")
rightimg.onclick = function () {
    aud.play()
    pauses.style.display = "block"
    rightimg.style.display = "none"

}
pauses.onclick = function () {
    aud.pause()
    rightimg.style.display = "block"
    pauses.style.display = "none"

}


$('#foor p').each(function () {
    $(this).mouseover(function () {
        $(this).css('display', 'none');
    })
    $('#foor div').mouseleave(function () {
        $('#foor p').css('display', 'block');
    })
})


//var gotop = document.getElementById("gotop")
//window.onscroll = function () {
//    gotop.onclick = function () {
//        var zhong = document.documentElement.scrollTop || document.body.scrollTop;
//        var shi = 1000;
//        var pin = 200;
//        var bu = zhong / shi * pin;
//        var time = setInterval(function () {
//            var dang = document.documentElement.scrollTop || document.body.scrollTop;
//            if (dang < 0) {
//                clearInterval(time);
//                return
//            }
//            dang -= bu
//            document.documentElement.scrollTop = document.body.scrollTop = dang;
//        }, pin)
//    }
//}
