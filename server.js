// Imports
import express from "express";
import { logReq, globalErr } from "./middleware/middleware.js";
import seedRoutes from "./routes/seedRoutes.js";
import bandRoutes from "./routes/bandRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import showRoutes from "./routes/showRoutes.js";
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
app.use("/api/bands", bandRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/shows", showRoutes);


// Global middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`);
});