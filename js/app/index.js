/**
 * Created by LoveJYl on 2017/1/5.
 */
window.onload = function(){
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay:5000,
        autoplayDisableOnInteraction : false,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        //paginationType : 'fraction',
        //paginationType : 'progress',
        // paginationType : 'custom',
        paginationClickable :true,
        paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        /*// 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',*/
    })
}

$(function(){
    $("#_nav-second li").mouseover(function(){
        $("._nav-third").hide();
        $("._nav-third").eq($(this).index()).show().stop().animate({left:"210px"},300);

    })
    $("#_nav-second li").mouseleave(function(){
        $("._nav-third").eq($(this).index()).stop().animate({left:"-300px"},300) ;
    })
    //banner图轮播
    //商品选项卡效果不封装效果（专利果切选项卡效果）
    $("#_guoqie-nav li").mouseover(function() {
        $("#_guoqie-details ._good-right").hide();
        $("#_guoqie-details ._good-right").eq($(this).index()).show();
        $("#_guoqie-show ol").css("display","none");
        $("#_guoqie-show ol").removeClass("_current-show");
        $("#_guoqie-show ol").eq($(this).index()).css("display","block");
        $("#_guoqie-show ol").eq($(this).index()).addClass("_current-show");
        $("#_guoqie-show ._current-show li").mouseover(function () {
            $("#_guoqie-show ._current-show li").css({height: "59px", listStyle: "decimal", listStylePosition: "inside"});
            $("#_guoqie-show ._current-show li").eq($(this).index()).css({height: "120px", listStyle: "none"});
            $("#_guoqie-show ._current-show ._good-show-top").css("display", "block");
            $("#_guoqie-show ._current-show ._good-show-top").eq($(this).index()).css("display", "none");
            $("#_guoqie-show ._current-show ._good-show-bot").css("display", "none");
            $("#_guoqie-show ._current-show ._good-show-bot").eq($(this).index()).css("display", "block");
        })
    })
    $("#_guoqie-show ._current-show li").mouseover(function () {
        $("#_guoqie-show ._current-show li").css({height: "59px", listStyle: "decimal", listStylePosition: "inside"});
        $("#_guoqie-show ._current-show li").eq($(this).index()).css({height: "120px", listStyle: "none"});
        $("#_guoqie-show ._current-show ._good-show-top").css("display", "block");
        $("#_guoqie-show ._current-show ._good-show-top").eq($(this).index()).css("display", "none");
        $("#_guoqie-show ._current-show ._good-show-bot").css("display", "none");
        $("#_guoqie-show ._current-show ._good-show-bot").eq($(this).index()).css("display", "block");
    })
    //商品列表选项卡效果封装
    function goods(dom1,dom2,dom3,dom4,dom5,dom6){
        $(dom1).mouseover(function(){
            $(dom2).hide();
            $(dom2).eq($(this).index()).show();
            $(dom3).hide();
            $(dom3).removeClass("_current-show");
            $(dom3).eq($(this).index()).show();
            $(dom3).eq($(this).index()).addClass("_current-show");

            $(dom4).mouseover(function(){
                $(dom4).css({height:"59px",listStyle:"decimal",listStylePosition:"inside"});
                $(dom4).eq($(this).index()).css({height:"120px",listStyle:"none"});
                $(dom5).css("display","block");
                $(dom5).eq($(this).index()).css("display","none");
                $(dom6).css("display","none");
                $(dom6).eq($(this).index()).css("display","block");
            })
        })
        $(dom4).mouseover(function(){
            $(dom4).css({height:"59px",listStyle:"decimal",listStylePosition:"inside"});
            $(dom4).eq($(this).index()).css({height:"120px",listStyle:"none"});
            $(dom5).css("display","block");
            $(dom5).eq($(this).index()).css("display","none");
            $(dom6).css("display","none");
            $(dom6).eq($(this).index()).css("display","block");
        })
    }
    goods("#_guoyin-nav li",
            "#_guoyin-details ._good-right",
            "#_guoyin-show ol",
            "#_guoyin-show ._current-show li",
            "#_guoyin-show ._current-show ._good-show-top",
            "#_guoyin-show ._current-show ._good-show-bot");
    goods("#_jinkou-nav li",
        "#_jinkou-details ._good-right",
        "#_jinkou-show ol",
        "#_jinkou-show ._current-show li",
        "#_jinkou-show ._current-show ._good-show-top",
        "#_jinkou-show ._current-show ._good-show-bot");
    goods("#_guochan-nav li",
        "#_guochan-details ._good-right",
        "#_guochan-show ol",
        "#_guochan-show ._current-show li",
        "#_guochan ._current-show ._good-show-top",
        "#_guochan-show ._current-show ._good-show-bot");

    $("#_bot-close").click(function(){
        $("#_bot").css("display","none");
    })
})