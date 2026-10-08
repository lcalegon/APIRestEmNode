import express from "express";

const app = express();

const livros = [
    {
        id:1,
        nome: "D&D 5º Edição",
    },
    {
        id: 2,
        nome: "Vampiro à Mascara"
    }
];

app.get("/", (req, res) => {
    res.status(200).send("Teste em Node.js")
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
})
app.post("/livros", (req, res) => {
    livros.push(req.body)
})


export default app;