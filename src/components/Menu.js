/**
 * Menu component
 */
Crafty.c('Menu', {
  init: function() {
    this.requires('2D, DOM, Text');
  },
})

function Menu() {}

Menu.prototype.create = function() {
  Crafty.e('Menu')
    .attr({x: 50, y: 50, w: 250})
    .text('Menu Test');
}

/**
 * MenuTrigger component
 */
Crafty.c('MenuTrigger', {
  init: function() {
    this.requires('Actionable');
    this.setAction('open-menu');
  }
});