import express from 'express';
import { obterTarefas, criarTarefa, atualizarTarefa, excluirTarefa } from '../controller/tarefasController.js';

const router = express.Router();


router.get('/tarefas', obterTarefas);
router.post('/tarefas', criarTarefa);
router.put('/tarefas', atualizarTarefa)
router.delete('/tarefas/:id', excluirTarefa);



export default router;