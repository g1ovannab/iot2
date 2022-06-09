# iot2


Bueno bom dia,boa tarde ou boa noite Yago aki.

Essas funções aqui servem para incicializar a tabela que vem do BROKER

- createTable(); -> Cria um arquivo database.db que vai ser o banco de dados oficial (precisa de um tratamento)
- insertTable(); -> Insere na tabela IOT os dados que veem do broker no intervalo de:
                                                       (data atual-1hora) até a (data atual) {se tiverem dados}

O que sobra pra fazer (não que seja voce que tenha que fazer, eu vou te ajudar):
 - Fazer uma rotina para pegar os dados por hora
 - Setar para rodar o create table 1 vez
 - Fazer o request dos dados para o site no arquivo database.db -> IOT

Eu não sei que horas vc vai mexer mas é isso

### A e deleta o node_modules, pq essa pasta é muito pesada pra ficar baixando 
 - Com o package.json é só dar npm install que pega todas as dependencias
