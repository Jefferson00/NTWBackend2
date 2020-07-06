const connection = require('../database/index')

module.exports = {
    async index (req, res){
        const logs = await connection('logs')
        .join('users', 'logs.id_user', '=', 'users.id')
        .select(
                'logs.*',
                'users.id',
                'users.name'
                 )
        
        return res.json(logs)
    },

    async find(req, res,next){
        try {
            const {id_user} = req.params
            const logs = await connection('logs')
            .join('users', 'logs.id_user', '=', 'users.id')
            .select(
                    'logs.*',
                    'users.id',
                    'users.name'
                     ).where('id_user', id_user)
            
            return res.json(logs)
        } catch (error) {
            next(error)
        }
    },

    async create (req, res, next){
        try {
            const {id_user, acao, tabela, detalhe} = req.body

            await connection('logs').insert({
                id_user,
                acao, 
                tabela, 
                detalhe
           })
   
           return res.json({acao})
        } catch (error) {
            next(error) 
        }
    }

}