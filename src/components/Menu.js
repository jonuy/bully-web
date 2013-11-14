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
  this.selector = undefined;
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

  // Create Menu container
  this.entity = Crafty.e('Menu')
    .attr({x: menuTopLeftX, y: menuTopLeftY, w: this.width, h: this.height})
    .text('Menu Test');

  // Create Menu items
  var menuItemsX = menuTopLeftX + 10 /*border width*/ + 30 /*padding*/;
  var menuItemsY = menuTopLeftY + 10 /*border width*/ + 30 /* Menu title size*/;
  for (i = 0; i < items.length; i++) {
    this.items[i] = Crafty.e('MenuItem')
      .attr({x: menuItemsX, y: menuItemsY + i * 30, w: this.width, h: this.height})
      .text(items[i]);
  }

  // Create Menu selector
  var selectorX = menuItemsX - 20 /*selector size + padding*/;
  var selectorY = menuItemsY + 5 /*for something, I don't know*/;
  this.selector = Crafty.e('MenuSelector')
    .attr({x: selectorX, y: selectorY, w: 0, h: 0});
}

/**
 * Menu.destroy()
 */
Menu.prototype.destroy = function() {
  // Remove menu container and title
  this.entity.destroy();

  // Remove menu items
  for (i = 0; i < this.items.length; i++) {
    this.items[i].destroy();
  }

  // Remove menu selector
  this.selector.destroy();
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
        'text-align': 'left',
      })
      .textColor('black')
      .textFont({
        size: '30px',
        family: 'VT323'
      });
  },
});

/**
 * Menu selector component
 */
Crafty.c('MenuSelector', {
  init: function() {
    this.requires('2D, DOM, Text')
      .css({
        'border-style': 'solid',
        'border-width': '10px 0 10px 17.3px',
        'border-color': 'transparent transparent transparent #000',
        'text-align': 'left',
      });
  }
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