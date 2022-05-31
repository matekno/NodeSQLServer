import sql from "mssql";
import config from "./dbconfig.js";
import logger from './utils/logger.js';


const getAll = async () => {
    try {
        let query = "SELECT * FROM Pizzas";
        let pool = await sql.connect(config);
        let result = await pool.request().query(query);
        logger.info(result.recordsets[0]);
    } catch (error) {
        logger.error(error);
    }
};

console.log(getAll());

