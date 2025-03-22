import Pet from '../models/pet.js';

export const getPets = async (req, res) => {
const { count } = req.query;
const numPets = parseInt(count, 10) || 50; 
try {
    const pets = await Pet.find().limit(numPets);
    res.json(pets);
} catch (error) {
    res.status(500).json({ error: error.message });
}
};