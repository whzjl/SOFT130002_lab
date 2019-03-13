
function createCode(len)
{
    var seed = ['abcdefghijklmnopqrstuvwxyz',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        '0123456789'];               //创建需要的数据数组
    var idx,i;
    var result = '';   //返回的结果变量
    for (i=0; i<len; i++) //根据指定的长度
    {
        idx = Math.floor(Math.random()*3); //获得随机数据的整数部分-获取一个随机整数
        result += seed[idx].substr(Math.floor(Math.random()*(seed[idx].length)), 1);//根据随机数获取数据中一个值
    }
    return result; //返回随机结果
}

function test() {
    var inputRandom=document.getElementById("inputRandom").value;
    var autoRandom=document.getElementById("autoRandom").innerHTML;
    if(inputRandom==autoRandom) {
        alert("通过验证");
    } else {
        alert("没有通过验证");
    }
}

function validate() {
    var pw1 = document.getElementById("pw1").value;
    var pw2 = document.getElementById("pw2").value;
    if(pw1 === pw2) {
        document.getElementById("tip").innerHTML="<font color='green'>两次密码相同</font>";
        document.getElementById("submit").disabled = false;
    }
    else {
        document.getElementById("tip").innerHTML="<font color='red'>两次密码不相同</font>";
        document.getElementById("submit").disabled = true;
    }
}
