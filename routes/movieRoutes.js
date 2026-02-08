import express from "express"
import db from "../db/conn.js"
import { ObjectId } from 'mongodb';

const router = express.Router();

// Get all Movies
router.get("/",async (req,res) =>  {

    // Specify/Choose Collection
    const collection = db.collection("movies");

    // Perform Action 
    let getall = await collection.find({}).sort("name", 1).toArray();

    // Return results
    res.json(getall)

})

// Patch for a movie
router.patch("/:id", async (req, res) => {
    
    // Specify/Choose Collection
    const MovieCollection = db.collection("movies");

    // Perform Action 
    let updmovie = await MovieCollection.updateOne(
        { "_id": new ObjectId(req.params.id)}, 
        { $set: {  "name": req.body.name,
          "description": req.body.description,
          "released": req.body.released,
          "genre": req.body.genre
        }}
    )
    // Return results
    res.json(updmovie);

})

export default router;