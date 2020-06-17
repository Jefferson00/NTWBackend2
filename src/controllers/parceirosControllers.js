const connection = require('../database/index')
const fs = require('fs')

module.exports = {
    async index (req, res){
        const parceiros = await connection('parceiros').select('*')

        return res.json(parceiros)
    },

    async find(req, res, next){
        try {
            const {nome} = req.params

            const parceiro = await connection('parceiros').select('*').where('nome', nome).first()

            return res.json(parceiro)
        } catch (error) {
            next(error) 
        }
    },

    async create (req, res, next){
        try {
            const {nome, site, isValid} = req.body
            const imagem = req.file.filename;
            await connection('parceiros').insert({
                imagem,
                nome, 
                site, 
                isValid
           })
   
           return res.json({nome})
        } catch (error) {
            next(error) 
        }
    },

    async update(req, res, next){
        try {
            const {nome, site, isValid} = req.body
            const imagem = req.file.filename;
            const {id} = req.params;

            await connection('parceiros').where('id', id)
            .update(
                {
                'imagem': imagem,
                'nome': nome,
                'site': site,
                'isValid': isValid
                }
                );
                return res.send();
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            const {id} = req.params;
            const imageName = await connection('parceiros').select('imagem').where('id', id).first();
            const img = imageName.imagem
            const path = "C:/Users/sdiaj/Documents/www/BackendNTW/tmp/uploads/"
            const pathDeleteImage = path+img
            await connection('parceiros').where('id', id).delete();
            try {
                fs.unlinkSync(pathDeleteImage);
            } catch (error) {
                console.log(error)
            }
            return res.send();
        } catch (error) {
            next(error)
        }
    }
}