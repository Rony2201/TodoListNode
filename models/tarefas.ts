import pool from '../database/db.js';


export const obterTarefas = async () => {
  const result = await pool.query('SELECT * FROM tarefas');
  return result.rows;
};


export const criarTarefa = async (nome: string, descricao: string, concluida: boolean) => {
  const result = await pool.query(
    'INSERT INTO tarefas (nome, descricao, concluida) VALUES ($1, $2, $3) RETURNING *',
    [nome, descricao, concluida]
  );
  return result.rows[0];
};


export const atualizarTarefa = async (id: number, concluida: boolean) => {
  const result = await pool.query(
    'UPDATE tarefas SET concluida = $1 WHERE id = $2 RETURNING *',
    [concluida, id]
  );
  return result.rows[0];
};

export const excluirTarefa = async (id: number) => {
  const result = await pool.query(
    'DELETE FROM tarefas WHERE id = $1',
    [id]
  );
  return result.rows[0];
}

export const obterTarefasPorConclusao = async (concluida: boolean) => {
  const result = await pool.query(
    'SELECT * FROM tarefas WHERE concluida = $1',
    [concluida]
  );
  return result.rows;
};

