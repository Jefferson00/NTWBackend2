const connection = require('../database/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

// função que verifica se o usuário logado é admin
async function verifyUserAdmin(req){
    try {
        const user = await connection('users').select('*').where('id', req.UserId).first()
        if (user.name == 'Admin' || user.access == 0){
            return user
        }else{
            return false
        }
    } catch (error) {
        return error
    }
}

module.exports = {
    //listar users ok
    //só lista se um usuario admin estiver logado
    async index (req, res, next){
        try {
            if(await verifyUserAdmin(req)){
                const users = await connection('users').select('*');
                //const authUser = await verifyUserAdmin(req);
                return res.json(users); 
            }else{
                return res.status(401).send({error: 'operação não permitida'});
            }
        } catch (error) {
            next(error)
        }
    },

    //create user ok
    //só cria se um usuario admin estiver logado
    async create(req, res, next){
        try {
            const user = await connection('users').select('*').where('id', req.UserId).first()
          
            if (!await verifyUserAdmin(req)){
                return res.status(401).send({error: 'operação não permitida'});
            }else{
                const {name, password, access} = req.body;
                const hash = await bcrypt.hash(password, 10)
           
                await connection('users').insert({
                    name,
                    password:hash,
                    access,
                });
                return res.status(201).send({name});
            }
        } catch (error) {
            next(error)
        }
    },
//update user ok
    async update(req, res, next){
    
        try{
            const {name, password} = req.body;
            const {id} = req.params;
            if(await verifyUserAdmin(req)){
                //se o nome não vier vazio atualiza o nome
                if(name != ""){
                    await connection('users').where('id', id).update('name', name);
                }
                //se a senha não vier vazio atualiza a senha
                if(password != ""){
                    const hash = await bcrypt.hash(password, 10)
                    await connection('users').where('id', id).update('password', hash);
                }
                return res.send();
            }else{
                return res.status(401).send({error: 'operação não permitida'});
            }
        }catch(error){
            next(error)
        }
    },
//delete user ok
    async delete(req, res, next){
        try{
            const {id} = req.params;
            if(await verifyUserAdmin(req)){
                const authUser = await verifyUserAdmin(req);
                    if(authUser.id != id){
                        await connection('users').where('id', id).delete();
                        return res.send();
                    }
                    return res.status(401).send({error: 'operação não permitida'});
            }else{
                return res.status(401).send({error: 'operação não permitida'});
            }
        }catch(error){
            next(error)
        }
    },
    
    async login (req, res, next){
        const {name, password} = req.body;

        const user = await connection('users').where('name',name).select('*').first();

        if(!user){
            return res.status(400).json({error :'Usuario não encontrado'})
        }else{
            if(!await bcrypt.compare(password, user.password)){
                return res.status(400).json({error :'Senha ou usuario incorreto'})
            }else{
                
                const token = jwt.sign({ id: user.id}, authConfig.secret, {
                    expiresIn: 8000,
                })
                return res.send({user, token})
            }
        }
    }
}