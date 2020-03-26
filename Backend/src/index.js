const express = require('express');
const routes = require('./route');
const cors = require ('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Tipos de parametros
 * Query params: parâmetros nomeados na rota  após o '?' (filtros, paginação)
 * Route params: utilizados para identificar recursos
 * Request Body
 * */
//query builder técnica usada para usar js como linguagem de consulta



app.listen(3333);
