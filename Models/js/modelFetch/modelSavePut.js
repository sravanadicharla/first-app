var Post = Backbone.Model.extend({
    urlRoot: "https://jsonplaceholder.typicode.com/posts"
})

var post = new Post({ id: 1 });
post.fetch();
console.log(post);
post.set("title", "sravan");
post.save();
console.log(post);