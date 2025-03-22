import express from 'express';
import { connectDB } from './config/database.js';
import mocksRouter from './routes/mocks.router.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/mocks', mocksRouter);

connectDB().then(() => {
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
});