const user = require('../models/user/user.model')

exports.getUsers = async (req,res,next) => {
    try{
        const page = req.query.page;
        const amount = req.query.amount;
        let users = await user.getUsers(page,amount);
        res.send(users);
    } catch (err) {
        res.status(400).send(err);
    }
};

