# Explanation:

## HTML:

The game board consists of a 3x3 grid of div elements, each representing a cell. Each cell is clickable and contains a data-index attribute that corresponds to the index in the board array.
There is also a status text (#game-status) that shows the current player's turn or the result of the game (win/draw).
A reset button is provided to restart the game.

## CSS:

The board is styled with a grid layout where each cell has a fixed size.
The current player is displayed at the top, and the reset button is styled to restart the game.
Basic hover effects and font settings make the game look clean.

## JavaScript:

The board array represents the state of the game, where each cell can hold 'X', 'O', or '' (empty).
Winning conditions are predefined as an array of index combinations that represent rows, columns, or diagonals.
handleCellClick: This function handles the player’s move. It updates the board, checks for a win or a draw, and switches the current player.
checkResult: This function checks if a player has won or if the game ends in a draw.
resetGame: This function resets the game state and the UI.
The game starts with player 'X' and switches turns after each move.

# How It Works:

## Initial State:

The game starts with player X. The UI shows "Player X's turn".
Players take turns clicking on the empty cells.

## Gameplay:

Each time a player clicks on a cell, the symbol X or O appears in the cell.
The game checks if the player won or if the game ended in a draw after each move.
If a player wins, the game stops and displays the winner.
If all cells are filled and no one wins, the game declares a draw.

## Reset:

The "Reset Game" button resets the board and starts a new game with player X.

## Example:
When you open this HTML file in a browser, you will see a Tic-Tac-Toe board. Players X and O can click on the cells to place their marks. After every move, the game checks if there is a winner or a draw.