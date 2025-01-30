import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'


import connectDB from './config/db.js';

//car routes import
import engineCarRoutes from './routes/engineCarRoutes.js';
import electricCarRoutes from './routes/electricCarRoutes.js';
import hybridCarRoutes from './routes/hybridCarRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors())

// Connect to DB
connectDB();

// Routes
app.use('/api/engine-cars', engineCarRoutes);
app.use('/api/electric-cars', electricCarRoutes);
app.use('/api/hybrid-cars', hybridCarRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
