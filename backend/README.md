
# Guia de Instalação e Execução do Módulo Backend

Este documento fornece instruções passo a passo sobre como configurar e executar o módulo backend do projeto utilizando NestJS e pnpm.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte software instalado em sua máquina:

- Node.js (v14.x ou superior, de preferência a mais atualizada)
- pnpm (v6.x ou superior)
- Git

## Configuração Inicial

1. Clone o repositório do projeto para sua máquina local utilizando git. Substitua `URL_DO_REPOSITORIO` pela URL do repositório do seu projeto:

    ```bash
    git clone URL_DO_REPOSITORIO
    cd caminho_para_o_projeto
    ```

2. Dentro do diretório do projeto, instale as dependências usando pnpm:

    ```bash
    pnpm install
    ```

## Executando o Projeto

Após instalar as dependências, você pode iniciar o servidor backend com o seguinte comando:

```bash
pnpm run start
```

Por padrão, o servidor será iniciado na porta 3000. Você pode acessar a aplicação em `http://localhost:3001`. As configurações de porta podem ser ajustadas no arquivo de configuração do NestJS, caso necessário.

## Utilizando o Swagger para Testar Endpoints

Se o seu projeto incluir documentação Swagger para a API, você pode acessá-la em `http://localhost:3001/api-docs` para ver e testar os endpoints disponíveis.

## Solução de Problemas

- **Problema de Dependências**: Se você encontrar problemas ao instalar as dependências, tente limpar o cache do pnpm com `pnpm cache clear` e instale novamente.
- **Erro de Versão do Node.js**: Certifique-se de que está utilizando a versão correta do Node.js. Você pode gerenciar múltiplas versões do Node.js utilizando ferramentas como `nvm` ou `n`.

## Suporte

Se precisar de ajuda adicional, considere consultar a documentação oficial do [NestJS](https://docs.nestjs.com) e do [pnpm](https://pnpm.io), ou abra uma issue no repositório do projeto.
