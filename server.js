// Imports
import express from "express";
import { logReq, globalErr } from "./middleware/middleware.js";
import seedRoutes from "./routes/seedRoutes.js";
import dotenv from "dotenv";

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(logReq);

// Routes
app.use("/api/seed", seedRoutes);


// Global middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});