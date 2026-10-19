/*
  game.js
  Canvas Breakout: paddle, ball, bricks, score, lives, restart.
  Controls: Arrow keys / A-D, mouse, and touch on the canvas only.
*/

(function () {
  const canvas = document.getElementById("breakout");
  if (!canvas || !canvas.getContext) return;

  const scoreEl = document.querySelector("[data-score]");
  const livesEl = document.querySelector("[data-lives]");
  const restartBtn = document.querySelector("[data-restart]");
  const ctx = canvas.getContext("2d");

  const W = 800;
  const H = 600;

  const keys = { left: false, right: false };
  let running = true;
  let rafId = 0;
  let lastTime = 0;

  const state = {
    score: 0,
    lives: 3,
    status: "playing", // playing | won | lost
    paddle: { w: 110, h: 14, x: 345, y: 560, speed: 420 },
    ball: { x: 400, y: 430, r: 8, vx: 220, vy: -260 },
    bricks: [],
  };

  function cssColor(name, fallback) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return value || fallback;
  }

  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function buildBricks() {
    const rows = 5;
    const cols = 10;
    const gap = 8;
    const offsetTop = 70;
    const offsetLeft = 24;
    const brickW = (W - offsetLeft * 2 - gap * (cols - 1)) / cols;
    const brickH = 22;
    const bricks = [];

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        bricks.push({
          x: offsetLeft + col * (brickW + gap),
          y: offsetTop + row * (brickH + gap),
          w: brickW,
          h: brickH,
          alive: true,
          points: (rows - row) * 10,
        });
      }
    }
    state.bricks = bricks;
  }

  function resetBallAndPaddle() {
    state.paddle.x = (W - state.paddle.w) / 2;
    state.ball.x = W / 2;
    state.ball.y = H - 170;
    state.ball.vx = 220 * (Math.random() > 0.5 ? 1 : -1);
    state.ball.vy = -260;
  }

  function restart() {
    state.score = 0;
    state.lives = 3;
    state.status = "playing";
    buildBricks();
    resetBallAndPaddle();
    updateHud();
    if (!running) {
      running = true;
      lastTime = 0;
      rafId = requestAnimationFrame(loop);
    }
  }

  function updateHud() {
    if (scoreEl) scoreEl.textContent = String(state.score);
    if (livesEl) livesEl.textContent = String(state.lives);
  }

  function movePaddleTo(centerX) {
    state.paddle.x = Math.min(Math.max(centerX - state.paddle.w / 2, 0), W - state.paddle.w);
  }

  function clientToGameX(clientX) {
    const rect = canvas.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * W;
  }

  function collideBallBrick(ball, brick) {
    return (
      ball.x + ball.r > brick.x &&
      ball.x - ball.r < brick.x + brick.w &&
      ball.y + ball.r > brick.y &&
      ball.y - ball.r < brick.y + brick.h
    );
  }

  function update(dt) {
    if (state.status !== "playing") return;

    const paddle = state.paddle;
    const ball = state.ball;

    if (keys.left) paddle.x -= paddle.speed * dt;
    if (keys.right) paddle.x += paddle.speed * dt;
    paddle.x = Math.min(Math.max(paddle.x, 0), W - paddle.w);

    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt;

    if (ball.x - ball.r < 0) {
      ball.x = ball.r;
      ball.vx *= -1;
    } else if (ball.x + ball.r > W) {
      ball.x = W - ball.r;
      ball.vx *= -1;
    }

    if (ball.y - ball.r < 0) {
      ball.y = ball.r;
      ball.vy *= -1;
    }

    if (
      ball.y + ball.r >= paddle.y &&
      ball.y + ball.r <= paddle.y + paddle.h + 8 &&
      ball.x > paddle.x &&
      ball.x < paddle.x + paddle.w &&
      ball.vy > 0
    ) {
      ball.y = paddle.y - ball.r;
      ball.vy *= -1;
      /* Aim based on where the ball hits the paddle. */
      const hit = (ball.x - (paddle.x + paddle.w / 2)) / (paddle.w / 2);
      ball.vx = hit * 280;
    }

    state.bricks.forEach(function (brick) {
      if (!brick.alive) return;
      if (!collideBallBrick(ball, brick)) return;
      brick.alive = false;
      state.score += brick.points;
      ball.vy *= -1;
      updateHud();
    });

    if (state.bricks.every(function (brick) { return !brick.alive; })) {
      state.status = "won";
    }

    if (ball.y - ball.r > H) {
      state.lives -= 1;
      updateHud();
      if (state.lives <= 0) {
        state.status = "lost";
      } else {
        resetBallAndPaddle();
      }
    }
  }

  function draw() {
    const bg = cssColor("--bg-muted", "#1a2438");
    const text = cssColor("--text", "#f4f1ea");
    const accent = cssColor("--accent", "#2dd4bf");
    const elevated = cssColor("--bg-elevated", "#121a2b");

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = accent;
    ctx.fillRect(state.paddle.x, state.paddle.y, state.paddle.w, state.paddle.h);

    ctx.beginPath();
    ctx.arc(state.ball.x, state.ball.y, state.ball.r, 0, Math.PI * 2);
    ctx.fillStyle = text;
    ctx.fill();

    state.bricks.forEach(function (brick, index) {
      if (!brick.alive) return;
      ctx.fillStyle = index % 2 === 0 ? accent : elevated;
      ctx.fillRect(brick.x, brick.y, brick.w, brick.h);
    });

    if (state.status !== "playing") {
      ctx.fillStyle = "rgba(11, 18, 32, 0.55)";
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "#fff";
      ctx.font = "600 32px Outfit, system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(
        state.status === "won" ? t("game.won") : t("game.lost"),
        W / 2,
        H / 2
      );
      ctx.font = "400 18px Source Sans 3, system-ui, sans-serif";
      ctx.fillText(t("game.again"), W / 2, H / 2 + 36);
    }
  }

  function loop(timestamp) {
    if (!running) return;
    if (!lastTime) lastTime = timestamp;
    const dt = Math.min((timestamp - lastTime) / 1000, 0.033);
    lastTime = timestamp;
    update(dt);
    draw();
    rafId = requestAnimationFrame(loop);
  }

  window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") keys.left = true;
    if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") keys.right = true;
    if (["ArrowLeft", "ArrowRight"].indexOf(event.key) !== -1) event.preventDefault();
  });

  window.addEventListener("keyup", function (event) {
    if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") keys.left = false;
    if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") keys.right = false;
  });

  canvas.addEventListener("pointerdown", function (event) {
    canvas.setPointerCapture(event.pointerId);
    movePaddleTo(clientToGameX(event.clientX));
  });

  canvas.addEventListener("pointermove", function (event) {
    movePaddleTo(clientToGameX(event.clientX));
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      running = false;
      cancelAnimationFrame(rafId);
    } else {
      running = true;
      lastTime = 0;
      rafId = requestAnimationFrame(loop);
    }
  });

  window.addEventListener("resize", resizeCanvas);
  if (restartBtn) restartBtn.addEventListener("click", restart);

  resizeCanvas();
  restart();
})();
