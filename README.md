Esse projeto consiste em uma API de gerenciamento de produtos desenvolvida para facilitar o armazenamento, controle e manutenção de dados de produtos. A API permite operações de criação, leitura, atualização e exclusão (CRUD) dos registros de produtos, proporcionando uma forma eficaz de organizar e manipular informações como nome, preço, descrição e quantidade dos itens no estoque.

### Tecnologias Utilizadas:

1. **MySQL**: O banco de dados MySQL é utilizado para armazenar e gerenciar os dados dos produtos. Por ser um banco relacional, permite a organização dos dados de maneira estruturada e confiável, sendo ideal para grandes volumes de informações e consultas rápidas.

2. **TypeScript**: Usado como linguagem principal para o desenvolvimento da API, o TypeScript fornece tipagem estática, facilitando a detecção de erros durante o desenvolvimento. Sua utilização contribui para a robustez do código e facilita a manutenção e expansão do sistema ao longo do tempo.

3. **Express**: Framework para Node.js, o Express é usado para criar e gerenciar as rotas da API. Ele simplifica o desenvolvimento de servidores e facilita a criação de endpoints que respondem às requisições HTTP (GET, POST, PUT e DELETE), permitindo a comunicação entre a API e o banco de dados.

4. **Dotenv**: A biblioteca Dotenv é utilizada para gerenciar variáveis de ambiente de maneira segura. Com ela, dados sensíveis, como credenciais de banco de dados e chaves de API, podem ser armazenados em um arquivo `.env`, sendo acessados pela aplicação sem a necessidade de expor essas informações no código-fonte.

### Funcionamento Geral

A API foi projetada com endpoints que permitem ao usuário realizar operações de CRUD, possibilitando a integração com um sistema front-end ou uma plataforma que requeira o gerenciamento de produtos. Cada requisição ao banco de dados MySQL é feita por meio de operações seguras, e o uso do TypeScript contribui para a confiabilidade da aplicação.
