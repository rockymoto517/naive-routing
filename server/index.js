const express = require("express");
const cors = require("cors");
const path = require("path");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 8791;

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

app.use(
  "/react",
  express.static(path.join(__dirname, "../client/react-frontend/dist"))
);
app.use(
  "/angular",
  express.static(
    path.join(__dirname, "../client/angular-frontend/dist/first-app/browser")
  )
);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
