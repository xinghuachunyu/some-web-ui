<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    img{
      width: 1000px;
      height: auto;
      display: block;
    }
    .banner{
      width: 1000px;
      height: 375px;
      margin:0 auto;
      position: relative;
      overflow: hidden;
    }
    ul{
      padding: 0;
      margin:0;
      list-style:none;
      position: absolute;
      top:0;
      left:0;
      transition: all 0.5s;
    }
    ul li{
      float: left;
    }
    #prev,#next{
      position: absolute;
      width: 40px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      font-family: "宋体";
      font-size: 40px;
      color: #fff;
      background: rgba(0,0,0,0.6);
      top:50%;
      margin-top: -40px;
      text-decoration: none;
    }
    #prev{
      left: 0;
    }
    #next{
      right:0;
    }
    #dots{
      position: absolute;
      width: 100%;
      left: 0;
      bottom:10px;
      text-align: center;
    }
    #dots span{
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #000;
      border-radius: 50%;
      margin:0 2px;
      cursor: pointer;
    }
    #dots span.on{
      background: #fff;
    }
  </style>
</head>
<body>
  <div class="banner" id="banner">
    <ul id="list">
      <li><img src="./1.jpg" /></li>
      <li><img src="./2.jpg" /></li>
      <li><img src="./3.jpg" /></li>
      <li><img src="./4.jpg" /></li>
      <li><img src="./5.jpg" /></li>
      <li><img src="./6.jpg" /></li>
    </ul>
    <a href="javascript:;" id="prev">&lt;</a>
    <a href="javascript:;" id="next">&gt;</a>
    <div id="dots"></div>
  </div>
  <script>
    window.onload = function(){
      //获取DOM的函数
      function $(id){
        return document.getElementById(id)
      }
      var oLi = $("list").getElementsByTagName("li");
      var w = oLi[0].offsetWidth;
      $("list").style.width = w * oLi.length + "px";

      //添加小圆点
      var dots = "";
      for(var i=0;i<oLi.length;i++){
          dots += "<span></span>"
      }
      $("dots").innerHTML = dots;


      //定义一个变量，默认显示第几张
      var num = 0; //当前显示的是第几张
      //函数
      function scroll(){
        $("list").style.left = -w*num +"px";
        for(var i=0;i<oLi.length;i++){
          $("dots").getElementsByTagName("span")[i].className = "";
        }
        $("dots").getElementsByTagName("span")[num].className = "on";
      }
      scroll();
      //下一张
      $("next").onclick = function(){
        num++;
        if(num == oLi.length){
          num = 0;
        }
        scroll();
      }
      //上一张
      $("prev").onclick = function(){
        num--;
        if(num == -1){
          num = oLi.length - 1;
        }
        scroll();
      }
      //点击小圆点事件
      var oDots =  $("dots").getElementsByTagName("span");
      for(var j=0;j<oDots.length;j++){
        oDots[j].index = j;
        oDots[j].onclick = function(){
          num = this.index;
          scroll();
        }
      }

      var timer = setInterval(function(){
        num++;
        if(num == oLi.length){
          num = 0;
        }
        scroll();
      },2000)

      $("banner").onmouseover = function(){
        clearInterval(timer);
      }
      $("banner").onmouseout = function(){
        timer = setInterval(function(){
          num++;
          if(num == oLi.length){
            num = 0;
          }
          scroll();
        },2000)
      }
    }
  </script>
</body>
</html>
