import User from '../models/user.js';

export const getUsers = async (req, res) => {
const { count } = req.query;
const numUsers = parseInt(count, 10) || 50; 
try {
    const users = await User.find().limit(numUsers);
    res.json(users);
} catch (error) {
    res.status(500).json({ error: error.message });
}
};