import DBUtils from "../utils/DBUtils.js";

class PizzaService{    
    static getAll = async () => {
        return (await DBUtils.select("Pizzas"));
    };

    static getById = async (id) => {
        return await DBUtils.where("Pizzas", `Id=${id}`);
    };

    static insert = async (pizza) => {
        return await DBUtils.insert("Pizzas", "[Nombre], [LibreGluten], [Importe], [Descripcion]", `'${pizza.nombre}', '${pizza.libreGluten}' ,${pizza.importe}, '${pizza.descripcion}'`);
    };

    static update = async (pizza, id) => {
        return await DBUtils.update("Pizzas", `Nombre = '${pizza.nombre}', LibreGluten = '${pizza.libreGluten}', Importe = ${pizza.importe}, Descripcion = '${pizza.descripcion}'`, {key: "Id", value: id});
    };

    static deleteById = async (id) => {
        try {
            return await DBUtils.delete("Pizzas", {key: "Id", value: id});
        } catch (error) {
            return error
        }
    };
};

export default PizzaService;