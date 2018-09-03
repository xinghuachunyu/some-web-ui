/*
* @Author: name
* @Date:   2018-07-10 11:51:54
* @Last Modified by:   name
* @Last Modified time: 2018-07-10 17:41:18
*/

//'use strict';
//setInterval(function(){
//  var timer = document.getElementById("timer");
//  var num = parseInt(timer.innerHTML);
//  if(num > 0){
//      num--;
//  }else if(num == 0){
//      clearInterval();
//  }
//  timer.innerHTML = num;
//}, 1000);
var num=60;                                                                                               //初始化计数器
	document.getElementById("timer").innerHTML=num+"秒";            //在页面中显示10秒
	var tim=setInterval(function (){                                                      //定义匿名函数，
	num--;                                                                                       //函数每调用一次num减一
	document.getElementById("timer").innerHTML=num+"秒";       //
		if(num==1)
		{                                                                              //当num变为1的时候，通过 clearInterval()结束倒计时
		clearInterval(tim);
         }
   },1000);                                                                                         //每隔一秒执行一次该匿名函数

var centerTxt;
var centerColor;
var bottomTxt;
var bottomColor;

function getClick(a){
    if(getTxt(centerColor) == a.innerHTML){
    	
    	    	
        change();
        var number = document.getElementById('number');
        number.innerHTML = parseInt(number.innerHTML) + 1;
    }
}

function change(){
    centerTxt = Math.floor(Math.random()*5 + 1);
    centerColor = Math.floor(Math.random()*5 + 1);
    bottomTxt = generateArray();
    bottomColor = generateArray();

    document.getElementById('c1').innerHTML = getTxt(centerTxt);
    document.getElementById('c1').style.color = getColor(centerColor);
    for(var i = 1; i <= 5; i++){
        document.getElementById("b" + i).innerHTML = getTxt(bottomTxt[i-1]);
        document.getElementById("b" + i).style.color = getColor(bottomColor[i-1]);
    }
}
function generateArray(){
    var nums = [1, 2, 3, 4, 5];
    var a = 1, b = 1, temp = 1;
    for(var i = 0; i < 5; i++){
        a = Math.floor(Math.random()*5 + 1);
        b = Math.floor(Math.random()*5 + 1);
        temp = nums[a-1];
        nums[a-1] = nums[b-1];
        nums[b-1] = temp;
    }

    return nums;
}

function getTxt(txt){
    var txt;
    switch(txt){
        case 1:
            txt = "黄";
            break;
        case 2:
            txt = "紫";
            break;
        case 3:
            txt = "绿";
            break;
        case 4:
            txt = "蓝";
            break;
        case 5:
            txt = "红";
            break;
    }
    return txt;
}
function getColor(color){
    var color;
    switch(color){
        case 1:
            color = "yellow";
            break;
        case 2:
            color = "purple";
            break;
        case 3:
            color = "green";
            break;
        case 4:
            color = "blue";
            break;
        case 5:
            color = "red";
            break;
    }
    return color;
}

change();