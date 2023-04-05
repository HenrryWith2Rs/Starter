// external imports
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

// internal imports
import connectDB from './mongodb/connect.js';

dotenv.config();

// middleware
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// confirm app is running
app.get('/', async (req, res) => {
  res.send('Hello from Ramos');
});

const port = 7777;
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () => console.log('Server has started on port ' + port));
  } catch (error) {}
};
