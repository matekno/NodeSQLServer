import config from './dbconfig.js';
import sql from 'mssql';
import logger from './utils/logger.js';

// Select
    let query = "SELECT * FROM Pizzas;";
    let pool = await sql.connect(config);
    let result = await pool.request().query(query);

    // console.log(result.output); 
    // console.log(result.recordsets); // devuelve todo el resultado de la query
    // console.log(result.recordset); // devuelve el primer resultado de la query
    // console.log(result.rowsAffected); // devuelve el numero de filas afectadas por la query
    // console.log(result.returnValue); // devuelve el valor producido por un stored procedure
    // console.log(result.recordsets[0].length) // devuelve la cant de rows en el primer recordet. 
    // console.log(result.recordsets[3]); // devuelve el recordset 4

    // // Si queremos hacer un select con parametros:
    // let query2 = "SELECT * FROM Pizzas WHERE Id = @pId;";
    // let id = 1;
    // let pool2 = await sql.connect(config);
    // let result2 = await pool2.request()
    //                         .input('pId', sql.Int, id)
    //                         .query(query2);
    // console.log(result2.recordsets);

    logger.info('What rolls down stairs');
logger.info('alone or in pairs,');
logger.info('and over your neighbors dog?');
logger.warn('Whats great for a snack,');
logger.info('And fits on your back?');
logger.error('Its log, log, log');

