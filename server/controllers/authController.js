const User = require('../models/User')
const Role = require('../models/Role')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {secret} = require('../config')


const generateAccessToken = (id, roles) => {
    const  payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

class authController{
    async registration(req, res){
        try {
            const {name, surname, country, phone, email, nickname, password,themes} = req.body
            const data = {name, email,nickname,password,themes}
            const candidate = await User.findOne({email})
            if (candidate) {
                return res.status(400).json({message: 'Пользователь с таким E-mail уже сущесвует'})
            }
            const hashPassword = bcrypt.hashSync(password,7)
            const userRole = await Role.findOne({value: "USER"})
            const user = await User.create({...data,password: hashPassword, roles: [userRole.value]})
            return res.json({message: "Пользователь был успешно зарегестрирован"})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Ошибка регистрации'})
        }
    }

    async login(req, res){
        try {
            console.log(req.body)
            const {email, password} = req.body
            console.log(email, typeof email)
            console.log(password, typeof password)
            const user = await User.findOne({email})
            if (!user) {
                return res.status(400).json({message: 'Пользователь с таким E-mail не найден'})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: 'Введен неверный пароль'})
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Ошибка при логине', e})
        }
    }

    async getUsers(req, res){
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }
    
        async getUserOne(req, res) {
        try {
            const {id} = req.user
            const post = await User.findById(id)
            console.log(post)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res){
        try {
            const user = req.user
            const {name, surname, country, phone, nickname} = req.body
            const data = {name, surname, country, phone, nickname}
            const updatedUser = await User.findByIdAndUpdate(user.id, data, {new:true})
            return res.json(updatedUser)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res){
        try {
            const {id} = req.user
            const user = await User.findByIdAndDelete(id)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }


}

module.exports = new authController()
