// Import libraries
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

// Setup/configure dotenv
dotenv.config();

// Get Connection string
const connectionString = process.env.MONGO_URI || "";

// Setup Mongo Client
const client = new MongoClient(connectionString);

let conn;

try {
  conn = await client.connect();
  console.log("MongoDB Connected..."); 
} catch (error) {
  console.error(error);
  process.exit(1); // if we can't connect to db, it will close the server.
  // 1 - means we closed with error
}

// choose our database
let db = conn.db("test_db");

export default db;