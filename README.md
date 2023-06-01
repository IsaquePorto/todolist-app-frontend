# TODOLIST APP

###  Aplicacao desenvolvida com nodejs, react e mysql 

**Atencao** Baixar também os códigos dos repositórios todolist-app-db e todolist-app-backend para a aplicação completa 

## Criar imagem docker do BD

*cd todolist_app_db*
docker build -t todolistdb .

## Criar imagem do backend

*cd backend*
docker build -t todolist-app-back .

## Criar imagem Frontend do projeto

**Atencao** 
*Alterar valor da URL na linha 7 do arquivo `Dockerfile` do frontend para apontar para o host onde o backend está rodando (use o IP real do seu computador ao invés de localhost)* 

*cd todolist_app_front*
docker build -t todolist-app-front

## Executando a aplicação

**docker-compose up**

## Possiveis erros:

ConnectionError [SequelizeConnectionError]: Host 'xxx.xx.x.x' is not allowed to connect to this MySQL server

**Apenas mova os arquivos docker-compose.yml e README.md para fora do diretório todolist_app_front**

ConnectionRefusedError [SequelizeConnectionRefusedError]: connect ECONNREFUSED xxx.xx.x.x:3306

**Apenas aguarde 3~4 minutos depois de criar as imagens para poder executar o docker-compose up**
