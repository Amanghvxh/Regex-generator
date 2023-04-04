const express = require("express");
const app = express();
const regexRouter = require("./routes/regex");
const cors = require("cors");
const xss = require("xss-clean");
const helmet = require("helmet");
const rateLimiter = require("express-rate-limit");
const CheckPrevMatch = require("./middlewares/checkPrev");
const notFound = require("./middlewares/not-found");

app.use(xss());
app.use(helmet());
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 15,
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: "*",
  })
);
app.use(express.json());
app.use(CheckPrevMatch);
app.get("/", (req, res) => {
  res.status(200).json({ success: true, data: "This is root of the server" });
});
app.use("/api/v1/build", regexRouter);
app.use(notFound);

app.listen(500, console.log("server is running...."));
