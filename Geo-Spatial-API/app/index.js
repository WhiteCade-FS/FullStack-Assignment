const express = require("express");
const app = express();
const morgan = require("morgan");
const routeHandler = require("./routes/geoDataRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running", success: true });
});

app.use("/api/geo-data", routeHandler);
app.use("/api/users", userRoutes);

module.exports = app;
