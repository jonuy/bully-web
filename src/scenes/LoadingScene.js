Crafty.scene('LoadingScene', function() {
  Crafty.e('2D, DOM, Text')
    .attr({x: 50, y: 50, w: 250})
    .text('Loading...');

  Crafty.load([
      'assets/hunter.png',
    ], function() {

    Crafty.sprite(16, 'assets/hunter.png', {
      spr_player: [0, 2]
    }, 0, 2);

    // Once assets are loaded, safe to load next scene
    Crafty.scene('DropOffScene');
  });
},
function() {

});