const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const product = require("./routes/product");
const user = require("./routes/user");
const order = require("./routes/order");
const payment = require("./routes/payment");
const errorMiddleware = require("./middleware/error");

dotenv.config({ path: "server/.env" });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(errorMiddleware);

module.exports = app;
