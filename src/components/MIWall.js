Crafty.c('Wall', {
  init: function() {
    this.requires('2D, Canvas, MapItem, Color, Solid, Actionable')
      .color(Colors.sortaBlack);
  }
});

function MIWall() {
  this.width = 1;
  this.height = 1;
}

MIWall.prototype.create = function(x, y) {
  Crafty.e('Wall').at(x, y, this.width, this.height);
}