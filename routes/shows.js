const express = require('express');
const showsController = require('../controllers/showsController');
const views = require('../controllers/viewController');
const showsRouter = express.Router();

showsRouter.get('/new', showsController.index, showsController.makeBlankShow, views.showAddForm, views.show404);
showsRouter.get('/:id/edit', showsController.getOne, views.showEditForm, views.show404);

showsRouter.route('/:id')
  .get(showsController.getOne, views.showOne, views.show404)
  .put(showsController.update, views.handleUpdate, views.show406)
  .delete(showsController.destroy, views.handleDelete, views.show404);

showsRouter.route('/')
  .get(showsController.index, views.showShows, views.show404)
  .post(showsController.create, views.handleCreate, views.show406);

module.exports = showsRouter;
