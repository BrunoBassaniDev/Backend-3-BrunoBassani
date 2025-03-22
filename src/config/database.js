import mongoose from 'mongoose';

export const connectDB = async () => {
try {
    await mongoose.connect('mongodb+srv://bruno:1234@cluster0.dvwnb.mongodb.net/mydatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
} catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
}
};