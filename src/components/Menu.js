/**
 * Menu component
 */
Crafty.c('Menu', {
  init: function() {
    this.requires('2D, DOM, Text')
      .css({
        'background-color': 'white',
        'border': '10px solid black',
        'border-radius': '10px',
      })
      .textColor('#000000')
      .textFont({
        size: '30px',
        family: 'VT323'
      });
  },
});

function Menu() {
  this.width = 200;
  this.height = 150;
}

Menu.prototype.create = function() {
  var bottomRightX = BGBoard.getViewportWidth();
  var bottomRightY = BGBoard.getViewportHeight();
  var borderWidth = 10;

  var menuTopLeftX = bottomRightX - this.width - borderWidth * 2;
  var menuTopLeftY = bottomRightY - this.height - borderWidth * 2;

  Crafty.e('Menu')
    .attr({x: menuTopLeftX, y: menuTopLeftY, w: this.width, h: this.height})
    .text('Menu Test');
}

/**
 * Menu select item
 */
Crafty.c('MenuItem', {
  init: function() {
    this.requires('2D, DOM, Text')
      .css({
        'color': 'black',
        'font-family': 'VT323',
        'font-size': '26px',
      })
      .textColor('black')
      .textFont({
        size: '30px',
        family: 'VT323'
      });
  },
});

/**
 * MenuTrigger component
 */
Crafty.c('MenuTrigger', {
  init: function() {
    this.requires('Actionable');
    this.setAction('open-menu');
  }
});