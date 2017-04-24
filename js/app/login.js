/**
 * Created by LoveJYl on 2017/1/7.
 */

window.onload = function(){
    function verification(dom,showdom,rules,right,wrong){
        var _id = document.getElementById(dom);
        var _sid = document.getElementById(showdom);
        _id.onkeyup = function(){
            var _rule = rules;
            if(_id.value.trim() == ""){
                _sid.textContent = "不能为空";
                _sid.style.color = "#f00";
            }else{
                if(_rule.test(_id.value)){
                    _sid.textContent = right;
                    _sid.style.color = "#0f0";
                    _sid.style.fontWeight = "900";
                }else{
                    _sid.textContent = wrong;
                    _sid.style.color = "#f00";
                }
            }
        }
    }
    verification("_uname","_un-show",/[a-z0-9]{6,20}/,"用户名格式正确","用户名格式输入不正确");
    verification("_pw","_pw-show",/([A-z]{1,}[0-9]{1,}\w{4,18}|[A-z]{1,}[\W_]{1,}\w{4,18}|[0-9][\W_]{1,}\w{4,18})/,"密码格式正确","密码格式输入不正确");
    var _pwAffirm = document.getElementById("_pw-affirm");
    var _spwAffirm = document.getElementById("_spw-affirm");
    var _pw = document.getElementById("_pw");
    var _spw = document.getElementById("_spw")
    //if(_spw.textContent == "密码格式正确"){
    _pwAffirm.onkeyup = function(){
        if(_pwAffirm.value.trim() != ""){
            if(_pwAffirm.value == _pw.value){
                _spwAffirm.textContent = "密码确认成功";
                _spwAffirm.style.color = "#0f0";
                _spwAffirm.style.fontWeight = "900";
            }else{
                _spwAffirm.textContent = "请重新确认密码";
                _spwAffirm.style.color = "#f00";
            }
        }else{
            _spwAffirm.textContent = "不能为空";
            _spwAffirm.style.color = "#f00";
        }
    }

   // }
    //验证码
    var _arr =[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","s","y","z"];
    var _verify = document.getElementById("_verify-code");
    var _verifyBtn = document.getElementById("_verify-btn");
    _verify.innerHTML = _arr[Math.floor(Math.random() * _arr.length)]  +"  "+
                            _arr[Math.floor(Math.random() * _arr.length)]+"  "+
                            _arr[Math.floor(Math.random() * _arr.length)]+"  "+
                            _arr[Math.floor(Math.random() * _arr.length)];
    _verifyBtn.onclick = function(){
        _verify.innerHTML = _arr[Math.floor(Math.random() * _arr.length)]  +"  "+
            _arr[Math.floor(Math.random() * _arr.length)]+"  "+
            _arr[Math.floor(Math.random() * _arr.length)]+"  "+
            _arr[Math.floor(Math.random() * _arr.length)];
    }
}
