import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

const Post = Model.extend({
  body: attr('string'),
  title: attr('string'),
  authorName: attr('string'),
  authorPhotoUrl: attr('string'),
  featuredImageUrl: attr('string'),
  categoryName: attr('string'),
  createdAt: attr('date'),
  updatedAt: attr('date'),
  comments: hasMany('comments', {async: true})
});

export default Post;


