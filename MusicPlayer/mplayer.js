    var listitems = document.querySelectorAll('li');
    for(var i=0; i<listitems.length; i++){
        listitems[i].addEventListener('click',(e)=>{
            var li = e.target;
            playMusic(li);            
         }
        );
    }
    function playMusic(li){
        var file = li.getAttribute('date-file');
        var audio = document.querySelector('audio');
        audio.setAttribute('src', file);
        audio.play();
        var activeli = document.querySelector('.active');
        activeli.className = '';
        li.className = 'active';
    }

    var audio = document.querySelector('audio');
    audio.addEventListener('play',(e)=>{
            var img = document.querySelector('img');
            img.setAttribute('src', 'wallpaper_1.jpg');
        }
    );
    audio.addEventListener('pause',(e)=>{
        var img = document.querySelector('img');
        img.setAttribute('src', 'wallpaper_1_black');
    }
    );
    audio.addEventListener('ended',(e)=>{
            var img = document.querySelector('img');
            img.setAttribute('src', 'wallpaper_1_black.jpg');
            var activeli = document.querySelector('.active');
            var nextli = activeli.nextElementSibling;
            if(nextli != null){
                playMusic(nextli);
            }

        }
    );
    var random = document.querySelector('#random');
    random.addEventListener('click',(e)=>{
         e.preventDefault();
         var listitems = document.querySelectorAll('li');
         var len = listitems.length;
         var rnd = Math.floor(Math.random() * len);
         playMusic(listitems[rnd]);

        }
    ); 