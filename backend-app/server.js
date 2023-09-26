import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import http from "http";

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
const quotes = [
  { id: 1, title: "Quote 1", content: "Quote 1 content" },
  { id: 2, title: "Quote 2", content: "Quote 2 content" },
];

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/api/v1/quotes", (req, res) => {
  res.status(200).json({
    message: "success",
    data: quotes,
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
