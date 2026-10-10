// The "api" app: a small web server. Inferra sets PORT. When org.yaml gives
// this app a Postgres service, Inferra also sets its connection URL.
const http = require("http");
const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    if (req.url === "/healthz") {
      res.writeHead(200).end("ok\n");
      return;
    }
    const db = Object.keys(process.env).find((k) => k.endsWith("_DB_URL"));
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        app: "api",
        greeting: process.env.GREETING || "hello from Inferra, deployed with git push",
        database: db ? `connected via ${db}` : "none yet",
      }) + "\n",
    );
  })
  .listen(port, () => console.log(`api listening on ${port}`));
