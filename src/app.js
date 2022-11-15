const express = require("express");
const initModels = require("./models/initModels");
const db = require("./utils/database");
const userRoutes = require("./Routes/users.routes");
const morgan = require("morgan");
const handleError = require("./middlewares/error");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8000; 

db.authenticate()
  .then(() => console.log("SUCCESSFUL AUTHENTICATION"))
  .catch((error) => console.log(error));

db.sync({ force: false }) 
  .then(() => console.log("synchronized database"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res, next) => {
  res.status(200).json({ messge: "ok" });
  next();
});

app.use("/api/v1", userRoutes);

app.use(handleError);

app.listen(PORT, () => console.log("Server started in port" + PORT));