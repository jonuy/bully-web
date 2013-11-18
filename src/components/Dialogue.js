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
        'padding': '5px',
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

  // Next arrow entity
  this.nextArrow = undefined;

  return this;
}

/**
 * Dialogue.create(items)
 */
Dialogue.prototype.create = function(messages) {
  this.currentMessage = 0;
  this.messages = messages;

  this.entity = Crafty.e('Dialogue')
    .attr({
      x: 0,
      y: 0,
      w: this.width - 10 * 2 /*border width*/ - 5 * 2 /*padding*/,
      h: this.height
    })
    .text(this.messages[0]);

  if (this.messages.length > 1) {
    this.nextArrow = Crafty.e('DialogueNextArrow')
      .attr({
        x: this.width - 10 * 4,
        y: this.height,
        w: 0,
        h: 0
      });
  }
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

  if (this.currentMessage == this.messages.length - 1) {
    this.nextArrow.destroy();
    this.nextArrow = undefined;
  }
}

/**
 * Dialogue.hasNext()
 */
Dialogue.prototype.hasNext = function() {
  return this.currentMessage + 1 < this.messages.length;
}

/**
 * Dialogue next arrow Component
 */
Crafty.c('DialogueNextArrow', {
  init: function() {
    this.requires('2D, DOM')
      .css({
        'border-style': 'solid',
        'border-width': '10px 10px 0 10px',
        'border-color': '#000 transparent transparent transparent',
        'text-align': 'left',
      });
  }
});

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