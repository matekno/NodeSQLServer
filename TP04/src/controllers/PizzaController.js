import { Router } from "express";
import express from "express";
import PizzaService from "../services/pizza-service.js";
import logger from "../utils/logger.js";

const app = express();
const port = 3000;
const router = Router();

router.get('/GetAll', async (req, res) =>{
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



export default router;
