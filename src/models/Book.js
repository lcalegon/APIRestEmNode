import mongoose from "mongoose";
import { publisherSchema } from "./Publisher.js"

const bookSchema = new mongoose.Schema({
    id: { type:mongoose.Schema.Types.ObjectId },
    title: { type:String, required:true},
    price: { type: Number },
    pages: { type: Number },
    publisher: publisherSchema
}, { versionKey: false });



const book = mongoose.model("books", bookSchema );

export default book;