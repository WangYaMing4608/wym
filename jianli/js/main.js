var mySwiper = new Swiper("#swiper",{
	direction:"vertical",
	onInit:function(swiper){
		swiperAnimateCache(swiper);
		swiperAnimate(swiper);
	},
	onSlideChangeEnd:function(swiper){
		swiperAnimate(swiper);
	}
});
var isPlay = true;
var musicBtn = document.getElementById("musicBtn");
var ado = document.getElementById("ado");

musicBtn.onclick = function(){
	console.log("2")
	if(isPlay){
		ado.play();
		isPlay = false;
		musicBtn.src = "img/musicBtn.png"
	}else{
		ado.pause();
		isPlay = true;
		musicBtn.src = "img/musicBtnOff.png"
		
	}
}
musicBtn.click();