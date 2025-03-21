import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.status(200).send({ message: "hello" });
});

app.get('/api/users', (req, res) => {
    res.send([
        {
            id: 1,
            name: "Ahmed",
            email: "Ahmed@gmai.commmm"
        }
    ]);
});

app.get('/pets/:id', (req, res) => {
    console.log(req.params);
    const parsedId = parseInt(req.params.id);
    if (isNaN(parsedId)) return res.status(400).send({ msg: "bad request" });

    res.send({ id: parsedId, msg: "Pet found" });
});
