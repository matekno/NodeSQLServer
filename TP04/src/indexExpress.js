import express from "express";
import logger from './utils/logger.js';
import PizzaService from './services/pizza-service.js';

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send("Hola Mundo!!");
})

app.get('/api/pizzas/getAll', async (req, res) =>{
    try {
        const pizzas = await PizzaService.getAll();
        logger.log({
            level: 'info',
            message: pizzas.recordset,
        });
        res.send(pizzas);
    }
    catch (error) {
        logger.log({
            level: 'error',
            message: error.toString()
        })
        res.status(400).send(error.toString());
    }
})

app.listen(port, () =>{
    logger.log({
        level: 'info',
        message: `Started in port ${port}`
    })
})