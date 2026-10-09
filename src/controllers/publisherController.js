import {publisher} from "../models/Publisher.js"


class PublisherController {

    
    static async searchPublisher (id) {
        return await publisher.findById(id);
    }

    static async getPublishers (req, res) {
        try {
            const PublisherList = await publisher.find() 
            res.status(200).json(PublisherList)
        } catch (err) {
            res.status(500).json({ message: `Error Get Publishers: ${err.message}` });
        }
    }

        static async getPublisher (req, res) {
        try {
            res.status(200).json(await searchPublisher(req.params.id));
        } catch (err) {
            res.status(500).json({ message: `Error Get Publisher: ${err.message}` });
        }
    }

        static async addPublisher (req, res) {
        try {
            const newPublisher = await publisher.create(req.body);
            res.status(201).json({ message: "Publisher Successfully Added", book: newPublisher });
        } catch (err) {
            res.status(500).json({ message: `Error Add ublisher: ${err.message}` });
        }
    }

        static async updatePublisher (req, res) {
        try {
            await publisher.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ message: "Publisher Successfully Updated" });
        } catch (err) {
            res.status(500).json({ message: `Error Edit Publisher: ${err.message}` })
        }
    }


        static async deletePublisher (req, res) {
        try {
            await publisher.findByIdAndDelete(req.params.id);
            res.status(200).json({ message:"Publisher Successfully Deleted" })
        } catch (err) {
            res.status(500).json({ message: `Error Delete Publisher: ${err.message}` })
        }
    }
}

export default PublisherController