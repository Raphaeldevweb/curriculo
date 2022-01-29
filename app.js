const express = require("express");
const path = require("path");
const port = 3000;
const app = express();
//aplicação express criada para podermos utilizar os comandos :)

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// setup view engine
app.get("/", function (req, res, next) {
  res.render("index", {
    title: "Meu primeiro servidor Express :)",
    version: "0.0.0",
  });
});
// criamos a rota de acesso, assim mostrando o title e a version

app.listen(port, (err) => {
  console.log(`Server is listening on ${port}`);
});
//servidor irá escutar a porta 3000 e damos um console para confirmar
