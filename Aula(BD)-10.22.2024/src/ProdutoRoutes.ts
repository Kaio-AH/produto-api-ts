import { Router } from "express";
import { getProdutos, createProduto, updateProduto, deleteProduto } from "./ProdutoController";

const router = Router();

router.get('/produtos', getProdutos);
router.post('/produtos', createProduto);
router.put('/produtos', updateProduto);
router.delete('/produtos', deleteProduto)

export default router;