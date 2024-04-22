# Instruções de utilização

## Instalação do App

Após clonar o repositório vá para a pasta *src* e siga as seguintes instruções:

1. Digite o comando abaixo para a instalação das dependências: 
````
npm install
````
2. Após a instalação dos pacotes do projeto, instale também a biblioteca [Localtunnel](https://theboroer.github.io/localtunnel-www/):
````
npm install -g localtunnel
````

Agora com todas a dependências do projeto instaladas, siga as orientações a seguir para conseguir rodar o aplicativo em uma maquina virtual Android. Caso não tenha uma instalada em sua máquina, segue o link para orientções de instalação ( [Guia de instalção](https://reactnative.dev/docs/environment-setup) ):

Ainda na pasta *src* :

1. Digite o comando a seguir para subir uma api backend, criada atráves da biblioteca [Json-Server](https://github.com/typicode/json-server/tree/v0) e [Json-Server-Auth](https://github.com/jeremyben/json-server-auth#readme):
`````
npm run backend
`````
2. Em seguida digite o comando do Localtunnel para gerar um link de acesso, permitindo que o app acesse a api backend:
`````
lt --port 3000
`````
3. Copei o link gerado e cole no local indicado no arquivo que se encontra na pasta ***scr/services/urls.js***.

4. Em seguida digite o próximo comando para subir a maquina virtual junto com a intalação do app:
````
npm run android
````

Seguindo as orientações acima, o app estará pronto para ser testado.

## Histórico de versões

### [0.1.0] - DD/MM/AAAA
#### Adicionado
- Adicionado ...