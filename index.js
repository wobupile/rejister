
$(function(){
    var $codebtn = $('#codebtn'),
        $submitbtn = $('#submitbtn');

    $submitbtn.click(function(){
        user();
        tell();
        passwd();
        code(); 
        if(!user() || !tell() || !passwd() || !code()) return;
    })

    $codebtn.click(function(){
        var t = 5;
        var time = setInterval(function(){
            t--;
            $codebtn.val(t);
            $codebtn.attr("disabled",true);
            if(t==0){
                clearInterval(time);
                $codebtn.attr("disabled",false);
                $codebtn.val("获取验证码");
            }
        },1000)
    })
    function user(){
        var $data = $('#username'),
            $msg = $('#usernamemsg');
        if(!(/^[\da-zA-Z_\u4e00-\u9f5a]{2,10}$/.test($data.val())) || $data.val() === '' || /^\d{1,}$/.test($data.val())){
            $msg.html('用户名仅支持中英文，数字和下划线，且不能为纯数字');
            $data.css('border-color','red');
            return false;
        }else{
            $msg.html('');
            $data.css('border-color','');
            return true;
        }
    }
    function tell(){
        var $data = $('#tellnumber'),
            $msg = $('#tellnumbermsg');
        if(!(/^1[3456789]\d{9}$/.test($data.val())) || $data.val() === ''){
            $msg.html('手机号码格式不正确');
            $data.css('border-color','red');
            return false;
        }else{
            $msg.html('');
            $data.css('border-color','');
            return true;
        }
    }
    function passwd(){
        var $data = $('#password'),
            $msg = $('#passwordmsg');
        if($data.val() === ''){
            $msg.html('密码格式不正确');
            $data.css('border-color','red');
            return false;
        }else{
            $msg.html('');
            $data.css('border-color','');
            return true;
        }
    }
    function code(){
        var $data = $('#codeipt'),
            $msg = $('#codeiptmsg');

        if($data.val() === ''){
            $msg.html('请求超时，请稍后再试');
            $data.css('border-color','red');
            return false;
        }else{
            $msg.html('');
            $data.css('border-color','');
            return true;
        }
    }
})
