Crafty.c('MapItem', {
  init: function() {
    // Default width and height to size of 1 tile
    this.attr({
      w: BGBoard.tileWidth,
      h: BGBoard.tileHeight
    });
  },

  at: function(x, y, width, height) {
    // if (x === undefined && y === undefined) {
    //   return {x: 2, y: 2}
    // }
    // else {
      this.attr({
        x: x * BGBoard.tileWidth,
        y: y * BGBoard.tileHeight,
        w: width * BGBoard.tileWidth,
        h: height * BGBoard.tileHeight
      });
      return this;
    // }
  },
});