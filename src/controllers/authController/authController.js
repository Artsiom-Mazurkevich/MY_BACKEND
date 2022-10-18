const User = require('../../models/user');
const Role = require('../../models/role');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')


class AuthController {
    async registration (req,res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({message: 'Registration error', errors});

            const {username, password} = req.body;
            const candidate = await User.findOne({username});
            if (candidate) return res.status(400).json({message: 'Пользователь с таким именем уже существует'});
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: 'USER'});
            const user = new User({username, password: hashPassword, roles: [userRole.value]});
            await user.save();

            return res.json({message: 'User created successful'})
        } catch (e) {
            console.log(e)
            res.status(400).json({message:'Registration error'})
        }
    }

    async login (req,res) {
        try {

        } catch (e) {
            console.log(e)
            res.statusCode(400).json('Login error')
        }
    }

    async getUsers (req,res) {
        try {
            res.json('server work')
        } catch (e) {

        }
    }
}

module.exports = new AuthController()