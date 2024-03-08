// import http from "http";
import "dotenv/config"
import app from './src/app.js'
// Servidor local HTTP que simula um servidor que está na internet

const PORT = 3000

// const rotas = {
//   "/": "My first server",
//   "/livros": "Rota livros Olhai os lírios do campo",
//   "/autores": "Rota autores Érico Verissimo",
// }

// O produto final de uma API é um conjunto de rotas

// Através do método createServer toda vez que o servidor HTTP receber
// uma requisição, a função de callback passada para o método será executada.

// const server = http.createServer((req, res) => {
//   // Cabeçalho de requisição
//   res.writeHead(200, {"Content-Type": "text/plain"})
//   res.end(rotas[req.url])
// })

// O método listen é o que vai definir o endereço no qual o servidor vai 
// ficar escutando as requisições e geralmente já o chamamos depois do servidor estar criado

app.listen(PORT, () => {
  // Evento de conexão
  // 300 é o número da porta que esse evento ocorrerá
  console.log("The server is listening!")
})


// Ao adicionar type:module no package.json, é ativado o EcmaScript modules onde 
// podemos usar IMPORT e EXPORT, ao invés de REQUIRE()

// portas lógicas são gerenciadas pelo sistema operacional e agem como pontos 
// onde conexões de rede acontecem. 
// Ex: a comunicação com a API que estamos desenvolvendo se dá através da porta 3000.