import { Router } from "express";
import express from "express";
import PizzaService from "../services/pizza-service.js";
import logger from "../utils/logger.js";

const app = express();
const port = 3000;
const router = Router();

app.use(express.json());


router.get('/', async (req, res) =>{
    try {
        const pizzas = await PizzaService.getAll();
        logger.log({
            level: 'info',
            message: pizzas.recordset,
        });
        res.send(pizzas.recordsets[0]);
    }
    catch (error) {
        logger.log({
            level: 'error',
            message: error.toString()
        })
        res.status(400).send(error.toString());
    }
})

router.get('/getById', async (req, res) =>{
    try {
        const pizza = await PizzaService.getById(req.query.id);
        logger.log({
            level: 'info',
            message: pizza.recordset,
        });
        res.send(pizza.recordset[0]);
    }
    catch (error){
        logger.log({
            level: 'error',
            message: error.toString()
        })
        res.status(400).send(error.toString());
    }
});

router.post('/', async (req, res) =>{
    try {
        const pizza = req.body;
        const result = await PizzaService.insert(pizza)
        res.json(result);
    } catch (error) {
        logger.log({
            level: 'error',
            message: error.toString()
        })
        res.status(400).send(error.toString());
    }

});



export default router;
