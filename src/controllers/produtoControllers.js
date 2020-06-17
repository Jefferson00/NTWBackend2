const connection = require('../database/index')
const fs = require('fs')

const path = "C:/Users/sdiaj/Documents/www/BackendNTW/tmp/uploads/"
module.exports = {
    
    async index(req, res){
        const produtos = await connection('produtos').select('*')

        return res.json(produtos)
    },

    async find(req, res, next){
        try {
            const {categoria} = req.params
            const produtos = await connection('produtos').select('*').where('categoria', categoria)

            return res.json(produtos)
        } catch (error) {
            next(error) 
        }
    },

    async create(req, res, next){
        try {
            const {categoria, modelo, fabricante, caracteristica, catalogo, isEOL} = req.body
            const imagem = req.file.filename;
            await connection('produtos').insert({
                categoria,
                modelo, 
                fabricante, 
                caracteristica,
                imagem, 
                catalogo,
                isEOL,
           })
   
           return res.json({modelo})
        } catch (error) {
            next(error) 
        }
    },

    async update(req, res, next){
        try {
            const {categoria, modelo, fabricante, caracteristica, catalogo, isEOL} = req.body
            const imagem = req.file.path+req.file.filename;
            const {id} = req.params;

            await connection('produtos').where('id', id)
            .update(
                {'categoria': categoria,
                'modelo': modelo,
                'fabricante': fabricante,
                'caracteristica': caracteristica,
                'imagem': imagem,
                'catalogo':catalogo,
                'isEOL': isEOL}
                );
                return res.send();
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            const {id} = req.params;
            const imageName = await connection('produtos').select('imagem').where('id', id).first();
            const img = imageName.imagem
            
            const pathDeleteImage = path+img
            await connection('produtos').where('id', id).delete();
            console.log(pathDeleteImage)
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