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

/**
 * Menu object constructor
 */
function Menu() {
  this.width = 200;
  this.height = 150;
  this.entity = undefined;
  this.items = [];
  this.title = '';

  return this;
}

/**
 * Menu.create()
 */
Menu.prototype.create = function(items) {
  var bottomRightX = BGBoard.getViewportWidth();
  var bottomRightY = BGBoard.getViewportHeight();
  var borderWidth = 10;

  var menuTopLeftX = bottomRightX - this.width - borderWidth * 2;
  var menuTopLeftY = bottomRightY - this.height - borderWidth * 2;

  this.entity = Crafty.e('Menu')
    .attr({x: menuTopLeftX, y: menuTopLeftY, w: this.width, h: this.height})
    .text('Menu Test');

  var menuItemsY = menuTopLeftY + 10 /*border size*/ + 30 /* Menu title size*/;
  for (i = 0; i < items.length; i++) {
    this.items[i] = Crafty.e('MenuItem')
      .attr({x: menuTopLeftX, y: menuItemsY + i * 30, w: this.width, h: this.height})
      .text(items[i]);
  }
}

/**
 * Menu.destroy()
 */
Menu.prototype.destroy = function() {
  this.entity.destroy();
  for (i = 0; i < this.items.length; i++) {
    this.items[i].destroy();
  }
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