import express from 'express';

const app = express();
const PORT = 9000;

app.use(express.json());

app.get("/",(req, res) => {
  res.status(200).send("Hello World");
});

app.use((req, res) => {
  res.status(404).send("You requested something I don't have :(");
});

app.listen(PORT, () => {
  console.log(`App is running and Listening on port ${PORT}`);
});