import pool from '../db.js';


export const obterTarefas = async () => {
  const result = await pool.query('SELECT * FROM tarefas');
  return result.rows;
};


export const criarTarefa = async (nome, descricao, concluida) => {
  const result = await pool.query(
    'INSERT INTO tarefas (nome, descricao, concluida) VALUES ($1, $2, $3) RETURNING *',
    [nome, descricao, concluida]
  );
  return result.rows[0];
};


export const atualizarTarefa = async (id, concluida) => {
  const result = await pool.query(
    'UPDATE tarefas SET concluida = $1 WHERE id = $2 RETURNING *',
    [concluida, id]
  );
  return result.rows[0];
};
