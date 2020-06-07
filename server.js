"use strict";

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const express = require("express");
const app = express();

const ROOT = path.resolve(__dirname, "public");
const CERTIFICATE_DIR = path.resolve(__dirname, ".certificate");

const sslOptions = {
  key: fs.readFileSync(`${CERTIFICATE_DIR}/localhost+1-key.pem`),
  cert: fs.readFileSync(`${CERTIFICATE_DIR}/localhost+1.pem`),
};

app.get("/", (_req, res, _next) => res.sendFile(`${ROOT}/index.html`));

app.get("/css/app.css", (_req, res, _next) =>
  res.sendFile(`${ROOT}/css/app.css`)
);

app.get("/css/lazy-load.css", (_req, res, _next) => {
  setTimeout(() => {
    return res.sendFile(`${ROOT}/css/lazy-load.css`);
  }, 5000);
});

http.createServer(app).listen(80);
https.createServer(sslOptions, app).listen(443);

console.log("🌍 https://localhost/");
