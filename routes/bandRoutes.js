import express from "express"
import db from "../db/conn.js"

const router = express.Router();

// Get all Bands
router.get("/",async (req,res) =>  {

    // Specify/Choose Collection
    const collection = db.collection("bands");

    // Perform Action 
    let getall = await collection.find({}).sort("name", 1).toArray();

    // Return results
    res.json(getall)

})

// POST for a Band

router.post("/", async (req, res) => {

    const input = req.body;
    
    // Validation
    if(!input || typeof input.name != 'string' || typeof input.description != 'string' || typeof input.formed != 'number' || typeof input.genre != 'string') {
       res.json("There is a data type issue with the data you are inserting"); 
       return;
    }
    
    // Specify/Choose Collection
    const BandCollection = db.collection("bands");

    // Perform Action 
    let newband  = await BandCollection.insertOne(req.body);

    // Return results
    res.json(newband);

})

export default router;