import * as tarefa from '../models/tarefas.js';
import { Request, Response } from 'express';

export const obterTarefas = async (req: Request, res: Response) => {
  try {
    const tarefas = await tarefa.obterTarefas();
    res.status(200).json(tarefas);
  } catch (error) {
    console.error('Erro ao obter tarefas:', error);
    res.status(500).json({ mensagem: 'Erro ao obter tarefas' });
  }
};

export const criarTarefa = async (req: Request, res: Response) => {
    try {
        const { nome, descricao, concluida} = req.body;

        const tarefas = await tarefa.criarTarefa(nome, descricao, concluida);
        res.status(201).json(tarefas);
    } catch (error) {
        console.error('Erro ao criar tarefas: ', error);
        res.status(500).json({ mensagem: 'Erro aos criar tarefas' });
    }
};

export const atualizarTarefa = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { concluida } = req.body;

        const tarefas = await tarefa.atualizarTarefa(Number(id), concluida);
        res.status(200).json(tarefas);
    } catch (error) {
        console.error('Erro ao atualizar tarefa: ', error);
        res.status(500).json({ mensagem: 'Erro ao atualizar tarefa '});
    }
}

export const excluirTarefa = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const tarefas = await tarefa.excluirTarefa(Number(id));
        res.status(200).json(tarefas);
    }catch(error) {
        console.error('Erro ao excluir tarefa: ', error);
        res.status(500).json({mensagem: 'Erro ao excluir tarefa'});
    }
}

export const obterTarefasPorConclusao = async (req: Request, res: Response) => {
  try {
    const { concluida } = req.query;

    if (concluida === undefined) {
       res.status(400).json({ mensagem: 'Informe o status de conclusão (true ou false) na query string' });
    }

    const statusConclusao = concluida === 'true';

    const tarefasFiltradas = await tarefa.obterTarefasPorConclusao(statusConclusao);

    res.status(200).json(tarefasFiltradas);

  } catch (error) {
    console.error('Erro ao obter tarefas por status de conclusão: ', error);
    res.status(500).json({ mensagem: 'Erro ao obter tarefas por status de conclusão' });
  }
};