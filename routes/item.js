Auction.ItemRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('item');
  }
});
