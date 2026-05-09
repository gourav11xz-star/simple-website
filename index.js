const http = require("http");

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gourav Bio</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    body {
      min-height: 100vh;
      background:
        radial-gradient(circle at top left, rgba(0, 195, 255, 0.35), transparent 35%),
        radial-gradient(circle at bottom right, rgba(140, 0, 255, 0.35), transparent 35%),
        #050505;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .card {
      width: 100%;
      max-width: 440px;
      padding: 35px 28px;
      border-radius: 28px;
      background: rgba(20, 20, 30, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.18);
      box-shadow: 0 0 70px rgba(0, 195, 255, 0.25);
      text-align: center;
    }

    .avatar {
      width: 120px;
      height: 120px;
      margin: 0 auto 18px;
      border-radius: 50%;
      background: linear-gradient(135deg, #00d4ff, #8b5cf6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 55px;
      font-weight: bold;
      box-shadow: 0 0 45px rgba(0, 212, 255, 0.55);
    }

    h1 {
      font-size: 38px;
      margin-bottom: 8px;
    }

    .username {
      color: #7dd3fc;
      margin-bottom: 18px;
      font-size: 15px;
    }

    .bio {
      color: #cbd5e1;
      line-height: 1.6;
      margin-bottom: 24px;
      font-size: 15px;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      margin-bottom: 24px;
    }

    .stat {
      padding: 14px 8px;
      border-radius: 16px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.12);
    }

    .stat b {
      color: #38bdf8;
      display: block;
      font-size: 18px;
    }

    .stat span {
      color: #94a3b8;
      font-size: 12px;
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: 13px;
    }

    .link {
      padding: 16px;
      border-radius: 17px;
      background: rgba(255,255,255,0.09);
      border: 1px solid rgba(255,255,255,0.14);
      color: white;
      text-decoration: none;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      transition: 0.25s;
    }

    .link:hover {
      background: rgba(56,189,248,0.22);
      border-color: #38bdf8;
      transform: translateY(-3px);
    }

    .music {
      margin-top: 22px;
      padding: 14px;
      border-radius: 16px;
      background: rgba(255,255,255,0.07);
      color: #cbd5e1;
      font-size: 14px;
    }

    .footer {
      margin-top: 18px;
      color: #64748b;
      font-size: 13px;
    }
  </style>
</head>

<body>
  <div class="card">
    <div class="avatar">G</div>

    <h1>Gourav</h1>
    <div class="username">@gourav11xz-star</div>

    <div class="bio">
      Developer • Creator • Gamer<br>
      Welcome to my premium bio link page.
    </div>

    <div class="stats">
      <div class="stat">
        <b>1.2K</b>
        <span>Views</span>
      </div>
      <div class="stat">
        <b>24/7</b>
        <span>Online</span>
      </div>
      <div class="stat">
        <b>AWS</b>
        <span>Hosted</span>
      </div>
    </div>

    <div class="links">
      <a class="link" href="https://github.com/gourav11xz-star" target="_blank">
        <span>GitHub</span><span>↗</span>
      </a>
      <a class="link" href="#" target="_blank">
        <span>Discord</span><span>↗</span>
      </a>
      <a class="link" href="#" target="_blank">
        <span>YouTube</span><span>↗</span>
      </a>
      <a class="link" href="#" target="_blank">
        <span>Instagram</span><span>↗</span>
      </a>
    </div>

    <div class="music">🎧 Now Playing: Premium Vibes</div>
    <div class="footer">made by Gourav • running on AWS</div>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Bio website running on port 3000");
});
