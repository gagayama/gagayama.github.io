$(function(){
	//プログラム選択ボタン
	var $select_refalence=[
		$('#html-refarence'),
		$('#css-refarence'),
		$('#javascript-refarence'),
		$('#jquery-refarence')]

	$('.show-refarence-btn').click(function(){
		var selectNo=$(this).data('select-no');
		var $refalence=$select_refalence[selectNo];
		//項目へジャンプ
		var refalenceTop=$(".pg-wrapper").eq(selectNo).offset().top-10;
		$('html,body').animate({'scrollTop':refalenceTop},300);
		//クリック外のタイトル文字を下げる
		for (var i = 0; i < $select_refalence.length; i++) {
			if(!($(this).data('select-no')==i))
				$select_refalence[i].parent().find('h1').animate({'top':120},200); }
		//リファレンスを開く
		if($refalence.css('display')=='none'){
			$('.pg-title').eq(selectNo).find('h1').animate({'top':30},200)//クリックしたタイトル文字を上げる
			$('.refarence-prop').slideUp(100);//全ての文章を隠す
			$refalence.slideDown(100);//リファレンスを開く
		}else{
			$('.pg-title').eq(selectNo).find('h1').animate({'top':120},200);//クリックしたタイトル文字を下げる
			$refalence.slideUp(100);
		}
	});
	////////////////////////////////
	//プログラム選択ボタンhover時の設定
	$('.pg-title').hover(
		function(){
			var rgb=$(this).css('background-color');
			rgb=rgb.replace('0.3','1.0');
			$(this).css('background-color',rgb);
			$(this).css('cursor','pointer');
		},
		function(){
			var rgb=$(this).css('background-color');
			rgb=rgb.replace(')',',0.3)');
			rgb=rgb.replace('rgb','rgba');
			$(this).css('background-color',rgb);
		});

	//注意点開閉
	var $caution=$('.caution');
	$('.caution-open-btn').click(function(){
		if($caution.css('display')=="none"){
			$caution.fadeIn(200);
		}else{
			$caution.fadeOut(200);
			// $('.caution-title').fadeIn(200);
		}
	});
	//注意点スクロールボタン
	$('.arrow').click(function(){
		var caution_top=$caution.position().top;
		var up_down=1;
		if($(this).hasClass('down')){ up_down=-1;
		}else if($(this).hasClass('up')){ up_down=1 }
		caution_top+=100*up_down;
		$caution.animate({'top':caution_top},150);
	});

	//説明テキスト開閉
	$('.info-title').click(function(){
		if($(this).parent().find('.info-text').css('display')=="none"){
			$(this).parent().find('.info-text').slideDown(100);
		}else{
			$(this).parent().find('.info-text').slideUp(100);
		}
	});
});
/////////////////////
/* デバグメッセージ */
function debug_btn(){
  debug_mess("なにもなし");
}

function debug_mess(string){
  var temp=document.getElementById('DM');
  temp.innerHTML=string;
}

function btn_dispMove(){
  temp=document.getElementById('debug_mess');
  temp.style.left=70+"%";
}
