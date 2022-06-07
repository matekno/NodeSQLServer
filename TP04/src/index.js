import config from "./config/dbconfig.js";
import PizzaService from "./services/pizza-service.js";
import logger from "./utils/logger.js";


const getAll = async () => {
    try {
        const pizzas = await PizzaService.getAll();
        logger.log({
            level: 'info',
            message: pizzas.recordset,
        });
    }
    catch (error) {
        logger.log({
            level: 'error',
            message: error.toString()
        })
    }
}

const getById = async () => {
    try {
        const pizza = await PizzaService.getById(1);
        logger.log({
            level: 'info',
            message: pizzas.recordset[0],
        })
    }
    catch (error) {
        logger.log({
            level: 'error',
            message: error.toString()
        })
    }
}

const create = async (p) => {
    try {
        const result = await PizzaService.insert(p);
        logger.log({
            level: 'info',
            message: result.rowsAffected,
        })
    } catch (error) {
        logger.log({
            level: 'error',
            message: error.toString()
        })
    }
}

const update = async (p, id) => {
    try {
        const result = await PizzaService.update(p, id);
        logger.log({
            level: 'info',
            message: result.rowsAffected,
        })
    } catch (error) {
        logger.log({
            level: 'error',
            message: error.toString()
        })
    }

}

const deleteById = async (id) => {
    try {
        const result = await PizzaService.deleteById(id);
        logger.log({
            level: 'info',
            message: result.rowsAffected,
        })

    } catch (error) {
        logger.log({
            level: 'error',
            message: error.toString()
        })
    }
}


const p = { nombre: "Pizza de Jamon", libreGluten: true, importe: 10, descripcion: "Pizza de jamon con queso" };
getAll();
// getById();
// create(p);
// update(p, 1);
// deleteById(12);
