const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.PORT || 4173);

const types = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".svg", "image/svg+xml"],
  [".ico", "image/x-icon"],
]);

function send(res, status, body, headers = {}) {
  res.writeHead(status, {
    "Cache-Control": "no-store",
    ...headers,
  });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const requestPath = decodeURIComponent(new URL(req.url, `http://localhost:${port}`).pathname);
  const normalizedPath = requestPath === "/" ? "index.html" : path.normalize(requestPath).replace(/^(\.\.(\/|\\|$))+/, "");
  const candidate = path.join(root, normalizedPath);

  if (!candidate.startsWith(root)) {
    return send(res, 403, "Forbidden");
  }

  fs.stat(candidate, (err, stats) => {
    if (err || !stats.isFile()) {
      return send(res, 404, "Not Found");
    }

    fs.readFile(candidate, (readErr, content) => {
      if (readErr) {
        return send(res, 500, "Internal Server Error");
      }

      send(res, 200, content, {
        "Content-Type": types.get(path.extname(candidate).toLowerCase()) || "application/octet-stream",
      });
    });
  });
});

server.listen(port, "127.0.0.1", () => {
  process.stdout.write(`dev server listening on http://127.0.0.1:${port}\n`);
});
