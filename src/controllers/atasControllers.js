const connection = require('../database/index')
const nodemailer = require('nodemailer')
require('dotenv').config()

const userMail = "jefferson@northware.com.br"
const passMail = process.env.PASSWORD_MAIL

module.exports = {

    async index (req, res){
      
        const atas = await connection('atas')
        .join('produtos', 'atas.id_produtos', '=', 'produtos.id_produto')
        .select(
                'atas.*',
                'produtos.id_produto',
                'produtos.categoria',
                 'produtos.modelo',
                 'produtos.fabricante',
                 'produtos.imagem',
                 'produtos.catalogo',
                 )
        
        return res.json(atas)
    },

    async find (req, res){
        const {id_atas} = req.params;
        const ata = await connection('atas')
        .join('produtos', 'atas.id_produtos', '=', 'produtos.id_produto')
        .select(
                'atas.*',
                'produtos.id_produto',
                'produtos.categoria',
                 'produtos.modelo',
                 'produtos.fabricante',
                 'produtos.imagem',
                 'produtos.catalogo',
                 )
        .where('id_atas', id_atas)        
        
        return res.json(ata)
    },

    async create (req, res, next){
        try {
            const {id_produtos, descricao, orgao, quantidade, garantia, validade, valor} = req.body

            await connection('atas').insert({
                id_produtos,
                descricao, 
                orgao, 
                quantidade,
                garantia,
                validade,
                valor
           })
   
           return res.json({descricao})
        } catch (error) {
            next(error) 
        }
    },

    async update(req, res, next){
        try {
            const {id_produtos, descricao, orgao, quantidade, garantia, validade, valor} = req.body
            const {id_atas} = req.params;

            await connection('atas').where('id_atas', id_atas)
            .update(
                {
                'id_produtos': id_produtos,
                'descricao': descricao,
                'orgao': orgao,
                'quantidade': quantidade,
                'garantia': garantia,
                'validade': validade,
                'valor': valor
                }
                );
                return res.send();
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next){
        try {
            const {id_atas} = req.params;
            await connection('atas').where('id_atas', id_atas).delete();
         
            return res.send();
        } catch (error) {
            next(error)
        }
    },

    async sendMail(req, res){
        const {clienteNome, clienteEmpresa, clienteEmail, clienteTelefone, clienteCidade, clienteUF} = req.body
        const {id_atas} = req.params;

        const ata = await connection('atas')
        .join('produtos', 'atas.id_produtos', '=', 'produtos.id_produto')
        .select(
                'atas.*',
                'produtos.id_produto',
                'produtos.categoria',
                 'produtos.modelo',
                 'produtos.fabricante',
                 'produtos.imagem',
                 'produtos.catalogo',
                 )
        .where('id_atas', id_atas)    

        const transporter = nodemailer.createTransport({
            host:"email-ssl.com.br",
            port: 465,
            auth: {user:userMail,pass:passMail}
        })
        if(ata){
            ata.map( ata =>{
                transporter.sendMail({
                    from: userMail,
                    to: userMail,
                    replyTo: clienteEmail,
                    subject:"Interese Ata de registro",
                    html: `Olá, tenho interesse na ata da(o) ${ata.orgao}, com o ${ata.categoria} ${ata.modelo} 
                    <br/>
                    <table>
                        <tr>
                            <td>Cliente</td>
                            <td> ${clienteNome}</td>
                        </tr>
                        <tr>
                            <td>Empresa</td>
                            <td> ${clienteEmpresa}</td>
                        </tr>
                        <tr>
                            <td>Telefone</td>
                            <td> ${clienteTelefone}</td>
                        </tr>
                        <tr>
                            <td>Cidade/UF</td>
                            <td> ${clienteCidade} / ${clienteUF}</td>
                        </tr>
                    </table>` 
                }).then(info =>{
                    res.send(info)
                }).catch(err =>{
                    res.send(err)
                })
            })
        }
        
    }
}