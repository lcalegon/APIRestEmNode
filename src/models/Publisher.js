import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    nationality: { type: String }
}, { versionKey: false });

const publisher = mongoose.model("Publishers", publisherSchema)

export { publisher, publisherSchema }

