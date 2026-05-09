const http = require("http");

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gourav | Bio Link</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    body {
      min-height: 100vh;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: #050505;
    }

    .bg {
      position: fixed;
      inset: 0;
      background:
        radial-gradient(circle at 20% 20%, rgba(0, 140, 255, 0.35), transparent 30%),
        radial-gradient(circle at 80% 80%, rgba(140, 0, 255, 0.30), transparent 35%),
        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.06), transparent 45%),
        #050505;
      filter: blur(0px);
      z-index: -2;
    }

    .grid {
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
      background-size: 45px 45px;
      mask-image: linear-gradient(to bottom, rgba(0,0,0,1), transparent);
      z-index: -1;
    }

    .card {
      width: 92%;
      max-width: 430px;
      padding: 35px;
      border-radius: 30px;
      background: rgba(15, 15, 20, 0.72);
      border: 1px solid rgba(255,255,255,0.14);
      backdrop-filter: blur(20px);
      box-shadow: 0 30px 100px rgba(0,0,0,0.75);
      text-align: center;
      animation: pop 0.8s ease;
    }

    .avatar {
      width: 125px;
      height: 125px;
      margin: auto;
      border-radius: 50%;
      background: linear-gradient(135deg, #38bdf8, #8b5cf6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 54px;
      border: 4px solid rgba(255,255,255,0.18);
      box-shadow: 0 0 45px rgba(56,189,248,0.35);
    }

    h1 {
      margin-top: 20px;
      font-size: 34px;
      letter-spacing: 1px;
    }

    .tag {
      margin-top: 8px;
      color: #a5b4fc;
      font-size: 15px;
    }

    .bio {
      margin-top: 18px;
      color: #cbd5e1;
      font-size: 15px;
      line-height: 1.7;
    }

    .stats {
      margin: 24px 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .stat {
      padding: 14px 8px;
      border-radius: 18px;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.10);
    }

    .stat b {
      display: block;
      font-size: 19px;
      color: #38bdf8;
    }

    .stat span {
      font-size: 12px;
      color: #94a3b8;
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .link {
      padding: 16px;
      border-radius: 18px;
      text-decoration: none;
      color: white;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.12);
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: 0.25s;
      font-weight: bold;
    }

    .link:hover {
      transform: translateY(-4px) scale(1.02);
      background: rgba(56,189,248,0.18);
      border-color: rgba(56,189,248,0.55);
      box-shadow: 0 15px 40px rgba(56,189,248,0.18);
    }

    .music {
      margin-top: 22px;
      padding: 15px;
      border-radius: 18px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.10);
      color: #cbd5e1;
      font-size: 14px;
    }

    .footer {
      margin-top: 20px;
      color: #64748b;
      font-size: 13px;
    }

    @keyframes pop {
      from {
        opacity: 0;
        transform: translateY(25px) scale(0.96);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @media (max-width: 480px) {
      .card {
        padding: 28px 20px;
      }

      h1 {
        font-size: 30px;
      }
    }
  </style>
</head>

<body>
  <div class="bg"></div>
  <div class="grid"></div>

  <main class="card">
    <div class="avatar">G</div>

    <h1>Gourav</h1>
    <div class="tag">@gourav11xz-star</div>

    <p class="bio">
      Developer • Creator • Gamer<br>
      Welcome to my premium bio page.
    </p>

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
        <span>GitHub</span>
        <span>↗</span>
      </a>

      <a class="link" href="#" target="_blank">
        <span>Discord</span>
        <span>↗</span>
      </a>

      <a class="link" href="#" target="_blank">
        <span>YouTube</span>
        <span>↗</span>
      </a>

      <a class="link" href="#" target="_blank">
        <span>Instagram</span>
        <span>↗</span>
      </a>
    </div>

    <div class="music">
      🎧 Now Playing: Premium Vibes
    </div>

    <div class="footer">
      made by Gourav • running on AWS
    </div>
  </main>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Bio link website running on port 3000");
});
