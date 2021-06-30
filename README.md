# mongoNodeUI

# network

docker network create -d bridge mongoNodeBridge

# mongo

docker run -p 27017:27017 --network=mongoNodeBridge --name mongoContainer -d mongo

# NODE JS

goto path be

docker build . -t backend

docker run -p 3000:3000 --network=mongoNodeBridge -d backend
