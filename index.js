const http = require("http");

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gourav | Premium Website</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    body {
      min-height: 100vh;
      background: radial-gradient(circle at top, #2563eb, #020617 55%);
      color: white;
      overflow-x: hidden;
    }

    nav {
      width: 100%;
      padding: 24px 8%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 26px;
      font-weight: bold;
      letter-spacing: 1px;
    }

    .logo span {
      color: #38bdf8;
    }

    .nav-btn {
      padding: 12px 22px;
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 999px;
      color: white;
      text-decoration: none;
      background: rgba(255,255,255,0.08);
      backdrop-filter: blur(10px);
    }

    .hero {
      min-height: 80vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 8%;
      text-align: center;
    }

    .card {
      max-width: 900px;
      padding: 55px;
      border-radius: 32px;
      background: rgba(255,255,255,0.10);
      border: 1px solid rgba(255,255,255,0.20);
      box-shadow: 0 30px 100px rgba(0,0,0,0.45);
      backdrop-filter: blur(18px);
      animation: float 4s ease-in-out infinite;
    }

    .badge {
      display: inline-block;
      padding: 10px 18px;
      border-radius: 999px;
      background: rgba(56,189,248,0.18);
      color: #7dd3fc;
      margin-bottom: 22px;
      font-size: 15px;
      border: 1px solid rgba(125,211,252,0.35);
    }

    h1 {
      font-size: clamp(42px, 7vw, 82px);
      line-height: 1.05;
      margin-bottom: 22px;
    }

    h1 span {
      color: #38bdf8;
    }

    p {
      font-size: 20px;
      color: #cbd5e1;
      max-width: 720px;
      margin: 0 auto 34px;
      line-height: 1.7;
    }

    .buttons {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: 15px 28px;
      border-radius: 14px;
      text-decoration: none;
      font-weight: bold;
      transition: 0.3s;
    }

    .primary {
      background: #38bdf8;
      color: #020617;
      box-shadow: 0 15px 40px rgba(56,189,248,0.35);
    }

    .secondary {
      background: rgba(255,255,255,0.10);
      color: white;
      border: 1px solid rgba(255,255,255,0.25);
    }

    .btn:hover {
      transform: translateY(-4px);
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-top: 42px;
    }

    .stat {
      padding: 22px;
      border-radius: 20px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.14);
    }

    .stat h2 {
      color: #38bdf8;
      margin-bottom: 6px;
      font-size: 32px;
    }

    .stat small {
      color: #cbd5e1;
    }

    footer {
      text-align: center;
      padding: 25px;
      color: #94a3b8;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @media (max-width: 700px) {
      nav {
        padding: 20px;
      }

      .card {
        padding: 35px 22px;
      }

      .stats {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <nav>
    <div class="logo">Gourav<span>Web</span></div>
    <a class="nav-btn" href="#">Live on AWS</a>
  </nav>

  <section class="hero">
    <div class="card">
      <div class="badge">🚀 Premium Website Running </div>
      <h1>Welcome to <span>My Website</span></h1>
      <p>
        This is a clean, modern and premium landing page hosted on an clouds server using Node.js.
        Fast, responsive and ready to customize.
      </p>

      <div class="buttons">
        <a class="btn primary" href="#">Get Started</a>
        <a class="btn secondary" href="https://github.com/gourav11xz-star/simple-website">View GitHub</a>
      </div>

      <div class="stats">
        <div class="stat">
          <h2>100%</h2>
          <small>Live Server</small>
        </div>
        <div class="stat">
          <h2>AWS</h2>
          <small>EC2 Hosting</small>
        </div>
        <div class="stat">
          <h2>Node</h2>
          <small>Backend Running</small>
        </div>
      </div>
    </div>
  </section>

  <footer>
    Made by Gourav • Powered by AWS EC2
  </footer>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Premium website running on port 3000");
});
