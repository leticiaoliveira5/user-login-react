# Imagem de Origem
FROM node:13-alpine

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app

# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json

RUN npm install
RUN npm install react-scripts@3.3.1 -g
RUN npm install axios

COPY . /app