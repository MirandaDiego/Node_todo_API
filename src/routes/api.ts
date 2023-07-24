import { Router } from 'express';

import * as TodoController  from '../controllers/todo.controller';


const router = Router();

router.get('/usuario',  TodoController.users)
router.post('/usuario', TodoController.registerUser)
router.put('/usuario/:id', TodoController.updateUser)
router.delete('/usuario/:id',TodoController. deleteUser)

router.get('/todo', TodoController.allTodo);
router.post('/todo', TodoController.addTodo);
router.put('/todo/:id', TodoController.updateTodo);
router.delete('/todo/:id', TodoController.removeTodo);


export default router;