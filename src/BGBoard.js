/**
 * Describes the viewable area of the game.
 */
function BGBoard() {}

// Number of tiles across and down
BGBoard.gridWidth = 16;
BGBoard.gridHeight = 12;

// Size of tiles in pixels
BGBoard.tileWidth = 32;
BGBoard.tileHeight = 32;

/**
 * @return The pixel width of the board.
 */
BGBoard.getWidth = function() {
  return this.gridWidth * this.tileWidth;
}

/**
 * @return the pixel height of the board.
 */
 BGBoard.getHeight = function() {
  return this.gridHeight * this.tileHeight;
 }