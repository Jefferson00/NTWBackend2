const connection = require('../database/index')
const nodemailer = require('nodemailer')
require('dotenv').config()

const userMail = "jefferson@northware.com.br"
const passMail = process.env.PASSWORD_MAIL

module.exports = {

    async sendMail(req, res, next) {
        try {
            const { nome, sobrenome, email, assunto, mensagem } = req.body

            const transporter = nodemailer.createTransport({
                host: "email-ssl.com.br",
                port: 465,
                auth: { user: userMail, pass: passMail }
            })
                transporter.sendMail({
                from: userMail,
                to: userMail,
                replyTo: email,
                subject: assunto,
                html: `${mensagem} 
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                 Atenciosamente
                <br></br>
                <br></br>
                ${nome} ${sobrenome}`
            }).then(info => {
                res.send(info)
            }).catch(err => {
                res.send(err)
            })

        } catch (error) {
            next(error)
        }
    }
}