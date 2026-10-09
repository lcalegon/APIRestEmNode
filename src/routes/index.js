import express from "express";
import books from "./bookRoutes.js"
import publisher from "./publisherRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("NODE REST API")) 
    app.use(express.json(), books, publisher);
};

export default routes;