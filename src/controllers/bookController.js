import book from "../models/Book.js"

async function searchBook (id) {
    return await book.findById(id);
}

class BookController {
    static async getBooks (req, res) {
        try{
            const BookList = await book.find() 
            res.status(200).json(BookList)
        } catch (err) {
            res.status(500).json({ message: `Error Get Books: ${err.message}`});
        }
    }

    static async getBook (req, res) {
        try{
            const bookFinded = await searchBook(req.params.id);
            res.status(200).json(bookFinded);
        } catch(err) {
            res.status(500).json({ message: `Error Get Book ${err.message}`});
        }
    }   

    static async addBook (req, res) {
        try{
            const newBook = await book.create(req.body);
            res.status(201).json({ message: "Book Successfully Added", book: newBook });
        } catch (err) {
            res.status(500).json({ message: `Error Add Book: ${err.message}`});
        }
    }

    static async updateBook (req, res) {
        try{
            await book.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ message: "Book Successfully Updated" })
        } catch (err) {
            res.status(500).json({ message: `Error EditBook: ${err.message}`});
        }
    }

    static async deleteBook (req, res) {
        try{
            await book.findByIdAndDelete(req.params.id);
            res.status(200).json({ message:"Book Successfully Deleted" })
        } catch (err) {
            res.status(500).json({ message: `Error Delete Book: ${err.message}`});
        }
    }

};

export default BookController;