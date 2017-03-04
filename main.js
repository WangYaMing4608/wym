// JavaScript Document



$(function(){	

	//$('.doc').css('top',-200+'%');          //椤甸潰鍒锋柊锛岀洿鎺ュ憟鐜扮3灞�
	$('.screen01').removeClass('start');   //椤甸潰鍒锋柊锛岃棣栧睆鍘绘帀start

	var num = 0;
	var timer = null;

document.onselectstart=function (){ return false;}
	$('.gps li').click(function(){	
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.doc').stop().animate({top:-index*100+'%'},300);
		$('.doc>div').eq(index).removeClass('start').siblings().addClass('start');
		num=index
	})


	$(window).mousewheel(function(e,d){	
		clearTimeout(timer);
		timer = setTimeout(function(){	
			num=num-d;
			if(num>3){num=3}
			if(num<0){num=0}
			$('.gps li').eq(num).addClass('current').siblings().removeClass('current');
			$('.doc').stop().animate({top:-num*100+'%'},300);
			$('.doc>div').eq(num).removeClass('start').siblings().addClass('start');
			$('.look li').eq(0).addClass('current').siblings().removeClass('current')
            $('.screen03 .app').css('display','block')
			$('.screen03 .icon ul').css({'top':'-500px',opacity:0})
			$('.screen03 .banner').css({'transform':'scale(0.2)',opacity: 0,'transition':'none'})
			$('.screen03 .web').css({'opacity':0,'transition':'none'})
		},300)
	})
	
	/*web涓夌淮鏃嬭浆*/
	;(function(){
			$('.app ul li').each(function(index, element) {
				var index=index*45
				var num=index/45+1
                $(element).css({ 'transform':'rotateY('+index+'deg) translateZ(350px)','background':'url(images/a'+ num +'.png) no-repeat','background-size':'cover'})
			})
	})();

	/*鐐瑰嚮鍒囨崲鏄剧ず*/
	;(function(){
		$('.look li').eq(0).click(function(e) {
			$(this).addClass('current').siblings().removeClass('current')
            $('.screen03 .app').css('display','block')
			$('.screen03 .icon ul').css({'top':'-500px',opacity:0})
			$('.screen03 .banner').css({'transform':'scale(0.2)',opacity: 0,'transition':'none'})
			$('.screen03 .web').css({'opacity':0,'transition':'none'})
        });
		$('.look li').eq(1).click(function(e) {
			$(this).addClass('current').siblings().removeClass('current')
            $('.screen03 .icon ul').css('opacity','1').animate({top:0},500)
			$('.screen03 .app').css('display','none')
			$('.screen03 .banner').css({'transform':'scale(0.2)',opacity: 0,'transition':'none'})
			$('.screen03 .web').css({'opacity':0,'transition':'none'})
        });
		$('.look li').eq(2).click(function(e) {
			$(this).addClass('current').siblings().removeClass('current')
            $('.screen03 .banner').css({'transition':'all 2s',opacity:1,'transform':'scale(1)'})
			$('.screen03 .icon ul').css({'top':'-500px',opacity:0})
			$('.screen03 .app').css('display','none')
			$('.screen03 .web').css({'opacity':0,'transition':'none'})
			
		$('.screen03 .banner li').hover(function(){
			$(this).parent().css('animation-play-state','paused')
			$(this).siblings().css('opacity','0.1')
		},function(){
			$(this).parent().css('animation-play-state','running')
			$(this).siblings().css('opacity','1')
		})
        });
		$('.look li').eq(3).click(function(e) {
			$(this).addClass('current').siblings().removeClass('current')
            $('.screen03 .web').css({'opacity':1,'transition':'all 0.5s'})
			$('.screen03 .icon ul').css({'top':'-500px',opacity:0})
			$('.screen03 .banner').css({'transform':'scale(0.2)',opacity: 0,'transition':'none'})
			$('.screen03 .app').css('display','none')
        });
	})();
	//icon
	;(function(){
		$('.icon ul li').each(function(index, element) {
            var index=index+1
			$(element).css('background','url(images/icon'+index+'_small.jpg) no-repeat')
        });
	})();
	
	

})
$(function(){
			var imgL =$("#wrap img").size();
			var Deg = 360/imgL;
			var roY = 0, roX = -10, xn,yn,play=null;
			$("#wrap img").each(function(i){
				$(this).css('transform','rotateY('+ i*Deg +'deg) translateZ(350px)').attr('ondragstart','return false');
			});
			$(document).mousedown(function(ev){
				// console.log("按下了");
				var x_ = ev.clientX;
				var y_ = ev.clientY;
				$(this).bind('mousemove',function(ev){
					// console.log("移动le");
					var x = ev.clientX;
					var y = ev.clientY;
					 xn = x - x_;
					 yn = y - y_;
					roY += xn*0.2;
					roX -= yn*0.1;
					$('#wrap').css('transform','perspective(800px) rotateX('+ roX +'deg) rotateY('+roY+'deg)');
					// $(document.body).append('<div style="width:5px;height:5px;background:#f00;position:absolute;top:'+y+'px;left:'+x+'px;"></div>')
					 x_ = ev.clientX;
					 y_ = ev.clientY;
				});
			}).mouseup(function(){
				// console.log("抬起了")
				$(this).unbind('mousemove');
				play=setInterval(function(){
					xn= xn*0.95;
					yn=yn*0.95;
					if(Math.abs(xn) <= 0.5 && Math.abs(yn)<=0.5){
						clearInterval(play);
					}
					roY += xn*0.2;
					roX -= yn*0.1;
					$('#wrap').css('transform','perspective(800px) rotateX('+ roX +'deg) rotateY('+roY+'deg)');
				},30);
			});

		});




















