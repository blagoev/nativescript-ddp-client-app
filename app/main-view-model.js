var observable = require("data/observable");
var observableArray = require("data/observable-array");
var DDPClient = require("nativescript-ddp-client");

var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.counter = 42;
        this.set("message", this.counter + " taps left");

        this.posts = new observableArray.ObservableArray();

        var that = this;
        this.ddpclient = new DDPClient({
            // All properties optional, defaults shown 
            host: "localhost",
            port: 3000,
            ssl: false,
            autoReconnect: false,
            autoReconnectTimer: 15000,
            maintainCollections: true,
            ddpVersion: '1',  // ['1', 'pre2', 'pre1'] available 
            // uses the SockJs protocol to create the connection 
            // this still uses websockets, but allows to get the benefits 
            // from projects like meteorhacks:cluster 
            // (for load balancing and service discovery) 
            // do not use `path` option when you are using useSockJs 
            useSockJs: true,
            // Use a full url instead of a set of `host`, `port` and `ssl` 
            // do not set `useSockJs` option if `url` is used 
            //url: 'wss://example.com/websocket'
        });

        this.ddpclient.connect(function (error, wasReconnect) {
            // If autoReconnect is true, this callback will be invoked each time 
            // a server connection is re-established 
            if (error) {
                console.log('DDP connection error!');
                return;
            }

            if (wasReconnect) {
                console.log('Reestablishment of a connection.');
            }

            console.log('connected!');
            
            // /*
            //  * Subscribe to a Meteor Collection
            //  */
            that.ddpclient.subscribe(
                'posts',                  // name of Meteor Publish function to subscribe to 
                [],                       // any parameters used by the Publish function 
                function () {             // callback when the subscription is complete 
                    console.log('posts complete:');
                    console.log(that.ddpclient.collections.posts);
                    for (var postId in that.ddpclient.collections.posts) {
                        var post = that.ddpclient.collections.posts[postId];
                        console.log("Adding available post " + postId + " name: " + post.name);
                        that.addPost({ id: post._id, name: post.name });
                    }
                    
                    
                    // /*
                    //  * Observe a collection.
                    //  */
                    var observer = that.ddpclient.observe("posts");
                    observer.added = function (id) {
                        console.log("[ADDED] to " + observer.name + ":  " + id);
                        var post = that.ddpclient.collections.posts[id];
                        console.log("[ADDED Value] to " + JSON.stringify(post));

                        that.addPost({ id: id, name: post.name });
                    };
                    observer.changed = function (id, oldFields, clearedFields, newFields) {
                        console.log("[CHANGED] in " + observer.name + ":  " + id);
                        console.log("[CHANGED] old field values: ", oldFields);
                        console.log("[CHANGED] cleared fields: ", clearedFields);
                        console.log("[CHANGED] new fields: ", newFields);
                    };
                    observer.removed = function (id, oldValue) {
                        console.log("[REMOVED] in " + observer.name + ":  " + id);
                        console.log("[REMOVED] previous value: ", oldValue);

                        that.removePost(id);
                    };

                });
        });

        this.addPost = function (post) {
            console.log("Adding post id to array:" + post.id);
            that.posts.push(post);
        };

        function indexOf(id) {
            var match = -1;
            that.posts.forEach(function (loopItem, index) {
                if (loopItem.id === id) {
                    match = index;
                }
            });
            return match;
        }

        this.removePost = function (id) {
            var index = indexOf(id);
            if (index === -1) {
               console.log("Can't remove post id: " + id);
               return;
            }
            
            
            console.log("Removing post id from array:" + id);
            that.posts.splice(index, 1);
        };

    }
    HelloWorldModel.prototype.tapAction = function () {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        }
        else {
            this.set("message", this.counter + " taps left");
        }

        this.ddpclient.call(
            'deleteSinglePost',             // name of Meteor Method being called 
            ['foo', 'bar'],            // parameters to send to Meteor Method 
            function (err, result) {   // callback which returns the method call results 
                console.log('deleteSinglePost result: ' + result);
            },
            function () {              // callback which fires when server has finished 
                console.log('deleteSinglePost finished');  // sending any updated documents as a result of 
            });
    };



    return HelloWorldModel;
})(observable.Observable);
exports.HelloWorldModel = HelloWorldModel;
exports.mainViewModel = new HelloWorldModel();
