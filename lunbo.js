
		window.onload = function(){ //当网页加载完成后执行
			var photo =document.getElementById('photo');//获得id为photo的元素
            var list=document.getElementById('list');
            var buttons=document.getElementById('buttons').getElementsByTagName('span');//获得标签为span的内容
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
                     var index = 1;
            var len = 5;
            var animated = false;
            var interval = 2500;
            var timer;


            function animate (offset) {//切换图片的函数
                if (offset == 0) {
                    return;
                }
                animated = true;//优化，防止电脑卡住
                var time = 300;
                var inteval = 10;             
                var speed = offset/(time/inteval);//这里是一张图切换的速度
                var left = parseInt(list.style.left) + offset;//当前图的位置

                var go = function (){
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);//递归调用
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-200){
                            list.style.left = -900 * len + 'px';
                        }
                        if(left<(-900*len )) {

                            list.style.left = -900 +'px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {//判断圆点是不是当前亮
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
            }

            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-900);
                showButton();
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(900);
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') { 
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -900 * (myIndex-index) ;

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

            photo.onmouseover = stop;
            photo.onmouseout = play;

            play();

        };