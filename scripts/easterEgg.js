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

    console.log('initialized');
  }

  EasterEgg.prototype.addListeners = function()
  {
    var th = this;

    $("p").on('click', function() {

      th.openDoor();
    });

    $('#go').on('click', function(){
      th.ninjaWalk();
    });
    //th.openDoor();
    console.log('listeners added');
  }

  EasterEgg.prototype.openDoor = function()
  {
    var th = this;
    console.log('height: ' + $('.door-frame').css('height'));
    var height = $('.door-frame').css('height').slice(0, -2);
    console.log('height: ' + height * 2);
    var newHeight = ((height * 2) + 'px');

    $('.door-frame').fadeIn().animate({
    height: '200px',
    width: '150px',
    top: '-200px',
    borderWidth: '10px',
    opacity: 1
  }, 1500, function(){

    th.animateNinja();

    
  } );

    console.log('door opened');
  }

  EasterEgg.prototype.animateNinja = function()
  {
    var th = this;

    $('.ninja').fadeIn();

    var idx = 1;

    var anim = setInterval(function(){

        $('.ninja').removeClass('state-' + idx);
        $('.ninja').addClass('state-' + ++idx);

        console.log('index is: ' + idx);
        //idx++;

        if(idx > 21)
        {
          clearInterval(anim);
        }
      }, 100);
  }

  EasterEgg.prototype.ninjaWalk = function()
  {
    var th = this;

    var idx = 1;

    $('.ninja').removeClass('state-*');
    /*
    var walk = setInterval(function(){

        $('.ninja').removeClass('state-1');
        $('.ninja').addClass('state-1');

        //$('.ninja').toggle('state-1');

        console.log('index is: ' + idx);
        idx++;

        if(idx > 21)
        {
          clearInterval(walk);
        }
      }, 1000);
    */
  }






