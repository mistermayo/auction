Auction.Router.map(function() {
  this.resource('categories', {path: '/'});
  this.resource('category', {path: ':category_id'},
    function() {
      this.resource('item');
    });
  this.resource('new-category');

});
