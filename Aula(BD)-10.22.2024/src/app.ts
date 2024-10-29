import express from 'express';
import bodyParser from 'body-parser';
import ProdutoRouter from './ProdutoRoutes';
import {pool} from './database';
import path from 'path';

const app = express();
const port = 3000;
app.use('/api', ProdutoRouter)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

// configurar o middlewhere para arquivos estáticos

