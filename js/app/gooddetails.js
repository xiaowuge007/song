/**
 * Created by LoveJYl on 2017/1/12.
 */
$(window).load(function(){
    $("._current").mouseenter(function(){
        $("#_nav-box").css("display","block")
        $("#_nav-second").stop().slideDown(100);
    })
    var a =333;
    $("._current").mouseleave(function(){
            $("#_nav-box").css("display","none")
            $("#_nav-second").stop().slideUp(100);
    })

    $("#_nav-second li").mouseover(function(){
        $("._nav-third").hide();
        $("._nav-third").eq($(this).index()).show().stop().animate({left:"210px"},300);

    })
    $("#_nav-second li").mouseleave(function(){
        $("._nav-third").eq($(this).index()).stop().animate({left:"-300px"},300) ;
    })
    //图片选项卡
    $("#_good-choice img").hover(function(){
        $("#smallimg>img").attr("src",$(this)[0].src);
    })
    $("#_good-main-right p img").click(function(){
    $("#smallimg>img").attr("src",$(this)[0].src);
    $("#_good-main-right p img").css("border","#ccc 1px solid");
    $(this).css("border","#f00 1px solid");
    })
    //放大镜效果
    $("#smallimg").mouseenter(function(){
        $("#smallview").css("display","block");
        $("#bigview").css("display","block");
        $("#bigimg").attr("src",$("#smallimg>img")[0].src);
        $("#smallview").css("width",$("#smallimg").width()*$("#bigview").width()/$("#bigimg").width());
        $("#smallview").css("height",$("#smallimg").height()*$("#bigview").height()/$("#bigimg").height());
        $(document).mousemove(function(e){
            e = e || window.event;
            var $el = e.pageX;
            //console.log($el);
            var $et = e.pageY;
            var $sl = $el - $("#smallimg").position().left - ($("#smallview").width()/2);
            //console.log($sl);
            var $st = $et - $("#smallimg").position().top - ($("#smallview").height()/2);
            $("#smallview").css("left",$sl);
            $("#smallview").css("top",$st);
            if($("#smallview").position().left < 0){
                $("#smallview").css("left",0);
            }
            if($("#smallview").position().left > $("#smallimg").width() - $("#smallview").width()){
                $("#smallview").css("left",$("#smallimg").width() - $("#smallview").width());
            }
            if($("#smallview").position().top < 0){
                $("#smallview").css("top",0);
            }
            if($("#smallview").position().top > $("#smallimg").height()- $("#smallview").height()){
                $("#smallview").css("top",$("#smallimg").height()-$("#smallview").height());
            }
            var $bl = $("#smallview").position().left*$("#bigimg").width()/$("#smallimg").width();
            var $bt = $("#smallview").position().top*$("#bigimg").height()/$("#smallimg").height();
            $("#bigimg").css({
                left:-$bl,
                top:-$bt
            });
        })
    })
    $("#smallimg").mouseleave(function(){
        $("#smallview").css("display","none");
        $("#bigview").css("display","none");
    })
    //购物车效果:
        $("#_jion").click(function(){
                var $img = $("<img>");
                $img.attr("src",$("#smallimg img")[0].src);
                $img.addClass("pic-car");
                $("#_jion").append($img);
               /* $img.animate({
                    //直线动画
                    left:$("#_shoping-car").offset().left -$img.offset().left,
                    top:$("#_shoping-car").offset().top-$img.offset().top
                },1000,function(){
                    $img.css("display","none")
                })*/

            var $start ={
                x:$img.offset().left,
                y:$img.offset().top,
            }
            var $end = {
                x:$("#_shoping-car").offset().left - $img.offset().left,
                y:$("#_shoping-car").offset().top - $img.offset().top
            }

            var $a = 0.001;
            var $b = ($end.y-$a*$end.x*$end.x)/$end.x;
            var $speed = 10;
            var $t = setInterval(function(){
                $img.css({
                    left: $speed,
                    top:$a*$speed*$speed + $b*$speed
                })
                $speed+=10;
                if($img.position().left >= $end.x || $img.position().top >= $end.y){
                    clearInterval($t);
                    $img.remove();
                }
            },1)
        })
})