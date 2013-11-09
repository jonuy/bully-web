Crafty.c('Wall', {
  init: function() {
    this.requires('2D, Canvas, MapItem, Color, Solid');
    this.color(Colors.sortaBlack);
  }
});

function Wall() {}
Wall.width = 1;
Wall.height = 1;