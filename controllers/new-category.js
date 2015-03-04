Auction.NewCategoryController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newCategory = this.store.createRecord('category', {
        title: this.get('title')
      });
      newCategory.save();
      this.transitionToRoute('categories');
      this.set("title", null);
      this.set("category", null);
    }
  }
});
