import express from "express"
import db from "../db/conn.js"
import { ObjectId } from 'mongodb';


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
router.delete("/:id", async (req, res) => {
    
    // Specify/Choose Collection
    const ShowCollection = db.collection("shows");

    // Perform Action 
    let delshow = await ShowCollection.deleteOne(
        { "_id": new ObjectId(req.params.id)} 
    )
    // Return results
    res.json(delshow);

})

export default router;