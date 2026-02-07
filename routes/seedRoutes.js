import express from "express"
import bandData from "../data/bands.js"
import movieData from "../data/movies.js"
import db from "../db/conn.js"

const router = express.Router();

const BandCollection = db.collection("bands")
const MovieCollection = db.collection("movies")
const ShowCollection = db.collection("shows")

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
    // ************* Bands *******************

    // ************* Movies ************************

    // Movies - delete any data already present
    await MovieCollection.deleteMany({});

    // Movies - populate the data
    await MovieCollection.insertMany(movieData);

    // Movies - create index's
    await MovieCollection.createIndex({ name : 1});
    await MovieCollection.createIndex({ released : 1});

    res.json({
        message: "The bands, movies, and shows were seeded",
        bandcount: "The band count was " + bandData.length,
        moviecount: "The movie count was " + movieData.length
    })

    } catch (error) {
        console.error(error.message);
        res.status(500).json;
    }

})

export default router;
