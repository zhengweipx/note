$(document).ready(function(){
	let arr=[];
	let huase=['h','c','d','s'];
	let sign={};
	while(arr.length<52){
		let shuzi=Math.ceil(Math.random()*13);
		let hua=huase[Math.floor(Math.random()*huase.length)];
		if(!sign[shuzi+hua]){
			sign[shuzi+hua]=true;
			arr.push({shuzi,hua});
		}	
	}
	//console.log(arr)
	let n=0;
	for(let i=0;i<7;i++){
		for(let j=0;j<i+1;j++){
		 	$("<li class='pai'>").attr('id',i+''+j).attr('value',arr[n].shuzi).css('background-image',`url(img/${arr[n].shuzi}${arr[n].hua}.png)`).delay(n*50).animate({
		 		left:300-50*i+100*j,
		 		top:50*i,
		 		opacity:1
		 	},400).appendTo('ul');
		 	n++
		}
	}
	for(;n<52;n++){
		$("<li class='pai zuo'>").attr('id',7+''+n).attr('value',arr[n].shuzi).css('background-image',`url(img/${arr[n].shuzi}${arr[n].hua}.png)`).delay(n*50).animate({
		 	left:100,
		 	top:520,
		 	opacity:1
		},400).appendTo('ul');
	}
	
	let current=null;
	$('.pai').click(function(){
		let x=$(this).attr('id').split('')[0];
		let y=$(this).attr('id').split('')[1];
		if(x<6){
			if($(`#${parseInt(x)+1}${y}`).length==1||$(`#${parseInt(x)+1}${parseInt(y)+1}`).length==1){
				return;
			}
		}
		$(this).toggleClass('active')
	
		if(!current){
			if($(this).attr('value')==13){
				console.log(1)
				$(this).animate({left:600,top:0,opacity:0},function(){
					$(this).remove();
				})
			}else{
				current=$(this);
			}
		}else{
			if(parseInt(current.attr('value'))+parseInt($(this).attr('value'))==13){
				$('.active').animate({left:600,top:0,opacity:0},function(){
					$('.active').remove();
				})
				current=null;
			}else{
				setTimeout(function(){
					$('.active').removeClass('active')
				},400);
				current=null;
			}
		}	
	})
	
	let zindex=1;
	$('.right').click(function(){
		$('.zuo').last().addClass('you').removeClass('zuo').css('z-index',zindex++).animate({
			left:500,
			top:520
		}).removeClass('active');
		current=null;
	})
	$('.left').click(function(){
		$('.you').each(function(index,value){
			$('.you').addClass('zuo').removeClass('you').css('z-index',zindex++).delay(index*50).animate({
				left:100,
				top:520
			}).removeClass('active');
		})
		current=null;
	})
	
})



