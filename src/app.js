import express from "express";

const app = express();
app.use(express.json()
)

const books = [
    {
        id:1,
        title: "D&D 5º Edição",
    },
    {
        id: 2,
        title: "Vampiro à Mascara"
    }
];

function getBook(id) {
    return books.findIndex(book => {
        return book.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Node Test.js")
});

app.get("/books", (req, res) => {
    res.status(200).json(books)
})

app.get("/books/:id", (req, res) => {
    res.status(200).json(books[getBook(req.params.id)]);
})

app.post("/books", (req, res) => {
    books.push(req.body)
    console.log(req.body);
    res.status(201).send("Book Successfully Registered")
})

app.put("/books/:id", (req, res) => {
    books[getBook(req.params.id)].title = req.body.title;
    res.status(200).json(books)
})

app.delete("/books/:id", (req, res) => {
    books.splice([getBook(req.params.id)],1);
    res.status(200).send("Book Successfully Deleted"




    ).json(books)
})


export default app;