import PizzaService from "./services/pizza-service.js";
import logger from "./utils/logger.js";

const main = async () => {
    let pizzas = await PizzaService.getAll();
    logger.info(pizzas);
    console.log(pizzas);
}

main();

