randomHexString = function(digits) {
  var result = Math.floor(Math.random()*16777215).toString(16);
  
  while (result.length < digits)
  {
    result = result + Math.floor(Math.random()*16777215).toString(16);  
  }
  
  return result.substring(0, digits);
}

var application = require("application");
application.mainModule = "main-page";
application.cssFile = "./app.css";
application.start();


//debugger;
consolelog = console.log;
console = {};
console.log = function(message)
{
  if (android)
  {
    android.util.Log.d("NativeScript-DDP-Client-App", " " + message);
  }
  else consolelog(message);
}