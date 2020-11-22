(function userAction(){
var logo;
var delay;
var timer;
var imgData = ['https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=9060',
                        'https://images.pexels.com/photos/1451074/pexels-photo-1451074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=560',
                        'https://images.pexels.com/photos/1460880/pexels-photo-1460880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200' ,
                        'https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500' ,
                        'https://images.pexels.com/photos/87284/ocean-seacoast-rocks-water-87284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=400' ,
                        'https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=1260' ,
                        'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    ];
   	var activity = setInterval(function(){
   			imager()
   			logo = setInterval(function(){imager()},5000)
   			clearInterval(activity);
   },10000)
   
    
    function resetInterval(){
         if(document.getElementById('saver')){
            document.getElementById('saver').remove();
        }
        	clearInterval(activity);
        	clearInterval(logo);
            clearTimeout(delay);
            clearInterval(timer)
        	 activity = setInterval(function(){
        	 imager()
   			 logo = setInterval(function(){imager()},5000)
   			 clearInterval(activity);
   },10000)
        }
    
    let actionEvents = [
        'mousemove','mousedown','keydown','touchstart', 'contextmenu'
    ];

    actionEvents.forEach(function(action) {
        document.addEventListener(action, resetInterval, true);
    });
    
    function imager() {
        let div = document.createElement("div");    
        div.style.position = "absolute";
        div.style.zIndex = 99999;
        div.style.transition = 'opacity .5s ease-out';
        div.style.opacity = 0;
        div.id ='saver';
        let currentImageURL = imgData[getRandomInteger()];
    
        function getRandomInteger(min=0, max=imgData.length-1) {
            return Math.floor(Math.random() * (max - min) ) + min;
             }
                    
        (function setPosition(url){   
            var img = new Image();
            img.onload = function(){
                div.style.left =`${(Math.random() * (document.body.clientWidth - this.width)).toFixed()}px`;
                div.style.top = `${(Math.random() * (document.body.clientHeight - this.height)).toFixed()}px`;
            };
            img.src = url;
        })(currentImageURL);
        
        div.innerHTML = `<img src=${currentImageURL}>` ;   
        function fadeOut(el) {
            var opacity = 1;

    var timer = setInterval(function() {
        if(opacity <= 0.1) {
            clearInterval(timer);
            document.getElementById(el).style.display = "none";
        }
        document.getElementById(el).style.opacity = opacity;
        opacity -= opacity * 0.1;
    }, 10);

}
function fadeIn(el) {
    var opacity = 0.01;
    document.getElementById(el).style.display = "block";
     timer = setInterval(function() {
        if(opacity >= 1) {
            clearInterval(timer);
        }
        document.getElementById(el).style.opacity = opacity;
        opacity += opacity * 0.1;
    }, 10);

}
function fadeOut(el) {
    delay = setTimeout(function(){
    var opacity = 1;
     timer = setInterval(function() {
        if(opacity <= 0.1) {
            clearInterval(timer);
            clearTimeout(delay);
            document.getElementById(el).style.display = "none";
        }
        document.getElementById(el).style.opacity = opacity;
        opacity -= opacity * 0.02;
    }, 10);


  },3500 ) 
       }
        if(!document.getElementById('saver')){
         document.body.appendChild(div); 
         fadeIn('saver')
         fadeOut('saver')
        }
        else {
             document.getElementById('saver').remove();
             document.body.appendChild(div);     
             fadeIn('saver')
             fadeOut('saver')
        }       
    }
    })();
    