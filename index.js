const http = require("http");

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gourav • Bio</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Inter, Arial, sans-serif;
    }

    body {
      min-height: 100vh;
      background: #050505;
      color: white;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .bg {
      position: fixed;
      inset: 0;
      background:
        radial-gradient(circle at 20% 20%, rgba(120, 0, 255, 0.35), transparent 30%),
        radial-gradient(circle at 80% 80%, rgba(0, 180, 255, 0.25), transparent 35%),
        linear-gradient(135deg, #030303, #090909);
      z-index: -3;
    }

    .noise {
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
      background-size: 38px 38px;
      opacity: 0.35;
      z-index: -2;
    }

    .glow {
      position: fixed;
      width: 420px;
      height: 420px;
      border-radius: 50%;
      background: rgba(120, 0, 255, 0.18);
      filter: blur(90px);
      z-index: -1;
      animation: move 6s infinite alternate ease-in-out;
    }

    @keyframes move {
      from { transform: translate(-140px, -80px); }
      to { transform: translate(140px, 90px); }
    }

    .card {
      width: 92%;
      max-width: 480px;
      padding: 34px;
      border-radius: 28px;
      background: rgba(12, 12, 16, 0.78);
      border: 1px solid rgba(255,255,255,0.16);
      box-shadow:
        0 0 90px rgba(120, 0, 255, 0.35),
        inset 0 0 40px rgba(255,255,255,0.03);
      backdrop-filter: blur(18px);
      text-align: center;
      animation: show 0.8s ease;
    }

    @keyframes show {
      from {
        opacity: 0;
        transform: translateY(25px) scale(0.96);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .banner {
      height: 135px;
      border-radius: 22px;
      background:
        linear-gradient(135deg, rgba(139,92,246,0.75), rgba(14,165,233,0.6)),
        url("https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80");
      background-size: cover;
      background-position: center;
      margin-bottom: -55px;
      border: 1px solid rgba(255,255,255,0.12);
    }

    .avatar {
      width: 112px;
      height: 112px;
      margin: 0 auto 14px;
      border-radius: 50%;
      background: linear-gradient(135deg, #8b5cf6, #38bdf8);
      border: 5px solid #0b0b10;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 54px;
      font-weight: 900;
      box-shadow: 0 0 35px rgba(139,92,246,0.8);
      position: relative;
    }

    .status {
      position: absolute;
      right: 7px;
      bottom: 10px;
      width: 18px;
      height: 18px;
      background: #22c55e;
      border-radius: 50%;
      border: 3px solid #0b0b10;
      box-shadow: 0 0 18px #22c55e;
    }

    h1 {
      font-size: 36px;
      margin-top: 8px;
      letter-spacing: 0.5px;
    }

    .name-glow {
      text-shadow: 0 0 22px rgba(139,92,246,0.9);
    }

    .tag {
      color: #a78bfa;
      margin-top: 7px;
      font-size: 15px;
    }

    .bio {
      margin: 18px auto 22px;
      color: #d1d5db;
      line-height: 1.7;
      font-size: 15px;
      max-width: 360px;
    }

    .views {
      display: inline-flex;
      gap: 8px;
      align-items: center;
      padding: 9px 14px;
      border-radius: 999px;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.12);
      color: #cbd5e1;
      font-size: 14px;
      margin-bottom: 22px;
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: 13px;
    }

    .link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 18px;
      border-radius: 17px;
      text-decoration: none;
      color: white;
      background: rgba(255,255,255,0.075);
      border: 1px solid rgba(255,255,255,0.13);
      transition: 0.25s;
      font-weight: 700;
    }

    .left {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .icon {
      width: 34px;
      height: 34px;
      border-radius: 11px;
      background: rgba(139,92,246,0.25);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .link:hover {
      transform: translateY(-3px) scale(1.015);
      border-color: rgba(167,139,250,0.8);
      background: rgba(139,92,246,0.18);
      box-shadow: 0 16px 45px rgba(139,92,246,0.23);
    }

    .music {
      margin-top: 20px;
      padding: 15px;
      border-radius: 18px;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.12);
      display: flex;
      align-items: center;
      gap: 13px;
      text-align: left;
    }

    .disc {
      width: 43px;
      height: 43px;
      border-radius: 50%;
      background: conic-gradient(#8b5cf6, #38bdf8, #8b5cf6);
      animation: spin 3s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .song b {
      display: block;
      font-size: 14px;
    }

    .song span {
      color: #94a3b8;
      font-size: 13px;
    }

    .footer {
      margin-top: 18px;
      color: #64748b;
      font-size: 13px;
    }

    @media (max-width: 480px) {
      .card {
        padding: 22px;
      }

      h1 {
        font-size: 31px;
      }
    }
  </style>
</head>

<body>
  <div class="bg"></div>
  <div class="noise"></div>
  <div class="glow"></div>

  <div class="card">
    <div class="banner"></div>

    <div class="avatar">
      G
      <div class="status"></div>
    </div>

    <h1 class="name-glow">Gourav</h1>
    <div class="tag">@gourav11xz-star</div>

    <div class="bio">
      Developer • Creator • Gamer<br>
      Premium bio page running live on AWS.
    </div>

    <div class="views">👁️ 1,337 profile views</div>

    <div class="links">
      <a class="link" href="https://github.com/gourav11xz-star" target="_blank">
        <div class="left">
          <div class="icon">💻</div>
          <span>GitHub</span>
        </div>
        <span>↗</span>
      </a>

      <a class="link" href="#" target="_blank">
        <div class="left">
          <div class="icon">🎮</div>
          <span>Discord</span>
        </div>
        <span>↗</span>
      </a>

      <a class="link" href="#" target="_blank">
        <div class="left">
          <div class="icon">▶️</div>
          <span>YouTube</span>
        </div>
        <span>↗</span>
      </a>

      <a class="link" href="#" target="_blank">
        <div class="left">
          <div class="icon">📸</div>
          <span>Instagram</span>
        </div>
        <span>↗</span>
      </a>
    </div>

    <div class="music">
      <div class="disc"></div>
      <div class="song">
        <b>Now Playing</b>
        <span>Dark Premium Vibes</span>
      </div>
    </div>

    <div class="footer">made by Gourav • hosted on AWS EC2</div>
  </div>
</body>
</html>
`;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
}).listen(3000, "0.0.0.0", () => {
  console.log("Gourav bio website running on port 3000");
});
