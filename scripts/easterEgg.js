/*
//(function () {
    function loadScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) { / * IE * /
             script.onreadystatechange = function () {
                 if (script.readyState == "loaded" || script.readyState == "complete") {
                     script.onreadystatechange = null;
                     callback();
                 }
             }; 
        } else { / * Others * /
              script.onload = function () {
                  callback();
              };
          }
          script.src = url;var head = document.getElementsByTagName("head")[0];
          head.appendChild(script);
      }
      loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js", function () {
          / * jQuery loaded * /
          console.log('jquery loaded');
  $('a').each(function(index){
  $(this).prepend('[*+*').append('*+*]');
  });
  loadScript("styles/bookmarklet.css", function () {
          / * jQuery loaded * /
          console.log('css loaded');alert('css loaded');
      });
      });
  //})();
*/

(function () {
    function loadScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        if (script.readyState) { /* IE */
             script.onreadystatechange = function () {
                 if (script.readyState == "loaded" || script.readyState == "complete") {
                     script.onreadystatechange = null;
                     callback();
                 }
             }; 
        } else { /* Others */
              script.onload = function () {
                  callback();
              };
          }
          script.src = url;var head = document.getElementsByTagName("head")[0];
          head.appendChild(script);
      }
      loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js", function () {
          /* jQuery loaded */
          console.log('jquery loaded!');
  $('a').each(function(index){
  $(this).prepend('[*+*').append('*+*]');
  });
  loadScript("styles/easterEgg.css", function () {
          /* jQuery loaded */
          console.log('css loaded');
          //alert('css loaded');

          // Start App
          var easterEgg = new EasterEgg();
      });
      });
  })();

  var EasterEgg = function(e)
  {
    this.init();
  }

  EasterEgg.prototype.init = function()
  {
    var th = this;
    console.log('initializing...');

    th.addListeners();

    th.ninja = new Ninja();

    console.log('initialized');
  }

  EasterEgg.prototype.addListeners = function()
  {
    var th = this;

    $("p").on('click', function(e) {

      //th.closeDoor();
      //th.openDoor();

      th.closeDoor(th.attachDoor(e));

      th.openDoor();
    });

    $('#go').on('click', function(){
      th.ninja.walk();
    });
    
    console.log('listeners added');
  }

  EasterEgg.prototype.attachDoor = function(e)
  {
    var th = this;

    $(e.target).before($('.door-frame'));
    
    console.log('door attached');
  }

  EasterEgg.prototype.openDoor = function(callback)
  {
    var th = this;
    
    $('.door-frame').fadeIn().animate({
    height: '200px',
    width: '150px',
    //top: '-200px',
    borderWidth: '10px',
    opacity: 1
  }, 1500, function(){
    $(this).css({'z-index' : '100'});

    th.ninja.enter();

    th.ninja.showOff();

    if(typeof callback === "function")
    {
      callback();
    }
  } );

/*
$('.door-frame').animate({
    height: '0px',
    width: '0px',
    //top: '-200px',
    borderWidth: '0px',
    opacity: 0
  }, 1500, function(){

    $('.door-frame').fadeIn().animate({
    height: '200px',
    width: '150px',
    //top: '-200px',
    borderWidth: '10px',
    opacity: 1
  }, 1500, function(){
      $(this).css({'z-index' : '100'});

      th.ninja.enter();

      th.ninja.showOff();

      if(callback)
      {
        callback();
      }
    } );
    
  } );

*/
    console.log('door opened');
  }

  EasterEgg.prototype.closeDoor = function(callback)
  {
    var th = this;
    
    $('.door-frame').animate({
    height: '0px',
    width: '0px',
    //top: '-200px',
    borderWidth: '0px',
    opacity: 0
  }, 1500, function(){

    /*$('.door-frame').animate({
      top: '0px',
      borderWidth: '10px',
      opacity: 1
    }, 100);*/
    //th.ninja.enter();

    //th.ninja.showOff();
    if(callback)
    {
      callback();
    }
    
  } );

    console.log('door closed');
  }

  var Ninja = function()
  {
    this.init();
  }

  Ninja.prototype.init = function()
  {
    var th = this;
  }

  Ninja.prototype.addListeners = function()
  {
    var th = this;
  }

  Ninja.prototype.enter = function()
  {
    var th = this;

    $('.ninja').fadeIn();
  }

  Ninja.prototype.walk = function()
  {
    var th = this;

    var idx = 1;

    $('.ninja').attr('class', 'ninja state-8');
    
    var walk = setInterval(function(){

        if($('.ninja').attr('class') == 'ninja state-14')
        {
          $('.ninja').attr('class', 'ninja state-8');
        }
        else
        {
          $('.ninja').attr('class', 'ninja state-14');
        }
        
        var offset = $('.ninja').offset();
        var newLeft = offset.left + 1;
        var newLeftStr = newLeft + 'px';

        if(newLeft >= $(window).width())
        {
          newLeftStr = '0px';
        }

        $('.ninja').animate({
          left:  newLeftStr
        }, 50);

        
        idx++;

        if(idx > 21)
        {
          clearInterval(walk);
        }
      }, 100);
  }

  Ninja.prototype.showOff = function()
  {
    var th = this;

    var idx = 1;

    var anim = setInterval(function(){

        $('.ninja').removeClass('state-' + idx);
        $('.ninja').addClass('state-' + ++idx);

        
        //idx++;

        if(idx > 21)
        {
          clearInterval(anim);
        }
      }, 100);
  }

  EasterEgg.prototype.animateNinja = function()
  {
    var th = this;

    $('.ninja').fadeIn();

    var idx = 1;

    var anim = setInterval(function(){

        $('.ninja').removeClass('state-' + idx);
        $('.ninja').addClass('state-' + ++idx);

        
        //idx++;

        if(idx > 21)
        {
          clearInterval(anim);
        }
      }, 100);
  }






