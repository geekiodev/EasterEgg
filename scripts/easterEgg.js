//(function () {
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
          console.log('jquery loaded');
  $('a').each(function(index){
  $(this).prepend('[*+*').append('*+*]');
  });
  loadScript("styles/bookmarklet.css", function () {
          /* jQuery loaded */
          console.log('css loaded');alert('css loaded');
      });
      });
  //})();