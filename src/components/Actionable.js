Crafty.c('Actionable', {
  init: function() {
    // `action` specifies what type of action is available for the object
    this.action = '';
  },

  getAction: function() {
    return this.action;
  },

  setAction: function(action) {
    this.action = action;
  }
});