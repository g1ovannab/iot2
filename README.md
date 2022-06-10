# iot2
Essas funções aqui servem para incicializar a tabela que vem do BROKER

- createTable(); -> Cria um arquivo database.db que vai ser o banco de dados oficial (precisa de um tratamento)
- insertTable(); -> Insere na tabela IOT os dados que veem do broker no intervalo de: (data atual-1hora) até a (data atual) {se tiverem dados}


- Fazer uma rotina para pegar os dados por hora
- Setar para rodar o create table 1 vez
- Fazer o request dos dados para o site no arquivo database.db -> IOT