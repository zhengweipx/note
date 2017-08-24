window.onload=function(){
	let database=[
	{id:'c1',name:'风筝误',src:"music/刘珂矣 - 风筝误.mp3",img:'img/fzw.jpg',bigimg:'img/6.jpg',people:'刘珂矣',zuanji:'半壶纱',lyrics:[
            {time:"00:00",lyric:"风筝误 - 刘珂矣"},
            {time:"00:02",lyric:"词：刘珂矣/百慕三石"},
            {time:"00:04",lyric:"曲：刘珂矣/百慕三石"},
            {time:"00:06",lyric:"编曲：百慕三石"},
            {time:"00:40",lyric:"梨花树下卷丝轮 随风纷纷"},
            {time:"00:46",lyric:"谁裁木鹊一缕魂 落别村"},
            {time:"00:52",lyric:"风影无心惊扰了 对棋人"},
            {time:"00:58",lyric:"幔里和诗 怕春雨成盆"},
            {time:"01:05",lyric:"玉指揽风风不住 茜纱窗昏"},
            {time:"01:10",lyric:"舟上摇波波不停 渡影重温"},
            {time:"01:16",lyric:"错认庭前过马人 醉几分"},
            {time:"01:23",lyric:"一抹笙香 吹梦成真"},
            {time:"01:29",lyric:"风筝误 误了梨花花又开"},
            {time:"01:35",lyric:"风筝误 捂了金钗雪里埋"},
            {time:"01:41",lyric:"风筝误 悟满相思挂苍苔"},
            {time:"01:47",lyric:"听雨声 数几声 风会来"},
            {time:"02:19",lyric:"上元溪旁点烛荷 千盏承诺"},
            {time:"02:24",lyric:"怎挨雾锁红尘客 阴差阳错"},
            {time:"02:31",lyric:"阳台梦中风几里 又几何"},
            {time:"02:37",lyric:"梦醒推门  她仍在研墨"},
            {time:"02:42",lyric:"风筝误 误了梨花花又开"},
            {time:"02:49",lyric:"风筝误 捂了金钗雪里埋"},
            {time:"02:58",lyric:"风筝误 悟满相思挂苍苔"},
            {time:"03:01",lyric:"听雨声 数几声 风会来"},
            {time:"03:08",lyric:"风筝误 误了梨花花又开"},
            {time:"03:12",lyric:"风筝误 捂了金钗雪里埋"},
            {time:"03:19",lyric:"风筝误 悟满相思挂苍苔"},
            {time:"03:26",lyric:"听雨声 数几声 风会来"},
            {time:"03:31",lyric:"风筝误 悟了一句情似露珠"},
            {time:"03:38",lyric:"谁约我 又在这 风烟处"},
            {time:"03:44",lyric:"风筝误"},
            ]},
	{id:'c2',name:'芙蓉雨',src:"music/刘珂矣 - 芙蓉雨.mp3",img:'img/6.jpg',bigimg:'img/5.jpg',people:'刘珂矣',zuanji:'半壶纱',lyrics:[
            {time:"00:03",lyric:"芙蓉雨 - 刘珂矣"},
            {time:"00:06",lyric:"词：刘珂矣/百慕三石"},
            {time:"00:08",lyric:"曲：刘珂矣/百慕三石"},
            {time:"00:37",lyric:"藕花香 染檐牙"},
            {time:"00:43",lyric:"惹那诗人纵步随她"},
            {time:"00:49",lyric:"佩声微 琴声儿退"},
            {time:"00:56",lyric:"斗胆了一池眉叶丹砂"},
            {time:"01:02",lyric:"画船开 心随他"},
            {time:"01:08",lyric:"谁不作美偏起风沙"},
            {time:"01:15",lyric:"倚蓬窗 月色轻晃"},
            {time:"01:22",lyric:"偶闻得渔翁一席话"},
            {time:"01:28",lyric:"试问 多一份情又怎地"},
            {time:"01:32",lyric:"站在别人的雨季"},
            {time:"01:36",lyric:"淋湿自己空弹一出戏"},
            {time:"01:41",lyric:"空望他 功成名就又怎地"},
            {time:"01:46",lyric:"豆腐换成金羽衣"},
            {time:"01:49",lyric:"岂不知你已在画里"},
            {time:"02:20",lyric:"画船开 心随他"},
            {time:"02:27",lyric:"谁不作美偏起风沙"},
            {time:"02:33",lyric:"倚蓬窗 月色轻晃"},
            {time:"02:40",lyric:"偶闻得渔翁一席话"},
            {time:"02:46",lyric:"试问 多一份情又怎地"},
            {time:"02:50",lyric:"站在别人的雨季"},
            {time:"02:53",lyric:"淋湿自己空弹一出戏"},
            {time:"02:59",lyric:"空望他 功成名就又怎地"},
            {time:"03:03",lyric:"豆腐换成金羽衣"},
            {time:"03:07",lyric:"岂不知你已在画里"},
            {time:"03:13",lyric:"多一份情又怎地"},
            {time:"03:16",lyric:"站在别人的雨季"},
            {time:"03:19",lyric:"淋湿自己空弹一出戏"},
            {time:"03:25",lyric:"空望他 功成名就又怎地"},
            {time:"03:29",lyric:"豆腐换成金羽衣"},
            {time:"03:32",lyric:"岂不知你已在画里"},
            {time:"03:45",lyric:"这一搭 莲蓬子落地 几回迷"},
            ]},
	{id:'c3',name:'睡蓮',src:"music/贾鹏芳 - 睡蓮.mp3",img:'img/6.jpg',bigimg:'img/5.jpg',people:'贾鹏芳',zuanji:'遥',},
	{id:'c4',name:'听听我的心',src:"music/韩信 - 听听我的心.mp3",img:'img/6.jpg',bigimg:'img/4.jpg',people:'韩信',zuanji:'听听我的心'}
	]
	let list=document.querySelector(".list");
	let section=document.querySelector('section');
	let body=document.querySelector('body');
	let l=document.querySelector('.lyrics ul');
	let t=document.querySelector('.lyrics .title');
	let name1=document.querySelector('.lyrics .name1');
	database.forEach(function(value,index){
		let li=document.createElement("ul");
		li.id=value.id;
		li.innerHTML=`<li class="iconfont"></li>
					<li>${value.name}</li>
					<li>${value.people}</li>
					<li>${value.zuanji}</li>
					<li class="iconfont icon-shanchu"></li>`;
					if(index==0){
						li.classList.add('active');
					}	
		section.appendChild(li);
	})
	let audio=document.querySelector("audio");
	audio.src=database[0].src;
	body.background=database[0].bigimg;
	audio.oncanplay=()=>{
//		console.log(1);
		let load=document.querySelector(".load");
		load.style.width="100%";
	}
	let menu=document.querySelector('.menu');
	menu.onclick=function(){
		section.classList.toggle('active');
	}
//	定义播放按钮
	let current=0;
	let play=document.querySelector(".bofang span:nth-child(2)");
	play.onclick=function(){
		if(audio.paused){         
			audio.play();
			play.classList.remove("icon-bofang");
			play.classList.add("icon-zanting1");
			section.children[current+2].children[0].classList.add('icon-zhsyinle2');
		}else{
			audio.pause();
			play.classList.remove("icon-zanting1");
			play.classList.add("icon-bofang");
			section.children[current+2].children[0].classList.remove('icon-zhsyinle2');
		}	
	}
//	歌词
	database[current].lyrics.forEach((val,index)=>{
	    let li=document.createElement('li');
	    li.id='l'+index;
	    li.innerHTML=val.lyric;
	    l.appendChild(li);
	})
//	定义时间及滚动条
	function settime(time){
		let m=parseInt(time/60)>=10?parseInt(time/60):'0'+parseInt(time/60);
		let n=Math.trunc(time)%60>=10?Math.trunc(time)%60:'0'+Math.trunc(time)%60;
		return m+':'+n;
	}
	audio.ontimeupdate=function(){
		//获取当前的时间
		let x=settime(audio.currentTime);
		//获取当前音频的长度
		let y=settime(audio.duration);
		let time=document.querySelector(".gress .time span");
		let time2=document.querySelector('.gress .time span:nth-child(3)');
		time.innerHTML=x;
		time2.innerHTML=y;
		let tiao=document.querySelector(".tiao");
		let width=tiao.offsetWidth;
		let circle=document.querySelector('.gress .circle');
		let played=document.querySelector('.gress .played');
		circle.style.left=audio.currentTime/audio.duration*width-10+'px';
		played.style.width=audio.currentTime/audio.duration*width+'px';
		audio.oncanplaythrough=function(){
			tiao.onclick=function(e){
				audio.currentTime=e.offsetX/this.offsetWidth*audio.duration;
			}
		}
		if(database[current].lyrics){
				database[current].lyrics.forEach(function(val,index){
				if(val.time==x){
					let i=index;
					 	if(index<=5){
	                   	index=0;
	               	}else{
	                   	index=index-5;
	                   	i=i-index;
	               }
	               l.innerHTML='';
	               for(let j=index;j<database[current].lyrics.length;j++){
	                   	let li=document.createElement('li');
	                   	li.id='l'+j;
	                   	li.innerHTML=database[current].lyrics[j].lyric;
	                   	l.appendChild(li);
	               }
	               l.children[i].classList.add('active');
				}
			})
		}
		
	}
//	音量
	let yl=document.querySelector('.yl');
	let sp=document.querySelector('.yl span');
	let tiao1=document.querySelector(".yl .tiao");
	let width1=tiao1.offsetWidth;
	let circle1=document.querySelector(".yl .circle");
	let played1=document.querySelector('.yl .played');
	let lb=1;
	sp.onclick=function(){
		if(audio.volume){
			lb=audio.volume;
			audio.volume=0;
			sp.classList.remove('icon-yinliang');
			sp.classList.add('icon-jingyin');
			circle1.style.left=-10+'px';
			played1.style.width=0;
		}else{
			audio.volume=lb;
			sp.classList.add('icon-yinliang');
			sp.classList.remove('icon-jingyin');
			circle1.style.left=audio.volume*width1-10+'px';
			played1.style.width=audio.volume*width1+'px';
		}
	}
	tiao1.onclick=function(e){
		audio.volume=e.offsetX/width1;
		circle1.style.left=e.offsetX-10+'px';
		played1.style.width=e.offsetX+'px';
		if(played1.style.width==0){
			sp.classList.remove('icon-yinliang');
			sp.classList.add('icon-jingyin');
		}else{
			sp.classList.add('icon-yinliang');
			sp.classList.remove('icon-jingyin');
		}
	}
		
		
//双击菜单
	let lis=document.querySelectorAll('.list ul');
	list.ondblclick=function(e){
		let obj=e.target;
//		console.log(obj)
		if(obj.nodeName=='LI'){
			let idname=obj.parentNode.id;
			lis.forEach((obj)=>{
				obj.classList.remove('active');
			})
			obj.parentNode.classList.add('active');
//			console.log(obj.parentNode)
			let now=database.findIndex(function(value){
				return value.id==idname;
			})
			current=now;
//			console.log(now)
			t.innerHTML=database[now].name;
			name1.innerHTML=database[now].people;
			audio.src=database[now].src;
			audio.play();
			play.classList.remove("icon-bofang");
			play.classList.add("icon-zanting1");
			body.background=`${database[now].bigimg}`;
//			console.log(audio.src)
			document.querySelector(".gress .name").innerHTML=database[now].name+'---'+database[now].people;
			let li3=document.querySelectorAll('.list ul:nth-child(2)~ul li:first-child');
			li3.forEach(function(val){
				val.classList.remove('icon-zhsyinle2');
			})
			obj.parentNode.children[0].classList.add('icon-zhsyinle2');
		}
		l.innerHTML='';
			if(database[current].lyrics){
				database[current].lyrics.forEach((val,index)=>{
		            let li=document.createElement('li');
		            li.id='l'+index;
		            li.innerHTML=val.lyric;
		            l.appendChild(li);
        		})
			}
	}
	
//	删除
 	let del=document.querySelectorAll('.list ul:nth-child(2)~ul li:last-child');
// 	let n=database.findIndex((val)=>{
//      return val.id==this.id;
//  });
    
 	del.forEach(function(val){
 		val.onclick=function(e){		
		 	let obj=e.target;
	 		e.stopPropagation();
	        if(obj.parentNode.className=='active'){
	            return;
	        }   
	        let id=obj.parentNode.id;
	        database.forEach((val,index,arr)=>{
	            if(val.id===id){
	                arr.splice(index,1);
	                if(index<current){
	                    current--;
	                }
	            }
	        });
        	obj.parentNode.parentNode.removeChild(obj.parentNode);
    	}
	})

	
	let next=document.querySelector('.bofang span:last-child');
	let pre=document.querySelector('.bofang span:first-child');

//	下一首
	next.onclick=function(){
		lis[current+1].classList.remove('active');
		lis[current+1].children[0].classList.remove('icon-zhsyinle2');
			current++;
			if(current>database.length-1){
				current=0;
			}
			lis[current+1].classList.add('active');
			lis[current+1].children[0].classList.add('icon-zhsyinle2');
			audio.src=database[current].src;
			audio.play();
			play.classList.remove("icon-bofang");
			play.classList.add("icon-zanting1");
			body.background=`${database[current].bigimg}`;
			document.querySelector(".gress .name").innerHTML=database[current].name+'---'+database[current].people;
			l.innerHTML='';
			if(database[current].lyrics){
				database[current].lyrics.forEach((val,index)=>{
		            let li=document.createElement('li');
		            li.id='l'+index;
		            li.innerHTML=val.lyric;
		            l.appendChild(li);
        		})
			}
       		
       		t.innerHTML=database[current].name;
			name1.innerHTML=database[current].people;
	}
//	上一首
	pre.onclick=function(){
		lis[current+1].classList.remove('active');
		lis[current+1].children[0].classList.remove('icon-zhsyinle2');
			current--;
			if(current<0){
				current=database.length-1;
			}
			lis[current+1].classList.add('active');
			lis[current+1].children[0].classList.add('icon-zhsyinle2');
			audio.src=database[current].src;
			audio.play();
			play.classList.remove("icon-bofang");
			play.classList.add("icon-zanting1");
			body.background=`${database[current].bigimg}`;	
			document.querySelector(".gress .name").innerHTML=database[current].name+'---'+database[current].people;
			l.innerHTML='';
			if(database[current].lyrics){
				database[current].lyrics.forEach((val,index)=>{
	            let li=document.createElement('li');
	            li.id='l'+index;
	            li.innerHTML=val.lyric;
	            l.appendChild(li);
        	})
			}
       		
       		t.innerHTML=database[current].name;
			name1.innerHTML=database[current].people;
	}	
	audio.onended=function () {
        next.onclick();
    }
	
	

	
}
