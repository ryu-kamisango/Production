createstart();

function createstart(){

    document.getElementsByClassName('title').innerHTML = '';
    document.getElementsByClassName('start').innerHTML = '';
    document.getElementById('text').innerHTML = '';
    document.getElementById('count').innerHTML = '';
    document.getElementById('score').innerHTML = '';

    var h4 = document.createElement('h4');
    var h5 = document.createElement('h5');

    h2 = document.getElementById('kanji');

    while(h2.firstChild){
        h2.removeChild(h2.firstChild);
      }
    h2.appendChild(h4);
    h2.appendChild(h5);
    h4.className = 'title';
    h4.textContent = '謝り続けるタイピンクゲーム';
    h5.className = 'start';
    h5.textContent = 'スペースで始める';
}

document.addEventListener('keydown', keystart);

function keystart(e){
    if(e.keyCode === 32){


        var startmusic = new Audio(`始め.mp3`);
        startmusic.play();

        setTimeout(() => {
            

        document.getElementById('count').innerHTML = '残り40秒';
        document.getElementById('score').innerHTML = 'スコア: 0 点';

        startgame();

        }, 1500);

    }
}






function startgame(){


    var p = document.getElementById('text');

    textLists = [];
    kanjiLists = [];

    textLists = [
        'taihenmousiwakegozaimasen',
        'owabimousiagemasu',
        'tinsyaitasimasu',
        'owabinokotobamoarimasenn',
        'gosinpaiwookakesimasita',
        'hanseiitasiteorimasu',
        'ikannizonzimasu',
        'benkainoyotimogozaimasenn',
        'watasinohutokunoitasutokorodesu',
        'situreisimasita',
        'gomeiwakuwookakesimasita',
        'watasinotikarabusokugagenindegozaimasu',
        'oyurusikudasaimase',
        'yurusitekudasai',
        'goyousyakudasai',
        'watasinisekiningaarimasu',
        'husiteowabimousiagemasu',
    ];

    var h2 = document.getElementById('kanji');
    var kanjiLists = [
        '大変申し訳ございません',
        'お詫び申し上げます',
        '陳謝いたします',
        'お詫びの言葉もありません',
        'ご心配をおかけいたしました',
        '反省いたしております',
        '遺憾に存じます',
        '弁解の余地もございません',
        '私の不徳の致すところです',
        '失礼致しました',
        'ご迷惑をおかけしました',
        '私の力不足が原因でございます',
        'お許しくださいませ',
        '許してください',
        'ご容赦ください',
        '私に責任があります',
        '伏してお詫び申し上げます',
    ]

    var checkText = [];

    createText();

    function createText() {
        var rnd = Math.floor(Math.random() * textLists.length);

        p.textContent = '';
        h2.textContent = '';
        h2.textContent = kanjiLists[rnd];
        checkText = textLists[rnd].split('').map(function(value){
            var span = document.createElement('span');

            span.textContent = value;
            p.appendChild(span);
            
            return span;
            }
        );
        wordcount = checkText.length;
    }

    document.addEventListener('keydown', keyDown);

    function  keyDown(e){
        if(e.key === checkText[0].textContent){

            var keyboardmusic = new Audio(`キーボード音3.mp3`);
            keyboardmusic.play();

            checkText[0].className = 'add-red';

            checkText.shift();


            if(!checkText.length){

                var Seikaiaudio = new Audio(`決定.mp3`);
                Seikaiaudio.play();

                var score = document.getElementById('score');
                var scorenumber = score.textContent.replace(/[^0-9]/g, '');
                plusscore = parseInt(wordcount) * 10;
                newscorenumber = parseInt(scorenumber) + parseInt(plusscore);
                newscoretext = 'スコア: ' + newscorenumber + ' 点';
                score.textContent = newscoretext

                createText();
            }

        }else{

            var count =document.getElementById('count');
            var countnumber = count.textContent.replace(/[^0-9]/g, '');
            if(countnumber == 0){
                return 0;
            }else{
                var hazuremusic = new Audio('はずれ音.mp3');
                hazuremusic.play();
            }
        }
    }


    var downloadtimer = setInterval(Counter, 1000)

    function Counter(){
        var count =document.getElementById('count');
        var countnumber = count.textContent.replace(/[^0-9]/g, '');
        newcount = parseInt(countnumber) - 1;
        newcounttext = '残り' + newcount + '秒';
        count.textContent = newcounttext;

        if(newcount <= 10){
            count.className = 'add-red'
            var awaterumusic = new Audio('カーソル移動8.mp3');
            awaterumusic.play();
        }


        if(newcount <= 0){
            clearInterval(downloadtimer)

            var h1 = document.getElementById('count');
            h1.classList.remove('add-red');

            var finishmusic = new Audio(`試合終了のゴング.mp3`);
            finishmusic.play();

            var p = document.getElementById('text');
            
            h2.textContent = '';
            p.innerHTML = '';
            p.textContent = '終了';

            checkText.length = 0;

            setTimeout(() => {
                endcard();
                }, 2000);
        }
    }


}

function endcard(){

    var lastscore = document.getElementById('score');
    var lastscorenumber = lastscore.textContent.replace(/[^0-9]/g, '');


    var p = document.getElementById('text');

    p.textContent = 'スコア: ' + String(lastscorenumber) + '点';

    document.getElementById('count').innerHTML = '';
    document.getElementById('score').innerHTML = '';

    h6 = document.createElement('h6');
    h2.appendChild(h6);
    h6.className = 'lasttitle';
    h6.textContent = 'エンターでタイトル　　スペースでリトライ'

    document.addEventListener('keydown', keyretry);
    function keyretry(e){
        if(e.keyCode === 13){
            h6.textContent = '';
            createstart();
        }
    }


}