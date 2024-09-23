// script.js
const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('game-status');
const resetButton = document.getElementById('reset-button');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2], // Rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonals
    [2, 4, 6]
];

// Display current player's turn
function updateStatus() {
    statusText.textContent = `Player ${currentPlayer}'s turn`;
}

// Check for a win or draw
function checkResult() {
    let roundWon = false;

    // Check each winning condition
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    // Check for a draw (if all cells are filled and no one has won)
    if (!board.includes('')) {
        statusText.textContent = "It's a draw!";
        gameActive = false;
        return;
    }

    // Switch players if game is still active
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateStatus();
}

// Handle player moves
function handleCellClick(e) {
    const cellIndex = e.target.getAttribute('data-index');

    // Prevent clicking if game is over or cell is already filled
    if (board[cellIndex] !== '' || !gameActive) {
        return;
    }

    // Update the board and UI
    board[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;

    // Check if the current move results in a win or draw
    checkResult();
}

// Reset the game
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    cells.forEach(cell => cell.textContent = '');
    updateStatus();
}

// Event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

// Initialize the game
updateStatus();
