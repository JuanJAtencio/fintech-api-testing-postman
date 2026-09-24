const http = require("http");
const newman = require("newman");
const collection = require("../collections/fintech-api.postman_collection.json");
const environment = require("../environments/fintech-api.postman_environment.json");

const user = {
  address: { city: "Buenos Aires", street: "QA Street", number: 1, zipcode: "1000", geolocation: { lat: "0", long: "0" } },
  id: 1,
  email: "qa.user@example.com",
  username: "mor_2314",
  password: "83r5^_",
  name: { firstname: "Test", lastname: "User" },
  phone: "+54 11 5555-0101",
  __v: 0
};

function send(response, status, body, contentType = "application/json") {
  response.writeHead(status, { "Content-Type": contentType });
  response.end(contentType === "application/json" ? JSON.stringify(body) : body);
}

const server = http.createServer((request, response) => {
  let body = "";

  request.on("data", chunk => {
    body += chunk;
  });

  request.on("end", () => {
    if (request.method === "POST" && request.url === "/auth/login") {
      const credentials = JSON.parse(body || "{}");

      if (!credentials.username || !credentials.password) {
        return send(response, 400, "username and password are not provided in JSON format", "text/plain");
      }

      if (credentials.username !== user.username || credentials.password !== user.password) {
        return send(response, 401, "username or password is incorrect", "text/plain");
      }

      return send(response, 201, { token: "portfolio-demo-token" });
    }

    if (request.method === "GET" && request.url === "/users/1") {
      return send(response, 200, user);
    }

    if (request.method === "GET" && request.url === "/users/9999") {
      return send(response, 200, null);
    }

    if (request.method === "GET" && request.url === "/carts/user/1") {
      return send(response, 200, [
        { id: 1, userId: 1, date: "2026-09-24", products: [{ productId: 101, quantity: 1 }] },
        { id: 2, userId: 1, date: "2026-09-24", products: [{ productId: 205, quantity: 2 }] }
      ]);
    }

    return send(response, 404, { error: "Resource not found" });
  });
});

server.listen(3000, "127.0.0.1", () => {
  const withReport = process.argv.includes("--report");
  const reporters = withReport ? ["cli", "htmlextra"] : ["cli"];
  const reporter = withReport
    ? { htmlextra: { export: "reports/newman-report.html" } }
    : undefined;

  newman.run({ collection, environment, reporters, reporter }, error => {
    server.close();
    process.exitCode = error ? 1 : 0;
  });
});
