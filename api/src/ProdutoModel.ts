
import {pool} from './database';

export interface Produto{
    id?: number;
    nome: string;
    preco: number;
}

export class ProdutoModel{

    async getAll(): Promise<Produto[]>{
        const [rows] = await pool.query('SELECT * FROM produtos');
        return rows as Produto[]
    }

    
//Create

async create(produto: Produto): Promise<void>{
    await pool.query('INSTER INTO produtos (nome,preco) VALUES (?,?)', [produto.nome, produto.preco]);
}

//Update

async update(id: number, produto: Produto): Promise<void>{
    await pool.query('UPDATE produtos SET nome = ?, preco = ? WHERE id = ?', [produto.nome, produto.preco, id]);
}

//Delete 

async delete(id: number): Promise<void>{
    await pool.query('DELETE FROM produtos WHERE id = ?', [id])
}
}
