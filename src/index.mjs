import express from 'express';


const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Running on http://localhost:${PORT}`)
});

app.get('/', (request, response) => {
    response.status(200).send({message: "hello"})
})

app.get('/api/users', (req,res) => {
    res.send([{
        id: 1,
        name: "Ahmed",
        email: "Ahmed@gmai.commmm"
    }])
})


app.get('/pets/:id', (req,res) =>{
    console.log(req.params)
})