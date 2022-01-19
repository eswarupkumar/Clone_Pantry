var express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

const port = 5000;
const routes = require("./routes");

app.use(express.json());

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@table.wua4x.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Database connected !");
});

app.use("/", routes);
app.listen(port, () => console.log(`Listening to port ${port} !!`));
