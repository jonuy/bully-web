/**
 * Describes the viewable area of the game.
 */
function BGBoard() {}

// Number of tiles across and down
BGBoard.horizontalTiles = 16;
BGBoard.verticalTiles = 12;

// Size of tiles in pixels
BGBoard.tileWidth = 32;
BGBoard.tileHeight = 32;

/**
 * @return The pixel width of the board.
 */
BGBoard.getViewportWidth = function() {
  return BGBoard.horizontalTiles * BGBoard.tileWidth;
}

/**
 * @return the pixel height of the board.
 */
 BGBoard.getViewportHeight = function() {
  return BGBoard.verticalTiles * BGBoard.tileHeight;
 }