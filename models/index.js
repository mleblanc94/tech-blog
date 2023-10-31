const Comment = require('./comments');
const Post = require('./posts');
const User = require('./users');

// User can have many posts
User.hasMany(Post, {
    foreignKey : 'user_id',
    targetKey: 'id'
  });

// Posts have a direct relationship with the user that posts them
Post.belongsTo(User, { 
    foreignKey: 'user_id',
    targetKey: 'id'
});

// Comment belongs to post
Comment.belongsTo(Post, { 
    foreignKey: 'comment_id',
    targetKey: 'id'
});

module.exports = {
    Comment,
    Post,
    User,
};