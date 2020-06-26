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
            console.log(imagem)
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
            const {id_produto} = req.params;
            
            
            if(req.file){
                const imagem = req.file.filename;
                await connection('produtos').where('id_produto', id_produto)
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
            }else{
                await connection('produtos').where('id_produto', id_produto)
                .update(
                    {'categoria': categoria,
                    'modelo': modelo,
                    'fabricante': fabricante,
                    'caracteristica': caracteristica,
                    'catalogo':catalogo,
                    'isEOL': isEOL}
                    );
                    return res.send();
            }
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            const {id_produto} = req.params;
            console.log(id_produto)
            const imageName = await connection('produtos').select('imagem').where('id_produto', id_produto).first();
            const img = imageName.imagem
            
            const pathDeleteImage = path+img
            await connection('produtos').where('id_produto', id_produto).delete();
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