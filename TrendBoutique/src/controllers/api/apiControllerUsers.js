const db = require("../../../database/models");
module.exports = {
    allUsers: (req, res) => {
        const todosUsuarios =  db.Users.findAll() //Se actualizó
            .then(users => {
                res
                    .json({
                        meta: {
                            count: users.length
                        },
                        data: users
                    })
            })
            const totales = todosUsuarios.length
            return JSON.stringify(totales) // Se actualizó

    }
}
