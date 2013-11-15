/**
 * PlayerController Crafty component
 */
Crafty.c('PlayerController', {
  mDialogue: undefined,
  mMenu: undefined,

  init: function() {
    this.requires('2D, Canvas, MapItem, Collision, Color, Fourway,' +
        'SpriteAnimation, spr_player')
      .fourway(2)
      .color('rgb(125, 30, 30)')
      .stopsOnSolids()
      .animate('PlayerMovingUp', 0, 0, 2)
      .animate('PlayerMovingRight', 0, 1, 2)
      .animate('PlayerMovingDown', 0, 2, 2)
      .animate('PlayerMovingLeft', 0, 3, 2);

    var animation_speed = 10;
    this.bind('NewDirection', function(movement) {
      if (movement.x > 0) {
        this.animate('PlayerMovingRight', animation_speed, -1);
      }
      else if (movement.x < 0) {
        this.animate('PlayerMovingLeft', animation_speed, -1);
      }
      else if (movement.y < 0) {
        this.animate('PlayerMovingUp', animation_speed, -1);
      }
      else if (movement.y > 0) {
        this.animate('PlayerMovingDown', animation_speed, -1);
      }
      else {
        this.stop();
      }
    });

    // Handle the rest of the key
    this.bind('KeyUp', function(e) {
      if (e.key == Crafty.keys['SPACE']) {
        var pcXmin = this._x,
            pcYmin = this._y,
            pcXmax = pcXmin + this.w,
            pcYmax = pcYmin + this.h;

        // Check if the PC is touching some Actionable entity
        var action = false;
        searchResults = Crafty.map.search(this, false);
        for(i = 0; i < searchResults.length; i++) {
          var checkObj = searchResults[i];
          if (checkObj.__c['Actionable']) {
            var objXmin = checkObj._x,
                objYmin = checkObj._y,
                objXmax = objXmin + checkObj.w,
                objYmax = objYmin + checkObj.h;

            if (((objXmin <= pcXmin && pcXmin <= objXmax) || 
                    (objXmin <= pcXmax && pcXmax <= objXmax) ||
                    (pcXmin <= objXmin && objXmin <= pcXmax) ||
                    (pcXmin <= objXmax && objXmax <= pcXmax)) &&
                  ((objYmin <= pcYmin && pcYmin <= objYmax) ||
                    (objYmin <= pcYmax && pcYmax <= objYmax) ||
                    (pcYmin <= objYmin && objYmin <= pcYmax) ||
                    (pcYmin <= objYmax && objYmax <= pcYmax))) {
              action = checkObj.getAction();
              break;
            }
          }
        }

        // Handle the action detected, if any
        if (action == 'open-menu') {
          // Remove the open menu
          if (this.mMenu != undefined) {
            this.mMenu.makeSelection();
            this.mMenu.destroy();
            this.mMenu = undefined;

            // Re-enable PC movement
            this.enableControl();

            // Unbind the menu control callback
            this.unbind('KeyUp', this.menuControlCallback);
          }
          // Create and display a new Menu
          else {
            this.mMenu = new Menu();
            this.mMenu.create(['Option A', 'Option B', 'Option C']);

            this.bind('KeyUp', this.menuControlCallback);

            // Prevent PC from moving
            this.disableControl();
          }
        }
        else if (action == 'open-dialogue') {
          if (this.mDialogue == undefined) {
            var testConversation = [
              'Lorem ipsum dolor sit amet...',
              'Cupcake ipsum dolor eat cake it.'
            ];
            this.mDialogue = new Dialogue();
            this.mDialogue.create(testConversation);

            this.disableControl();
          }
          else {
            if (this.mDialogue.hasNext()) {
              this.mDialogue.displayNext();
            }
            else {
              this.mDialogue.destroy();
              this.mDialogue = undefined;

              this.enableControl();
            }
          }
        }
      }
    });
  },

  menuControlCallback: function (e) {
    // Up arrow
    if (e.keyCode == 38) {
      this.mMenu.moveSelectorUp();
    }
    // Down arrow
    else if (e.keyCode == 40) {
      this.mMenu.moveSelectorDown();
    }
  },

  stopsOnSolids: function() {
    this.bind('Moved', function(from) {
       if(this.hit('Solid')){
           this.attr({x: from.x, y: from.y});
        }
    });

    return this;
  },
});

/**
 * PlayerController
 */
function PlayerController() {}

PlayerController.width = 1;
PlayerController.height = 1;

/**
 * Create and place a PlayerController in the scene.
 *
 * @param x Horizontal grid position to place the entity
 * @param y Vertical grid position to place the entity
 *
 * @return Crafty entity of this PlayerController
 */
PlayerController.prototype.create = function(x, y) {
  return Crafty.e('PlayerController').at(x, y, PlayerController.width, PlayerController.height)
}