import express from "express";
import { Book } from "../models/bookModel.js";

const router=express.Router();

//create books
router.post("/",async (req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({
                message:'Send all required fields:title ,author ,publishYear'
            })
        }
        const newBook={
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        };
        const book=await Book.create(newBook);
        return res.send(book)
    }
    catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message})
    }
})

//get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});

    return res.send({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

//get one book
router.get("/:id", async (req, res) => {
  try {
    const bookOne = await Book.findById(req.params.id);
    if (!bookOne) {
      return res.status(404).send({ message: "Data not found" });
    }
    return res.json(bookOne);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

//update a book
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields:title ,author ,publishYear",
      });
    }
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedBook) {
      return res.send({ message: "Book not found" });
    }
    return res.send({ message: "Updated the book successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});
//delete a book
router.delete("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  await Book.deleteOne(book);
  return res.send({ message: "Deleted successfully" });
});

export default router;