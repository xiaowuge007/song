/**
 * Created by LoveJYl on 2017/1/12.
 */
$(window).load(function(){
    $("#_goodslist-nav li").eq(3).click(function(){
        $(this).removeClass("_price1");
        $(this).addClass("_price2");
        $("#_goodslist-nav li").not($(this)).removeClass("pro-li");
        $("._good-pic-cont").eq(3).css("display","block");
    })
    $("#_goodslist-nav li").not($("#_goodslist-nav li").eq(3)).click(function(){
        $("#_goodslist-nav li").removeClass("pro-li");
        $(this).addClass("pro-li");
        $("#_goodslist-nav li").eq(3).removeClass("_price2");
        $("#_goodslist-nav li").eq(3).addClass("_price1");
        $("._good-pic-cont").css("display","none");
        $("._good-pic-cont").eq($(this).index()).css("display","block");
    })
    $(".pages-1").click(function(){
            $(".pages-1").removeClass("page-now");
            $(this).addClass("page-now");
    })
    //购物车
    $("._good-pic-box").click(function(event){
        var $target = $(event.target);
        //console.log($target.is("i") || $target.is("em"));
        if($target.is("i") || $target.is("em")){
            //console.log($target.parent().parent().parent().children().eq(0).children()[0].src);
            var $img = $("<img>");
            $img.attr("src",$target.parent().parent().parent().children().eq(0).children()[0].src);
            $target.parent().parent().append($img);
            $img.css({
                position:"absolute",
                width:"34px",
                height:"34px",
                top:0,
                left:0
            })
            console.log($target.parent().parent().offset().left,$target.parent().parent().offset().top)
            $img.animate({
                left:"20px",
                top:"-40px"
            },10).animate({
                left:$("#_shoping-car").offset().left -$target.parent().parent().offset().left,
                top:$("#_shoping-car").offset().top-$target.parent().parent().offset().top
            },500,function(){
                $img.remove();
            })
        }
    })
})