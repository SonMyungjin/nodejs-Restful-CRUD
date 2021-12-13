const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
  };

app.set("port", process.env.PORT || 8080);
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "환영합니다." });
  });

require("./app/routes/test.routes")(app);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
