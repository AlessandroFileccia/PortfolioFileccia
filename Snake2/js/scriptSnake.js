var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var grid = 16;
var score = 0;
var snake;
var apple;
var snakeSpeed = 165; 
var gameInterval;
var usernameInput = document.getElementById('username');
var leaderboardList = document.getElementById('leaderboardList');
var leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

function init() {
  snake = {
    x: 160,
    y: 160,
    dx: grid,
    dy: 0,
    cells: [],
    maxCells: 4
  };

  apple = {
    x: 320,
    y: 320
  };

  score = 0;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function moveSnake() {
  snake.x += snake.dx;
  snake.y += snake.dy;

  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  snake.cells.unshift({ x: snake.x, y: snake.y });

  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

  context.fillStyle = 'green';
  snake.cells.forEach(function (cell, index) {
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
      score += 50;
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    for (var i = index + 1; i < snake.cells.length; i++) {
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        clearInterval(gameInterval); 
        
        var username = usernameInput.value || "Anonimo";
        leaderboard.push({ username: username, score: score });
        leaderboard.sort((a, b) => b.score - a.score);
        leaderboard = leaderboard.slice(0, 5);
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        showLeaderboard();
        init();
        return; 
      }
    }
  });

  
  context.fillStyle = 'white';
  context.font = '20px Arial';
  context.fillText('Punteggio: ' + score, 10, 25);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 65 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  } else if (e.which === 87 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  } else if (e.which === 68 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  } else if (e.which === 83 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

function startGame() {
  init();
  gameInterval = setInterval(moveSnake, snakeSpeed);
}

function showLeaderboard() {
  leaderboardList.innerHTML = '';
  leaderboard.forEach(function (entry) {
    var li = document.createElement('li');
    li.textContent = entry.username + ': ' + entry.score;
    leaderboardList.appendChild(li);
  });
}

showLeaderboard();

var startButton = document.getElementById('startButton');
startButton.addEventListener('click', startGame);

