import express from "express"
import data from "../data/movies.js"
import db from "../db/conn.js"

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

    // Specify/Choose Collection
    // Perform Action - insertOne
    // Return results

export default router;