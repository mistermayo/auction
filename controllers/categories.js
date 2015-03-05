Auction.CategoriesController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if (confirm('Click OK to delete this category')) {
        this.get('model').destroyRecord();
      }
    }
  }
});
