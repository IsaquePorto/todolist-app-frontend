##                                          ##
##   TODOLIST desenvolvida com mysql,       ## 
##   nodejs no backend e react no frontend  ##
##                                          ##

# Criar imagem docker do BD

cd todolist_app_db
docker build -t todolistdb .

# Criar imagem do backend

cd backend
docker build -t todolist-app-back .

# Criar imagem Frontend do projeto

cd todolist_app_front
docker build -t todolist-app-front

## Executando a aplicação

docker-compose up
