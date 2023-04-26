import mongoose from 'mongoose';

const connectDB = async () => {
  try {
  mongoose.connect("mongo", {
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
