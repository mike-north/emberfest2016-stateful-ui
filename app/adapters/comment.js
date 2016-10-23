import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForCreateRecord(modelName, snapshot) {
    return this._super(...arguments)
      .replace('comments', `posts/${snapshot.record.get('post.id')}/comment`);
  }
});
