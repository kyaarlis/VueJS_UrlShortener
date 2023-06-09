import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

const app = express();

connectDB();

import indexRouter from './routes/index.js';
import urlsRouter from './routes/urls.js';

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api', urlsRouter);

// Server Setup
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
