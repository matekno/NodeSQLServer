import PizzaService from "./services/pizza-service.js";
import logger from "./utils/logger.js";

const main = async () => {
    const ps = new PizzaService()
    let pizzas = await ps.getAll();
    logger.info(pizzas);
    console.log(pizzas);
}

main();

