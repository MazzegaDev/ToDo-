const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = 3000;

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//Aplicativo voce deve usar as seguintes raizes
app.use("/", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
