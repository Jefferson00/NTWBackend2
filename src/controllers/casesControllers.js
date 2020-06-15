const connection = require('../database/index')
const fs = require('fs')

module.exports = {
    async index (req, res){
        const cases = await connection('cases').select('*')

        return res.json(cases)
    },

    async create (req, res, next){
        try {
            const {orgao, descricao, categoria} = req.body
            const imagem = req.file.filename;
            await connection('cases').insert({
                imagem,
                orgao, 
                descricao, 
                categoria
           })
   
           return res.json({descricao})
        } catch (error) {
            next(error) 
        }
    },

    async update(req, res, next){
        try {
            const {orgao, descricao, categoria} = req.body
            const imagem = req.file.filename;
            const {id} = req.params;

            await connection('cases').where('id', id)
            .update(
                {
                'imagem': imagem,
                'orgao': orgao,
                'descricao': descricao,
                'categoria': categoria
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
            const imageName = await connection('cases').select('imagem').where('id', id).first();
            const img = imageName.imagem
            const path = "C:/Users/sdiaj/Documents/www/BackendNTW/tmp/uploads/"
            const pathDeleteImage = path+img
            await connection('cases').where('id', id).delete();
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