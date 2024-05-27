import mongoose from 'mongoose';

export async function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.once('connected', ()=> {
        console.log('Connected to MongoDB');
    })

    connection.on('error', (err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit();
    });

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}