# A sample application for NativeScript-DDP-Client

## Running:
You should have
* NativeScript 1.5 or newer installed and setup correctly.
* Meteor installed 

#Presetup
git clone https://github.com/oortcloud/node-ddp-client.git
cd node-ddp-client\examples\example-meteor-server
meteor

Verify your environment
node examples\example.js
You should see a bunch of [ADDED] and [REMOVED] messages

restart meteor server (see Limitations)

# Run

1.Run the app using 
tns run android

2.forward the ports from the device to the computer
adb reverse tcp:3000 tcp:3000 

3. run 
adb logcat

The application should output somthing similar

11-29 23:29:11.601: I/TNS.Native(27753): NativeScript Runtime Version 1.5.0, commit 4fb83e3c9c8b4dbf39e214c6a90a070f9240378c
11-29 23:29:15.148: D/NativeScript-DDP-Client-App(27753):  ddp message: {"server_id":"0"}
11-29 23:29:15.151: D/NativeScript-DDP-Client-App(27753):  connected!
11-29 23:29:15.426: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"connected","session":"SBiLchFWPZb5zqB3s"}
11-29 23:29:15.429: D/NativeScript-DDP-Client-App(27753):  [ADDED] to posts:  GR6x9ycxAbjLNnm4E
11-29 23:29:15.429: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"added","collection":"posts","id":"GR6x9ycxAbjLNnm4E","fields":{"body":"fplT_aRH_esOizaYoB_kPcPWzKdasIGVGmNSOCUtZTP"}}
11-29 23:29:15.430: D/NativeScript-DDP-Client-App(27753):  [ADDED] to posts:  9zu9LecLPQfjumqGj
11-29 23:29:15.430: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"added","collection":"posts","id":"9zu9LecLPQfjumqGj","fields":{"body":"xRg32nqddJ7iarcHpJbhJMqI_BPdP_JfsDoRRwUUSAX"}}
11-29 23:29:15.431: D/NativeScript-DDP-Client-App(27753):  [ADDED] to posts:  g8QzrbvBECAqfmaSi
11-29 23:29:15.431: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"added","collection":"posts","id":"g8QzrbvBECAqfmaSi","fields":{"body":"hXPL68oRa1mbKXta-4B8_UMxO_ovTjDdlEZFUcDqkyZ"}}
11-29 23:29:15.432: D/NativeScript-DDP-Client-App(27753):  [ADDED] to posts:  Gg4PmtvRMcBCYv39u
11-29 23:29:15.432: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"added","collection":"posts","id":"Gg4PmtvRMcBCYv39u","fields":{"body":"e2Qe6VgzWKTTcAWpXvz2NJVLzlth3Dk2fh0Iq3cClJw"}}
11-29 23:29:15.432: D/NativeScript-DDP-Client-App(27753):  [ADDED] to posts:  zFpjneZ9pCDg9W3io
11-29 23:29:15.432: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"added","collection":"posts","id":"zFpjneZ9pCDg9W3io","fields":{"body":"v8a2FVSLiUCoHO_qjB0hM3H6gbrGz8F0T1u8xk6Cpjh"}}
11-29 23:29:15.433: D/NativeScript-DDP-Client-App(27753):  called function, result: undefined
11-29 23:29:15.433: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"result","id":"0","error":{"error":404,"reason":"Method not found","message":"Method not found [404]","errorType":"Meteor.Error"}}
11-29 23:29:15.435: D/NativeScript-DDP-Client-App(27753):  updated
11-29 23:29:15.435: D/NativeScript-DDP-Client-App(27753):  [object Object]
11-29 23:29:15.435: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"updated","methods":["0"]}
11-29 23:29:15.469: D/NativeScript-DDP-Client-App(27753):  posts complete:
11-29 23:29:15.469: D/NativeScript-DDP-Client-App(27753):  [object Object]
11-29 23:29:15.469: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"nosub","id":"1","error":{"error":404,"reason":"Subscription not found","message":"Subscription not found [404]","errorType":"Meteor.Error"}}
11-29 23:29:18.431: D/NativeScript-DDP-Client-App(27753):  [REMOVED] in posts:  GR6x9ycxAbjLNnm4E
11-29 23:29:18.431: D/NativeScript-DDP-Client-App(27753):  [REMOVED] previous value: 
11-29 23:29:18.431: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"removed","collection":"posts","id":"GR6x9ycxAbjLNnm4E"}
11-29 23:29:18.432: D/NativeScript-DDP-Client-App(27753):  [REMOVED] in posts:  9zu9LecLPQfjumqGj
11-29 23:29:18.432: D/NativeScript-DDP-Client-App(27753):  [REMOVED] previous value: 
11-29 23:29:18.432: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"removed","collection":"posts","id":"9zu9LecLPQfjumqGj"}
11-29 23:29:18.433: D/NativeScript-DDP-Client-App(27753):  [REMOVED] in posts:  g8QzrbvBECAqfmaSi
11-29 23:29:18.433: D/NativeScript-DDP-Client-App(27753):  [REMOVED] previous value: 
11-29 23:29:18.433: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"removed","collection":"posts","id":"g8QzrbvBECAqfmaSi"}
11-29 23:29:18.446: D/NativeScript-DDP-Client-App(27753):  [REMOVED] in posts:  Gg4PmtvRMcBCYv39u
11-29 23:29:18.446: D/NativeScript-DDP-Client-App(27753):  [REMOVED] previous value: 
11-29 23:29:18.446: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"removed","collection":"posts","id":"Gg4PmtvRMcBCYv39u"}
11-29 23:29:18.448: D/NativeScript-DDP-Client-App(27753):  called function, result: undefined
11-29 23:29:18.448: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"result","id":"3"}
11-29 23:29:18.456: D/NativeScript-DDP-Client-App(27753):  [REMOVED] in posts:  zFpjneZ9pCDg9W3io
11-29 23:29:18.456: D/NativeScript-DDP-Client-App(27753):  [REMOVED] previous value: 
11-29 23:29:18.457: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"removed","collection":"posts","id":"zFpjneZ9pCDg9W3io"}
11-29 23:29:18.461: D/NativeScript-DDP-Client-App(27753):  updated
11-29 23:29:18.462: D/NativeScript-DDP-Client-App(27753):  [object Object]
11-29 23:29:18.463: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"updated","methods":["3"]}
11-29 23:29:45.154: D/NativeScript-DDP-Client-App(27753):  ddp message: {"msg":"ping"}


## Limitations
Meteor server should be restarted every time in order for the sample to work otherwise it starts returning errors to method calls and what not. This is on par with how the node-ddp-client sample works.
