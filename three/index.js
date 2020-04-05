var $banner = (function() {
    var html =''
    +'<div class="slider" id="slider">'
		+'<div class="slide"><img src="img/b5.png" alt=""></div>'
		+'<div class="slide"><img src="img/b1.png" alt=""></div>'
		+'<div class="slide"><img src="img/b2.png" alt=""></div>'
		+'<div class="slide"><img src="img/b3.png" alt=""></div>'
		+'<div class="slide"><img src="img/b4.png" alt=""></div>'
		+'<div class="slide"><img src="img/b5.png" alt=""></div>'
		+'<div class="slide"><img src="img/b1.png" alt=""></div>'
	+'</div>'
	+'<span id="left"><</span>'
	+'<span id="right">></span>'
	+'<ul class="nav" id="navs">'
		+'<li>1</li>'
		+'<li>2</li>'
		+'<li>3</li>'
		+'<li>4</li>'
		+'<li>5</li>'
    +'</ul>',
    $ban = $(html),
    cfg={
        container:$('#box'),
        page : 1,
        timer : '',
        isSliding:false
    };
    
    function show() {
        $(cfg.container).append($ban);
        var $navs   = $('#navs').children(),
            $left   = $('#left'),
            $right  = $('#right'),
            $slider = $('#slider');

        $navs[0].className = 'active';

        cfg.timer = setInterval(function(){
            pageMove('forward');
        },2000);

        cfg.container.mouseover(function() {
            $left.css('opacity','0.8');
            $right.css('opacity','0.8');
            clearInterval(cfg.timer);
        })
        cfg.container.mouseout(function() {
            $left.css('opacity','0');
            $right.css('opacity','0');
            cfg.timer = setInterval(function(){
                pageMove('forward');
            },2000);
        })
        
        $right.on('click',function() {
            if(!cfg.isSliding){pageMove('forward');}
        })
        $left.on('click',function(){
            if(!cfg.isSliding){pageMove('back');}
        })
        function pageMove(direction) {
            cfg.isSliding=true;
            setTimeout(function(){cfg.isSliding=false},500)
            if(direction === 'forward'){
                cfg.page++;
                if(cfg.page == 6){
                    cfg.page=1;
                    $slider.css('left','0px');
                }
                navList(cfg.page);
                $slider.stop().animate({left:cfg.page*-1200},500);
            }
            else if(direction === 'back'){
                cfg.page--;
                if(cfg.page == 0){
                    cfg.page = 5;
                    $slider.css('left','-7200px');
                }
                navList(cfg.page);
                $slider.stop().animate({left:cfg.page*-1200},500);
            }
        }

        function navList(index) {
            for(let i=0;i<$navs.length;i++){
                $navs[i].className='';
            }
                $navs[index-1].className='active';
        }
        
        for(let i=0;i<$navs.length;i++){
			(function(j){
				$navs[j].onclick = function(){
                    if(!cfg.isSliding){
                        cfg.page = j;
                        var str = -1200*(cfg.page+1) + 'px';
                        $slider.stop().animate({'left':str},500);
                        navList(cfg.page+1);
                    }
				}
            })(i);
        }

    }
    return{
        show:show
    };
}());