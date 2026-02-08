import express from "express"
import db from "../db/conn.js"

const router = express.Router();

// Get all TV Shows
router.get("/",async (req,res) =>  {

    // Specify/Choose Collection
    const collection = db.collection("shows");

    // Perform Action 
    let getall = await collection.find({}).sort("name", 1).toArray();

    // Return results
    res.json(getall)

})

    // Delete for a show
    // Specify/Choose Collection
    // Perform Action - insertOne
    // Return results

export default router;