const express = require('express');

const usersController = require('./controllers/usersControllers');
const produtoController = require('./controllers/produtoControllers');
const parceirosController = require('./controllers/parceirosControllers');
const casesController = require('./controllers/casesControllers');
const atasController = require('./controllers/atasControllers');

const authMiddleware = require('./middleware/auth')

/* multer para upload de arquivos */
const multer = require('multer')
const multerConfig = require('./config/multer')

const routes = express.Router(); 

//rotas users
routes.get('/users', authMiddleware, usersController.index);
routes.post('/login', usersController.login);
routes.post('/users', authMiddleware, usersController.create);
routes.put('/users/:id', authMiddleware, usersController.update);
routes.delete('/users/:id', authMiddleware, usersController.delete);

//rotas produtos
routes.get('/produtos', multer(multerConfig).single('file'), produtoController.index);
routes.get('/produtos/:categoria',  produtoController.find);
routes.post('/produtos', authMiddleware, multer(multerConfig).single('file'), produtoController.create);
routes.put('/produtos/:id', authMiddleware, multer(multerConfig).single('file'), produtoController.update);
routes.delete('/produtos/:id', authMiddleware, produtoController.delete);

//rotas parceiros
routes.get('/parceiros', multer(multerConfig).single('file'), parceirosController.index);
routes.get('/parceiros/:nome', parceirosController.find);
routes.post('/parceiros', authMiddleware, multer(multerConfig).single('file'), parceirosController.create);
routes.put('/parceiros/:id', authMiddleware, multer(multerConfig).single('file'), parceirosController.update);
routes.delete('/parceiros/:id', authMiddleware, parceirosController.delete);

//rotas cases
routes.get('/cases', multer(multerConfig).single('file'), casesController.index);
routes.get('/cases/:id', casesController.find);
routes.post('/cases', authMiddleware, multer(multerConfig).single('file'), casesController.create);
routes.put('/cases/:id', authMiddleware, multer(multerConfig).single('file'), casesController.update);
routes.delete('/cases/:id', authMiddleware, casesController.delete);

//rotas atas
routes.get('/atas', multer(multerConfig).single('file'), atasController.index);
routes.get('/atas/:id_atas', atasController.find);
routes.post('/atas', authMiddleware, atasController.create);
routes.put('/atas/:id_atas', authMiddleware, atasController.update);
routes.delete('/atas/:id_atas', authMiddleware, atasController.delete);
routes.post('/send/:id_atas',  atasController.sendMail);


module.exports = routes;