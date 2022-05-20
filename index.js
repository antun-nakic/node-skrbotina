import express from "express";
import { fetchMovies, auth } from "./middleware/fetchData.js";
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/react", express.static("./frontend/build"));
const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger);

app.get("/", (req, res) => {
  res.render("pocetna", {
    imeStranice: "Node js vježba",
    autori: "Trokut polaznici",
  });
});
app.get("/onama", (req, res) => {
  res.send("O nama!");
});
app.post("/onama", (req, res) => {
  res.send("Došao si sa posticom na o nama!");
});

app.get(
  "/example/b",
  (req, res, next) => {
    res.write("dobar dan");
    console.log("the response will be sent by the next function ...");
    next();
  },
  (req, res) => {
    res.end("Hello from B!");
  }
);

app.get("/osoba/:ime", (req, res) => {
  res.end(`Dobrodošao ${req.params.ime}`);
});

app.get("/filmovi/:upit", [fetchMovies, auth], (req, res) => {
  res.send(res.data);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
