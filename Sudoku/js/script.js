document.addEventListener('DOMContentLoaded', function () {
    const sudokuGrid = document.getElementById('griglia-sudoku');
    const solveBtn = document.getElementById('pulsante-risolvi');
    const resetBtn = document.createElement('button');
    const generateBtn = document.getElementById('genera-btn');
    
    resetBtn.textContent = 'Reset';
    resetBtn.className = 'reset-btn';
    solveBtn.insertAdjacentElement('afterend', resetBtn);

    const cells = [];

    for (let i = 0; i < 81; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cella-sudoku');
        cell.contentEditable = true;
        cell.addEventListener('input', validateInput);
        sudokuGrid.appendChild(cell);
        cells.push(cell);
    }

    function validateInput(e) {
        const input = e.target.textContent.trim();
        if (!/^[1-9]$/.test(input)) {
            alert('Hai inserito un numero non valido. Inserisci un numero da 1 a 9.');
            e.target.textContent = '';
            return;
        }
    
        const sudokuValues = cells.map(cell => cell.textContent.trim() || '0').join('');
        if (!isValidSudoku(sudokuValues)) {
            alert('Hai inserito un numero che rende impossibile risolvere il Sudoku.');
            e.target.textContent = '';
            return;
        }
    
        const row = Math.floor(Array.from(sudokuGrid.children).indexOf(e.target) / 9);
        const col = Array.from(e.target.parentElement.children).indexOf(e.target);
        
        if (isDuplicate(row, col, input)) {
            alert('Hai inserito lo stesso numero in caselle adiacenti.');
            e.target.textContent = '';
        }
    }
    
    function isValidSudoku(sudoku) {
        const grid = [];
        for (let i = 0; i < 9; i++) {
            grid.push(sudoku.slice(i * 9, (i + 1) * 9).split('').map(Number));
        }
    
        function isValid(row, col, num) {
            for (let i = 0; i < 9; i++) {
                if (grid[row][i] === num || grid[i][col] === num || grid[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === num) {
                    return false;
                }
            }
            return true;
        }
    
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const num = grid[row][col];
                if (num !== 0) {
                    grid[row][col] = 0;
                    if (!isValid(row, col, num)) {
                        return false;
                    }
                    grid[row][col] = num;
                }
            }
        }
    
        return true;
    }
    

    solveBtn.addEventListener('click', function () {
        const sudokuValues = cells.map(cell => cell.textContent.trim() || '0').join('');
        const solvedSudoku = solveSudoku(sudokuValues);
        if (solvedSudoku) {
            cells.forEach((cell, index) => cell.textContent = solvedSudoku[index]);
        } else {
            alert('Il Sudoku non può essere risolto. Controlla l\'input.');
        }
    });

    function solveSudoku(sudoku) {
        const grid = [];
        for (let i = 0; i < 9; i++) {
            grid.push(sudoku.slice(i * 9, (i + 1) * 9).split('').map(Number));
        }

        function solve() {
            for (let row = 0; row < 9; row++) {
                for (let col = 0; col < 9; col++) {
                    if (grid[row][col] === 0) {
                        for (let num = 1; num <= 9; num++) {
                            if (isValid(row, col, num)) {
                                grid[row][col] = num;
                                if (solve()) {
                                    return true;
                                }
                                grid[row][col] = 0;
                            }
                        }
                        return false;
                    }
                }
            }
            return true;
        }

        function isValid(row, col, num) {
            for (let i = 0; i < 9; i++) {
                if (grid[row][i] === num || grid[i][col] === num || grid[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === num) {
                    return false;
                }
            }
            return true;
        }

        if (solve()) {
            return grid.map(row => row.join('')).join('');
        } else {
            return false;
        }
    }

    resetBtn.addEventListener('click', function () {
        cells.forEach(cell => cell.textContent = '');
    });
});

