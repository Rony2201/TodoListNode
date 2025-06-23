import express from 'express';
import rota from './routers/rotasTarefas.js'
import pool from './database/db.js';

const app = express();

app.use(express.json());


app.use(rota)

async function testarConexao() {
    try {
      const res = await pool.query('SELECT NOW()');
      console.log('Banco conectado:', res.rows[0]);
    } catch (err) {
      console.error('Erro de conexão:', err);
    }
  }
  
  testarConexao();

export { app };


