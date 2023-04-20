import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.example' });

const connectDB = async () => {
  try {
  mongoose.connect("mongodb+srv://kyaarlis:3eoo5vyJ4hQNtGQ4@securotrade.jtg5a0d.mongodb.net/test", {
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
