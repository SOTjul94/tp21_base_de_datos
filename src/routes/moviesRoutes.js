const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');



router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
//agregado///////
const moviesValidation = require('../validations/moviesValidation');

//Rutas exigidas para la creación del CRUD
//router.???('', moviesController.add);
//router.???('', moviesController.create);
//router.???('', moviesController.edit);
//router.???('', moviesController.update);
//router.???('', moviesController.delete);
//router.???('', moviesController.destroy);
router.get('/movies/add', moviesController.add);
router.post('/movies/create', moviesValidation, moviesController.create);
router.get('/movies/edit/:id', moviesController.edit);
router.put('/movies/update/:id', moviesValidation, moviesController.update);
router.get('/movies/delete/:id', moviesController.delete);
router.delete('/movies/delete/:id', moviesController.destroy);




module.exports = router;