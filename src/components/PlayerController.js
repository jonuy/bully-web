/**
 * PlayerController Crafty component
 */
Crafty.c('PlayerController', {
  init: function() {
    this.requires('2D, Canvas, MapItem, Collision, Color, Fourway, SpriteAnimation, spr_player')
      .fourway(2)
      .color('rgb(125, 30, 30)')
      .stopsOnSolids()
      .animate('PlayerMovingUp', 0, 0, 2)
      .animate('PlayerMovingRight', 0, 1, 2)
      .animate('PlayerMovingDown', 0, 2, 2)
      .animate('PlayerMovingLeft', 0, 3, 2);

    var animation_speed = 10;
    this.bind('NewDirection', function(data) {
      if (data.x > 0) {
        this.animate('PlayerMovingRight', animation_speed, -1);
      }
      else if (data.x < 0) {
        this.animate('PlayerMovingLeft', animation_speed, -1);
      }
      else if (data.y < 0) {
        this.animate('PlayerMovingUp', animation_speed, -1);
      }
      else if (data.y > 0) {
        this.animate('PlayerMovingDown', animation_speed, -1);
      }
      else {
        this.stop();
      }
    });
  },

  stopMovement: function() {
    this._speed = 0;
    if (this._movement) {
      this.x -= this._movement.x;
      this.y -= this._movement.y;
    }
  },

  stopsOnSolids: function() {
    this.onHit('Solid', this.stopMovement);

    return this;
  },
});

/**
 * PlayerController
 */
function PlayerController() {
  this.width = 1;
  this.height = 1;
}

/**
 * Create and place a PlayerController in the scene.
 *
 * @param x Horizontal grid position to place the entity
 * @param y Vertical grid position to place the entity
 *
 * @return Crafty entity of this PlayerController
 */
PlayerController.prototype.create = function(x, y) {
  return Crafty.e('PlayerController').at(x, y, this.width, this.height)
}