import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

var app = express();
var port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello from Express'));

app.listen(port, () => console.log(`Server is listening on port: http://localhost:${port}`));
