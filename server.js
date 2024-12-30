const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// setting Default route to serve the music player
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
