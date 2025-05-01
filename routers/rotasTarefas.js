import express from 'express';
import { obterTarefas, criarTarefa } from '../controller/tarefasController.js';

const router = express.Router();


router.get('/tarefas', obterTarefas);
router.post('/tarefas', criarTarefa);



export default router;