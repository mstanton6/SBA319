import express from "express"
import bandData from "../data/bands.js"
import db from "../db/conn.js"

const router = express.Router();

const BandCollection = db.collection("bands")

router.get("/", async (req, res) =>{

    // ************* Bands *******************
    try {
    // bands - delete any data already present
    await BandCollection.deleteMany({});

    // bands - populate the data
    await BandCollection.insertMany(bandData);

    // bands - create index's
    await BandCollection.createIndex({ name : 1});
    await BandCollection.createIndex({ formed : 1});

    res.json({
        message: "The bands were seeded",
        count: "The count was " + bandData.length
    })

    } catch (error) {
        console.error(error.message)
    }

})

export default router;
