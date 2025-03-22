import express from "express";
import { generateUsers, generatePets } from "../services/mockingService.js";
import User from "../models/user.js";
import Pet from "../models/pet.js";

const router = express.Router();

router.get("/mockingusers", async (req, res) => {
const { count } = req.query;
const numUsers = parseInt(count, 10) || 50;
try {
    const users = await generateUsers(numUsers);
    res.json(users);
} catch (error) {
    res.status(500).json({ error: error.message });
}
});

router.get("/mockingpets", async (req, res) => {
const { count } = req.query;
const numPets = parseInt(count, 10) || 50;
try {
    const pets = generatePets(numPets);
    res.json(pets);
} catch (error) {
    res.status(500).json({ error: error.message });
}
});

router.post("/generateData", async (req, res) => {
const { users, pets } = req.body;
try {
    const generatedUsers = await generateUsers(users);
    await User.insertMany(generatedUsers);

    const generatedPets = generatePets(pets);
    await Pet.insertMany(generatedPets);

    res.status(201).json({
    message: "Data generated successfully",
    users: generatedUsers,
    pets: generatedPets,
    });
} catch (error) {
    res.status(500).json({ error: error.message });
}
});

export default router;
