module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.INTEGER
        },
        quantity: {
            type: dataTypes.INTEGER
        },
        descuento: {
            type: dataTypes.INTEGER
        },
        image: {
            type: dataTypes.STRING
        },
        size: {
            type: dataTypes.STRING
        },
        color: {
            type: dataTypes.STRING
        },
        idcategory: {
            type: dataTypes.INTEGER
        }
       
    };

    let config = {
        tableName: "Products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    return Product;

}