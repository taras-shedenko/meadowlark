import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { routing } from "./routing";

dotenv.config();

const app = express();

app.use(morgan("dev"));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(cookieParser());

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "app session",
  })
);

app.use("/api", cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

routing(app);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) =>
  res.render("500", { message: err.message })
);

const port = process.env.port || 3005;

mongoose
  .connect(process.env.DB_CONN!)
  .then(() => {
    console.log("Connected to DB");
    app.listen(port, () =>
      console.log(`Meadowlark is up and running at port ${port}`)
    );
  })
  .catch((err) => {
    console.log("Error during connecting to DB", err);
    process.exit(1);
  });
