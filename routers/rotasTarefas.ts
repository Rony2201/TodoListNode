import express from 'express';
import {
    obterTarefas,
    criarTarefa,
    atualizarTarefa,
    excluirTarefa,
    obterTarefasPorConclusao
} from '../controller/tarefasController.js';


const router = express.Router();


router.get('/tarefas', obterTarefas);
router.post('/tarefas', criarTarefa);
router.put('/tarefas/:id', atualizarTarefa)
router.delete('/tarefas/:id', excluirTarefa);
router.get('/tarefas/concluidas', obterTarefasPorConclusao);



export default router;