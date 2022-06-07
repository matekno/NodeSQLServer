import PizzaService from "./services/pizza-service.js";
import logger from "./utils/logger.js";


const getAll = async () => {
    let pizzas = await PizzaService.getAll();
    logger.info(pizzas.recordset);
    // pizzas.recordset.map(pizza => {console.log(pizza)}) // no anda con mi logger
}

const getById = async () => {
    let pizza = await PizzaService.getById(1);
    console.log(pizza.recordset[0]);
}

const create = async (p) => {
    let result = await PizzaService.insert(p);
    console.log(result.rowsAffected);
}

const update = async (p, id) => {
    let result = await PizzaService.update(p, id);
    console.log(result.rowsAffected);
}

const deleteById = async (id) => {
    let result = await PizzaService.deleteById(id);
    console.log(result.rowsAffected);
}


const p ={nombre: "Pizza de Jamon", libreGluten: true, importe: 10, descripcion: "Pizza de jamon con queso"};
getAll();   
// getById();
// create(p);
// update(p, 1);
// deleteById(12);
