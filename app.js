const express = require("express");
const session = require("express-session");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "secretKey",
  resave: false,
  saveUninitialized: false
}));

app.use("/", require("./routes/authRoutes"));

app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
