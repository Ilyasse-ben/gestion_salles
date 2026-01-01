const express = require("express");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layout"); // 👉 correspond à layout.ejs

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "secretKey",
  resave: false,
  saveUninitialized: false
}));

app.use("/", require("./routes/authRoutes"));
app.use("/", require("./routes/adminRoutes"));
app.use("/", require("./routes/enseignantRoutes"));
app.use("/", require("./routes/salleRoutes"));
app.use("/", require("./routes/enseignantEspaceRoutes"));


app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});

