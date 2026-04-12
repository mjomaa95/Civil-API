const http = require("http");
const url = require("url");

const users = [
  { NationalNo: "99610687", FirstArabicName: "كريم" },
  { NationalNo: "12345678", FirstArabicName: "أحمد" }
];

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;

  if (req.url.startsWith("/civil")) {
    const nationalNo = queryObject.NationalNo;

    if (!nationalNo) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "NationalNo is required" }));
    }

    const user = users.find(u => u.NationalNo === nationalNo);

    if (!user) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "Not found" }));
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(user));
  }

  res.writeHead(404);
  res.end();
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});
