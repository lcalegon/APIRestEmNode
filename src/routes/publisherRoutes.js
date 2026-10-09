import express from "express";
import PublisherController from "../controllers/publisherController.js";

const routes = express.Router();

routes.get("/publishers", PublisherController.getPublishers);
routes.post("/publishers", PublisherController.addPublisher);
routes.get("/publishers/:id", PublisherController.getPublisher);
routes.put("/publishers/:id", PublisherController.updatePublisher);
routes.delete("/publishers/:id", PublisherController.deletePublisher);

export default routes;              