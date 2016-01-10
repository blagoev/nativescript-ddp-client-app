Posts = new Meteor.Collection('posts');

if (Meteor.isClient) {
  Template.posts.posts = function () {
    return Posts.find();
  };
}

var postNameCount = 1;

if (Meteor.isServer) {
  Meteor.startup(function () {
   
    //remove all posts
    var cursor = Posts.find();
    cursor.forEach(function (post) {
      Posts.remove(post._id);
    });

    for (var postCount = 0; postCount < 10; postCount++) {
      Posts.insert({
        body: Random.secret(),
        name: "Post " + postNameCount++
      });
    }
  });
}

Meteor.methods({
  deletePosts: function () {
    var cursor = Posts.find({}, { limit: 5 });
    cursor.forEach(function (post) {
      Posts.remove(post._id);
    });
  },

  deleteSinglePost: function () {
    var cursor = Posts.find({}, { limit: 1 });
    cursor.forEach(function (post) {
      Posts.remove(post._id);
    });
  }
});
