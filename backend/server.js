const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Route files
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "https://ashwanth07-portfolio.netlify.app"],
  })
);

// Mount routers
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio API is running...");
});

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
