function RunScript(TextScript) {
var injectedCode = TextScript;
var script = document.createElement('script');
script.appendChild(document.createTextNode(injectedCode));
(document.body || document.head || document.documentElement).appendChild(script);
};

if (window.location.href.match("faucetpay.io/ptc/view/")) {

  RunScript("\
    var stayfocus = setInterval(function () { \
      window.onblur = function () { \
        window.in_focus = 1; \
      }; \
      window.in_focus = 1; \
    }, 1000); \
  ");

  window.addEventListener('message', function (event) {
    if (event.data.checked) {
      document.getElementsByClassName('btn btn-lg btn-danger')[0].setAttribute("onclick","");
      setInterval(function(){
        if (document.readyState){
          document.getElementsByClassName('btn btn-lg btn-danger')[0].click();
        }
      },1500);
    };
  }, false);

} else if(window.location.href.match("faucetpay.io/ptc")){
  console.log("PTC Menu");
  if (document.readyState){
    if (document.getElementsByClassName('btn btn-primary btn-block').length){
      document.getElementsByClassName('btn btn-primary btn-block')[0].click()
    }
  }
};

if (window.location.href.match(/https:\/\/www.google.com\/recaptcha\/api\d\/anchor/)){
  var sid = setInterval(function() {
    if (document.getElementsByClassName("recaptcha-checkbox-checked").length != 0){
      window.parent.postMessage({
        'checked': '1'
      }, "*");
      clearInterval(sid);
    }
  }, 500);
};