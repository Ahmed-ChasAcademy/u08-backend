import express from "express";
import { PrismaClient } from "@prisma/client";
import { hashedPassword } from "../utils/helpers.mjs";
import { generateToken } from '../utils/auth.mjs';  

const app = express();
const prisma = new PrismaClient();

app.use(express.json());


import bcrypt from 'bcrypt';


// Add login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const person = await prisma.person.findUnique({
      where: { email },
    });

    if (!person) {
      return res.status(404).json({ error: 'User not found' });
    }

    
    const isPasswordValid = await bcrypt.compare(password, person.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    
    const token = generateToken(person);

    
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
});



app.post("/person", async (req, res) => {
  const { name, email, password } = req.body; 

  try {
    // Hash the password before saving
    const hashedPwd = await hashedPassword(password);

    
    const person = await prisma.person.create({
      data: {
        name,
        email,
        password: hashedPwd, 
      },
    });

    
    res.json(person);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating person" });
  }
});


app.get("/people", async (req, res) => {
  try {
    const people = await prisma.person.findMany();
    res.json(people);
  } catch (error) {
    res.status(500).json({ error: "Error fetching people" });
  }
});


app.post("/pet", async (req, res) => {
  const { name, type, ownerId } = req.body;

  try {
    const pet = await prisma.pet.create({
      data: {
        name,
        type,
        ownerId,
      },
    });
    res.json(pet);
  } catch (error) {
    res.status(500).json({ error: "Error creating pet" });
  }
});


app.get("/pets/:ownerId", async (req, res) => {
  const ownerId = parseInt(req.params.ownerId);

  try {
    const pets = await prisma.pet.findMany({
      where: {
        ownerId,
      },
    });
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: "Error fetching pets" });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});