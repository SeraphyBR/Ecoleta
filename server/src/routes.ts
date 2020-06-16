import express from 'express';

import PointsController from './controllers/points_controller';
import ItemsController from './controllers/items_controller';

const routes = express.Router();
const points_controller = new PointsController();
const items_controller = new ItemsController();

// padrão de nomes (comunidade) para métodos na controller
// index (listar muitos registros) , show (mostrar apenas um registro), create, update, delete

routes.get('/items', items_controller.index);

routes.get('/points', points_controller.index);
routes.get('/points/:id', points_controller.show);
routes.post('/points', points_controller.create);

export default routes;