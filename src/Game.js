/**
 * 
 */
function Game() {}

Game.start = function() {
  Crafty.init(BGBoard.getViewportWidth(), BGBoard.getViewportHeight());
  Crafty.background(Colors.background);

  Crafty.scene('LoadingScene');
};