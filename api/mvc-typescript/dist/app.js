"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const ProdutoRoutes_1 = __importDefault(require("./ProdutoRoutes"));
const database_1 = require("./database");
const path_1 = __importDefault(require("path"));
const inspector_1 = require("inspector");
const app = (0, express_1.default)();
//const PORT = process.env.PORT || 3000;
const PORT = 3000;
//CONFIGURAR O MIDDLEWARE PARA ARQUIVOS ESTATICOS
app.use(express_1.default.static(path_1.default.join(__dirname, 'views')));
app.use(body_parser_1.default.json());
app.use('/api', ProdutoRoutes_1.default);
//ROTA PARA SERVIR O ARQUIVO ESTATICO INDEX.HTML
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'views', 'index.html'));
});
database_1.pool.getConnection()
    .then(() => {
    inspector_1.console.log('Conectado ao banco com sucesso.');
    app.listen(PORT, () => {
        inspector_1.console.log('Servidor rodando na porta ', PORT);
    });
})
    .catch((error) => {
    inspector_1.console.error('Erro ao conectar ao bando de dados.', error);
});
