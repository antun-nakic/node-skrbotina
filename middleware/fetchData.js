import fetch from "node-fetch";

export const fetchMovies = async function (req, res, next) {
  //const rezultat = await fetch(`https://api.tvmaze.com//search/shows?q=${req.params.upit}`);
  const response = await fetch(
    `https://api.tvmaze.com//search/shows?q=${req.params.upit}`
  );
  const data = await response.json();
  if (data.length < 5) {
    res.redirect("/");
  } else {
    res.data = data;
    next();
  }
  //res.json(data);
};

export const auth = async function (req, res, next) {
  let data = {};
  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "post",
      body: JSON.stringify({ tajniKljuc: "Antun" }),
      headers: { "Content-Type": "application/json" },
    });
    data = await response.json();
  } catch (error) {
    console.error(error);
  }

  if (data.token && data.token === "test123") {
    next();
  } else {
    res.send("Niste autorizirani");
  }
};

const cb2 = function (req, res) {
  res.send("Hello from C!");
};
