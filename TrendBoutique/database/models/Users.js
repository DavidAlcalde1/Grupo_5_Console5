module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    
    let cols = {
        idusers: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING,
            primaryKey: true
        },
        gender: {
            type: dataTypes.STRING
        },
        telefono: {
            type: dataTypes.INTEGER
        },
        password: {
            type: dataTypes.STRING
        },
        role: {
            type: dataTypes.INTEGER
        },
        country:{
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        fechaNacimiento: {
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: "Users",
        timestamps: true
    }

    const User = sequelize.define(alias, cols, config);

    return User;
}