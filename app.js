const express = require("express");
// importar express
const port = 3000;
// const para a porta que será usada para acessar o servidor
const app = express();
//aplicação express criada para podermos utilizar os comandos :)

app.get("/", (req, res, next) => {
  res.send({
    title: "Meu primeiro servidor Express",
    version: "0.0.0",
  });
});
// criamos a rota de acesso, assim mostrando o title e a version

app.listen(port, (err) => {
  console.log(`Server is listening on ${port}`);
});
//servidor irá escutar a porta 3000 e damos um console para confirmar
