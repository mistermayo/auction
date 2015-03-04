Auction.Item = DS.Model.extend({
  text: DS.attr(),
  // text: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
