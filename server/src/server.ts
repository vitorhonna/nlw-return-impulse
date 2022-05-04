import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors()); // Determina quem pode consumir a API (neste caso está aberto a todos)
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server running!')
});