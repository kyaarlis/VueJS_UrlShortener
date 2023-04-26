import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.example' });

const connectDB = async () => {
  try {
  mongoose.connect("mongodb+srv://kyaarlis:gKkspjkHa5leh8Zb@securotrade.jtg5a0d.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

    console.log('Database Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
