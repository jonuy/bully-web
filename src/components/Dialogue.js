/**
 * Dialogue component
 */
Crafty.c('Dialogue', {
  init: function() {
    this.requires('2D, DOM, Text')
      .css({
        'background-color': 'white',
        'border': '10px solid black',
        'border-radius': '10px',
        'text-align': 'left',
      })
      .textColor('#000000')
      .textFont({
        size: '24px',
        family: 'VT323'
      });
  },
});

/**
 * Dialogue constructor
 */
function Dialogue() {
  this.width = BGBoard.getViewportWidth();
  this.height = 100;

  // Index of the current message
  this.currentMessage = 0;

  // Reference to Dialogue Crafty entity
  this.entity = undefined;

  // Array of strings to display
  this.messages = [];

  return this;
}

/**
 * Dialogue.create(items)
 */
Dialogue.prototype.create = function(messages) {
  this.currentMessage = 0;
  this.messages = messages;

  this.entity = Crafty.e('Dialogue')
    .attr({x:0, y: 0, w: this.width, h: this.height})
    .text(this.messages[0]);
}

/**
 * Dialogue.destroy()
 */
Dialogue.prototype.destroy = function() {
  this.entity.destroy();
  this.entity = undefined;
}

/**
 * Dialogue.displayNext()
 */
Dialogue.prototype.displayNext = function() {
  this.currentMessage++;
  this.entity.text(this.messages[this.currentMessage]);
}

/**
 * Dialogue.hasNext()
 */
Dialogue.prototype.hasNext = function() {
  return this.currentMessage + 1 < this.messages.length;
}

/**
 * Dialogue Test Component
 */
Crafty.c('DialogueTest', {
  init: function() {
    this.requires('2D, Canvas, MapItem, Color, Solid, Actionable')
      .color('rgb(300, 210, 100)')
      .setAction('open-dialogue');
  }
});

function MIDialogueTest() {
  this.width = 1;
  this.height = 1;
}

MIDialogueTest.prototype.create = function(x, y) {
  Crafty.e('DialogueTest').at(x, y, this.width, this.height);
}