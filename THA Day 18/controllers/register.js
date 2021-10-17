const User = require('../models/user');
const bcrypt = require('bcrypt');


const saltRounds = 10;
const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        const alreadyExists = await User.findOne({ where: { email }});
        if(alreadyExists) {
            res.status(401).send("Email already exists");
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        req.session.user = savedUser;
        res.status(201).send(savedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something went wrong");
    }
}

module.exports = register;