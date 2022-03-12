# online fashion store with React+MUI+k8s

## used technologies
react  
material ui  
k8s  
istio  
docker-compose  
express  
commercejs  
stripejs  
nginx reverse server  
redis  

## how to run
local
```sh
docker-compose up --build
```
then visit http://localhost:3050  
k8s
```sh
kubectl apply -f deploy-k8s.yml
kubectl apply -f gateway-k8s.yml
```
then visit http://your-gateway-service-node-IP


