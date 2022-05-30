import DBUtils from "../utils/DBUtils.js";

class PizzaService{
    getAll = async () => {
        await DBUtils.select("Pizzas");
        return result.recordsets;
    };
    getById = async (id) => {
        await DBUtils.where("Pizzas", `Id = ${id}`);
        return result.recordsets;
    };
    insert = async (pizza) => {
        await DBUtils.insert("Pizzas", "[Nombre], [LibreGluten], [Importe], [Descripcion]", `'${pizza.nombre}', '${pizza.libreGluten}' ,${pizza.importe}, '${pizza.descripcion}'`);
        return result.recordsets;
    }
    update = async (pizza, id) => {
        await DBUtils.update("Pizzas", `Nombre = '${pizza.nombre}', LibreGluten = '${pizza.libreGluten}', Importe = ${pizza.importe}, Descripcion = '${pizza.descripcion}'`, {key: "Id", value: id});
        return result.recordsets;
    }
    deleteById = async (id) => {
        await DBUtils.delete("Pizzas", {key: "Id", value: id});
        return result.recordsets;
    }
}

export default PizzaService;