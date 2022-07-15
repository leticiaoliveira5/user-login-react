## Para gerar o backend com o json server:

- Criar a pasta 'backend' (opcional)
- Rodar o comando no diretório:

```
npm i --save json-server@0.13.0 -E
```

Isso gera a pasta `node modules` e arquivo `packege-lock.json`.

## Criar o arquivo que vai servir como banco de dados

Criar na pasta backend, o arquivo `db.json`

No arquivo `package.json` atualizar os scripts:

```
  "scripts": {
    "start": "json-server --watch db.json --port 3001"
  },
```