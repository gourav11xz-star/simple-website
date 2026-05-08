const http = require("http");

const html = `
<!DOCTYPE html>
<html>
<head>
  <title>My Simple Website</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #111827, #2563eb);
      color: white;
      text-align: center;
    }
    .box {
      padding: 40px;
      border-radius: 20px;
      background: rgba(255,255,255,0.12);
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    h1 {
      font-size: 48px;
      margin-bottom: 10px;
    }
    p {
      font-size: 20px;
    }
  </style>
</head>
<body>
  <div class="box">
    <h1>My Website is Live 🚀</h1>
    <p>Running successfully on AWS EC2</p>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
