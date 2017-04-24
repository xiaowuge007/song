/**
 * Created by LoveJYl on 2017/1/13.
 */

 /*$(window).load(function(){
            //var $subs = get
         $("._subtract").click(function(){
         var $_value = $("._subtract").get($(this).index()).val();
         console.log($(this).index());
         if($_value > 1){
         $("#_car-list ._num").eq($(this).index()).val($_value-1);
         }
         })
         $("._add").click(function(){
         var $_value = parseInt($("._num").eq($(this).index()).val());
         $("._num").eq($(this).index()).val($_value+1);
     })
 })*/
window.onload=function(){
    var subs = document.getElementsByClassName("_subtract");
    var adds = document.getElementsByClassName("_add");
    var nums = document.getElementsByClassName("_num");
    //console.log(subs,adds,nums);
    for(var i=0;i< subs.length;i++){
        subs[i].index =i;
        subs[i].onclick = function(){
           var _value = nums[this.index].value;
           if(_value >1){
               nums[this.index].value = _value -1;
           }
        }
    }
    for(var x= 0;x<adds.length;x++){
        adds[x].index =x;
        adds[x].onclick = function(){
            var _value = nums[this.index].value;
            nums[this.index].value = parseInt(_value) +1;
        }
    }
}
//吸底菜单
$(window).load(function(){
    var $top = $("._car-bottom").offset().top;
    //console.log($top);
    var $t = $(window).height() - $("._car-bottom").outerHeight();
    //console.log($t);
    if($top>$t){
        $("._car-bottom").addClass("car-bot");
        $(window).scroll(function(){
            //console.log($("._car-bottom").offset().top)
            if($(document).scrollTop() > $top-$(window).height()+$("._car-bottom").outerHeight()){
                $("._car-bottom").removeClass("car-bot");
            }else{
                $("._car-bottom").addClass("car-bot");
            }
        })
    }
    //反选，全选

    $("th input").click(function(){
        if($(this).prop("checked") == true){
            $("tr input").prop("checked",true);
            $("#_car-bot input").prop("checked",true);
        }else{
            $("tr input").prop("checked",false);
            $("#_car-bot input").prop("checked",false);
        }
    })
    $("#_car-bot  input").click(function(){
        if($(this).prop("checked") == true){
            $("tr input").prop("checked",true);
            $("th input").prop("checked",true);
        }else{
            $("tr input").prop("checked",false);
            $("th input").prop("checked",false);
        }
    })
    $("td input").each(function(i,dom){
        $("td input").eq(i).click(function(){
           if($("td input").prop("checked") == true){
               $("#_car-bot input").prop("checked",true);
               $("th input").prop("checked",true);
           }else{
               $("#_car-bot input").prop("checked",false);
               $("th input").prop("checked",false);
           }
        })
    })
    //删除商品
        $("td em").click(function(){
            console.log($(this).parent().parent())
            $(this).parent().parent().remove();
        })
})