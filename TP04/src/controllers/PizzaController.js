import { Router } from "express";
import express from "express";
import PizzaService from "../services/pizza-service.js";
import logger from "../utils/logger.js";

const app = express();
const port = 3000;
const router = Router();

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

router.get('/:id', async (req, res) =>{
    try {
        const pizza = await PizzaService.getById(req.params.id);
        /*logger.log({
            level: 'info',
            message: pizza.recordset,
        });*/
        // console.log('en la funcion' + req.usuario);
        // console.log('Estoy en GET' + new Date().toISOString());
        res.locals.respuesta = pizza.recordset[0];
        res.send(pizza.recordset[0]);
    }
    catch (error){
        /*logger.log({
            level: 'error',
            message: error.toString()
        })*/
        res.status(400).send(error.toString());
    }
});

router.post('/', async (req, res) =>{
    try {
        const pizza = req.body;
        const result = await PizzaService.insert(pizza)
        console.log(result.recordset)
        logger.log({
            level: 'info',
            message: pizza.recordset,
        });
        res.json(`El ID de la pizza nueva es: ${result.recordset[0]}`); // no va lindo
    } catch (error) {
        logger.log({
            level: 'error',
            message: error.toString()
        })
        res.status(400).send(error.toString());
    }
});

router.put('/:id', async (req, res) =>{
    try {
        const pizza = req.body;
        const id = req.params.id;
        const result = await PizzaService.update(pizza, id);
        logger.log({
            level: 'info',
            message: result.recordset,
        });
        res.json(result)
    } catch (error) {
        logger.log({
            level: 'error',
            message: error.toString()
        })
        res.status(400).send(error.toString());
    }
});

router.delete('/:id', async(req,res) =>{
    try {
        const result = await PizzaService.deleteById(req.params.id);
        logger.log({
            level: 'info',
            message: result
        });
        res.send(result)
    } catch (error) {
        logger.log({
            level: 'error',
            message: error.toString()
        })
        res.status(400).send(error.toString());
    }
})



export default router;
