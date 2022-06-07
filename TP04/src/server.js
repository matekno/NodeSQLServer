import express from "express";
import logger from './utils/logger.js';
import PizzaService from './services/pizza-service.js';
import PizzaRouter from './controllers/PizzaController.js';
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors());
app.use("/api/pizzas", PizzaRouter);

app.listen(port, () =>{
    logger.log({
        level: 'info',
        message: `Started in port ${port}`
    })
})