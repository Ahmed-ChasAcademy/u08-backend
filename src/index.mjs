import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

const pets = [
  { id: 1, pet_name: "Simone", pet_type: "Pie, indian tree" },
  { id: 2, pet_name: "Fernande", pet_type: "Arboral spiny rat" },
  { id: 3, pet_name: "Ikey", pet_type: "Savannah deer" },
  { id: 4, pet_name: "Bronnie", pet_type: "Bleeding heart monkey" },
  { id: 5, pet_name: "Dian", pet_type: "Macaque, bonnet" },
  { id: 6, pet_name: "Darren", pet_type: "Coatimundi, ring-tailed" },
  { id: 7, pet_name: "Gaston", pet_type: "Wallaby, agile" },
  { id: 8, pet_name: "Peyton", pet_type: "Tenrec, tailless" },
  { id: 9, pet_name: "Isador", pet_type: "Bear, grizzly" },
  { id: 10, pet_name: "Ellis", pet_type: "Eurasian hoopoe" },
];

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});



//routing to homepage/first page
app.get("/", (req, res) => {
  res.status(200).send({ message: "hello" });
});



//simple route to users
app.get("/pets", (req, res) => {
    res.send(pets)
})




// Find with Params
app.get("/pets/:id", (req, res) => {
    console.log(req.params);
    
    const parsedId = parseInt(req.params.id);
    if (isNaN(parsedId)) {
      return res.status(400).send({ msg: "bad request" });
    }
  
    const findPet = pets.find((pet) => pet.id === parsedId);
    if (!findPet) {
      return res.status(404).send({ msg: "Pet not found" });
    }
  
    return res.send(findPet);
  });


app.post('/pets', (req,res) => {
    console.log(req.body);
    return res.sendStatus(201);
})