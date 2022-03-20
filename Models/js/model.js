//model crud opeartions using get,set,unset,clear methods

// var Post = Backbone.Model.extend({
//     initialize: () => {
//         console.log("this is Post model");
//     },
//     defaults: {
//         title: "posts",
//         durations: "not specified"
//     }
// })

// var post = new Post({
//     post: "this is first post",
//     author: "sravan",
//     comments: []
// })

// // post.comments.set("first comment");
// post.get("title");
// post.set("date", "march2");
// console.log(post.has("title"));
// console.log(post.unset("date"));
// //console.log(post.clear());
// console.log(post);





///validation of models using validate method in models

// var Song = Backbone.Model.extend({
//     validate: (attrs) => {
//         if (!attrs.title) {
//             return "title required";
//         } else {
//             return "all set";
//         }
//     }
// })


// var song = new Song({
//     duration: "5min",
//     date: "5th march"
// })
// console.log(song.isValid());
// console.log(song.validationError);
// console.log(song);

// song.set("title", "first song");

// console.log(song.isValid());
// console.log(song.validationError);
// console.log(song);



// // Inheritance in models using extend methods

// var Animal = Backbone.Model.extend({
//     walk: () => {
//         console.log("animal walks");

//     }
// })

// // var Dog = Animal.extend();

// // var dog = new Dog();

// // console.log(dog.walk());


// var Dog = Animal.extend({
//     walk: () => {
//         Animal.prototype.walk.apply(this);
//         console.log("dog walks");
//     }
// })

// var dog = new Dog();
// console.log(dog.walk());