import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  body: attr('string'),
  title: attr('string'),
  authorName: attr('string'),
  authorPhotoUrl: attr('string'),

  createdAt: attr('date'),
  updatedAt: attr('date'),

  featuredImageUrl: attr('string')
});
