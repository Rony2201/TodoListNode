import * as tarefa from '../models/tarefas.js';

export const obterTarefas = async (req, res) => {
  try {
    const tarefas = await tarefa.obterTarefas();
    res.status(200).json(tarefas);
  } catch (error) {
    console.error('Erro ao obter tarefas:', error);
    res.status(500).json({ mensagem: 'Erro ao obter tarefas' });
  }
};

export const criarTarefa = async (req, res) => {
    try {
        const { nome, descricao, concluida} = req.body;

        const tarefas = await tarefa.criarTarefa(nome, descricao, concluida);
        res.status(201).json(tarefas);
    } catch (error) {
        console.error('Erro ao criar tarefas: ', error);
        res.status(500).json({ mensagem: 'Erro aos criar tarefas' });
    }
};

export const atualizarTarefa = async (req, res) => {
    try {
        const { id } = req.params;
        const { concluida } = req.body;

        const tarefas = await tarefa.atualizarTarefa(id , concluida);
        res.status(201).json(tarefas);
    } catch (error) {
        console.error('Erro ao atualizar tarefa: ', error);
        res.status(500).json({ mensagem: 'Erro ao atualizar tarefa '});
    }
}

export const excluirTarefa = async (req, res) => {
    try {
        const id = req.params.id;

        const tarefas = await tarefa.excluirTarefa(id);
        res.status(201).json(tarefas);
    }catch(error) {
        console.error('Erro ao excluir tarefa: ', error);
        res.status(500).json({mensagem: 'Erro ao excluir tarefa'});
    }
}