/**
 * 
 */
function Game() {}

Game.start = function() {
  Crafty.init(BGBoard.getWidth(), BGBoard.getHeight());
  Crafty.background(Colors.background);

  Crafty.scene('LoadingScene');
};