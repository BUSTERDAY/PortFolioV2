const http = require("http");

const host = 'localhost';
const port = 8080;

const stage = JSON.stringify([
    { entreprise: "", description:"cuisine de restaurant, plonge", mois : "", annee: 0 },
    { entreprise: "Marine Nationale", description:"découverte du PEM à la Seyne sur Mer", mois : "", annee: 0 }
]);

const emploi = JSON.stringify([
    { entreprise: "Panier Provencal", description:"emploi de saisonnier, trie de tomate", mois : "juillet-août", annee: 2021 },
    { entreprise: "", description:"", mois : "", annee: 0 }
]);

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/stage":
            res.writeHead(200);
            res.end(stage);
            break
        case "/emploi":
            res.writeHead(200);
            res.end(emploi);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

