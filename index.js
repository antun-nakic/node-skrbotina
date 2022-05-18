import express from "express";
const app = express();
const port = 3000;

app.use("/react", express.static("./frontend/build"));

app.get("/", (req, res) => {
  res.send("Hello World!");
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

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
