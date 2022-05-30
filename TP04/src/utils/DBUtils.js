import config from "../dbconfig";
import sql from "mssql";

class DBUtils{

    select = async (table) => {
        let query = "SELECT * FROM " + table;
        let pool = sql.connect(config);
        let result = pool.request().query(query);
        return result;
    };

    insert = async (table, cols, valuesString) => {
        let query = `INSERT INTO ${table} (${cols}) VALUES (${valuesString}) SELECT CAST( SCOPE_IDENTITY () AS INT)`;
        let pool = sql.connect(config);
        let result = pool.request().query(query);
        return result;
    }

    delete = async (table, whereCondition) =>{
        let query = `DELETE FROM ${table} WHERE ${whereCondition.key} = ${whereCondition.value}`;
        let pool = sql.connect(config);
        let result = pool.request().query(query);
        return result;
    }

    update = async (table, valuesString, whereCondition) => {
        let query = `UPDATE ${table} SET ${valuesString} WHERE ${whereCondition.key} = ${whereCondition.value}}`;
        let pool = sql.connect(config);
        let result = pool.request().query(query);
        return result;
    }

    where = async (table, valuesString) => {
        let query = `SELECT * FROM ${table} WHERE ${valuesString};`;
        let pool = sql.connect(config);
        let result = pool.request().query(query);
        return result;
    }
}

export default DBUtils;