document.getElementById('createForm')
.addEventListener('submit', async function(e){

    e.preventDefault();

    const criarProduto = {
        nome: document.getElementById('nome').value,
        preco: document.getElementById('preco').value
    };

    try {
        const response = await fetch('/api/produtos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(criarProduto)
        });

        if(response.ok){
            alert('Produto criado com sucesso');
            document.getElementById('createForm').reset();
            loadProdutos();
        }else{
            alert('Erro ao criar produto')
        }


    } catch (error) {
        alert('Erro de comunicação com o servidor')
    }

})