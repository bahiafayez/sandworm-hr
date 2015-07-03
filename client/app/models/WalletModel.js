// Backbone model for the user's wallet
var WalletModel = Backbone.Model.extend({

  defaults: {
    'cash': 10000,
    'investment': 0
  },

  accrue: function(moolah) {
    // console.log('inside wallet model accrue');
    // console.log('amount to add is: ', money);
    var dough = this.get('cash');
    this.set('cash', dough + moolah);
  },

  spend: function(moolah) {
    // console.log('inside wallet model spend');
    var cheddar = this.get('cash');
    this.set('cash', cheddar + moolah);
  },

  investmentValue: function(moolah) {
    var bread = this.get('investment');
    this.set('investment', bread - moolah);
  }

});