Auction.Item = DS.Model.extend({
  title: DS.attr(),
  text: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
