/**
 *
 */
function BGMap() {
  this.width = 0;
  this.height = 0;
}

BGMap.prototype.create = function() {
  var pcX=0, pcY=0;

  // Iterate through the map and create the entities
  for (y = 0; y < this.height; y++) {
    for (x = 0; x < this.width; x++) {
      var map = this.map();
      var val = map[y][x];

      // Player
      if (val == 'x') {
        pcX = x;
        pcY = y;
      }
      // Wall
      else if (val == 1) {
        new MIWall().create(x, y);
      }
      // Dialogue test
      else if (val == 'd') {
        new MIDialogueTest().create(x, y);
      }
      // Water Fountain
      else if (val == 'w') {
        new MIWaterFountain().create(x, y);
      }
    }
  }

  // Create player controller after all other entities have been created
  // Crafty.viewport.follow() can get screwy if all entities haven't been
  // placed in the map yet.
  var player = new PlayerController();
  var craftyPlayer = player.create(pcX, pcY);
  Crafty.viewport.follow(craftyPlayer, 0, 0);

  // Fade-in screen, needs to be the last entity drawn to the screen
  var fadeInScreen = Crafty.e('FadeInScreen');
}

/**
 * 2D array defining the map layout
 */
BGMap.prototype.map = function() {
  return {};
}

/**
 *
 */
Crafty.c('FadeInScreen', {
  init: function() {
    this.requires('2D, Canvas, Color, Tween')
      .attr({
        alpha: 1.0,
        x: 0,
        y: 0,
        w: BGBoard.getViewportWidth(),
        h: BGBoard.getViewportHeight()
      })
      .color(Colors.black)
      .tween({alpha:0.0}, 100);

    this.bind('TweenEnd', function(e) {
      console.log('End of the screen fade in');
    });
  },
});

/**
 * TestMap
 */
function TestMap() {
  this.width = 20;
  this.height = 20;
}
TestMap.prototype = new BGMap();
TestMap.prototype.constructor = TestMap;

TestMap.prototype.map = function() {
  return [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 'w', 0, 'x', 0, 'd', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
}

/**
 * School Drop Off map
 */
function SchoolDropOffMap() {

}