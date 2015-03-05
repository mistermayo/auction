Auction.Item = DS.Model.extend({
  text: DS.attr(),
  description: DS.attr(),
  owner: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  backstory: DS.attr(),
  yearAcquired: DS.attr(),
  owner: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
