import express from "express"
import data from "../data/bands.js"
import db from "../db/conn.js"

const router = express.Router();

// Get all
router.get("/",async (req,res) =>  {

    // Specify/Choose Collection
    const collection = db.collection("bands");

    // Perform Action 
    let getall = await collection.find({}).sort("name", 1).toArray();

    // Return results
    res.json(getall)

})

export default router;