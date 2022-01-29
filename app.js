const express = require("express");
const path = require("path");
const port = 3000;
const app = express();
//aplicação express criada para podermos utilizar os comandos :)

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// setup view engine

app.get("/curriculo", (req, res, next) => {
  res.render("curriculo", {
    title: "Meu currículo",
    name: "Raphael Almeida",
    profession: "Software Engineer",
    description: "Estudante de desenvolvimento web.",
    experience: [
      {
        company: "Princess Cruises",
        office: "Bar Staff",
        description:
          "Trabalho embarcado em diferentes países em navios de cruzeiros, atendendo pessoas de várias culturas e costumes diferentes, muito trabalho em equipe de vários lugares do mundo, sempre oferecendo o melhor serviço para o cliente.",
      },
      {
        company: "Shopee",
        office: "Suporte ao cliente",
        description:
          "Trabalho remoto, suporte ao cliente no setor de reembolso/devolução de produtos. Resolver problemas relacionado ao meu setor, tanto no back-end aprovando reembolsos e organizando devoluções para compradores e vendedores do website, contato com o cliente através de e-mail com solução do problema.",
      },
    ],
    education: [
      {
        institution: "Universidade Estacio de Sá",
        description: "Comércio Exterior",
      },
    ],
    skills: ["backend", "frontend"],
  });
});

app.get("/curriculo", (req, res, next) => {
  res.render("curriculo");
});
app.get("/", function (req, res, next) {
  res.render("index", {
    title: "Meu primeiro servidor Express =)",
    version: "0.0.0",
  });
});
// criamos a rota de acesso, assim mostrando o title e a version

app.listen(port, (err) => {
  console.log(`Server is listening on ${port}`);
});
//servidor irá escutar a porta 3000 e damos um console para confirmar
