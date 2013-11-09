Crafty.c('MIWaterFountain', {
  init: function() {
    this.requires('2D, Canvas, MapItem, Color, Solid, MenuTrigger')
      .color(Colors.water);
  }
});

function MIWaterFountain() {
  this.width = 1;
  this.height = 1;
}

MIWaterFountain.prototype.create = function(x, y) {
  Crafty.e('MIWaterFountain').at(x, y, this.width, this.height);
}