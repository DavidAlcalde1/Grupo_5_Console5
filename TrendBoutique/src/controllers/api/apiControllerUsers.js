const db = require("../../../database/models");
module.exports = {
    allUsers: (req, res) => {
        db.Users.findAll()
            .then(users => {
                res
                    .json({
                        meta: {
                            count: users.length
                        },
                        data: users
                    })
            })
    }
}
