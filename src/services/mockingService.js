import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';

export const generateUsers = async (numUsers) => {
const users = [];
for (let i = 0; i < numUsers; i++) {
    const email = faker.internet.email();
    const password = await bcrypt.hash('coder123', 10);
    const role = faker.helpers.arrayElement(['user', 'admin']);
    users.push({ email, password, role });
}
return users;
};

export const generatePets = (numPets) => {
const pets = [];
for (let i = 0; i < numPets; i++) {
    const name = faker.person.firstName();
    const type = faker.helpers.arrayElement(['dog', 'cat', 'bird', 'fish']);
    const age = faker.number.int({ min: 1, max: 15 });
    pets.push({ name, type, age });
}
return pets;
};