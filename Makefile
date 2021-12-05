server-pull:
	sudo docker pull nikfred/enerchest:server
server-run:server-pull
	sudo docker run -p 5000:5000 -v statics:/var/enerchest/static  --rm --name enerchest-server nikfred/enerchest:server
server-run-bg:server-pull
	sudo docker run -p 5000:5000 -d -v statics:/var/enerchest/static  --rm --name enerchest-server nikfred/enerchest:server
server-stop:
	sudo docker stop enerchest-server
server-update: server-stop server-run-bg prune


client-pull:
	sudo docker pull nikfred/enerchest:client
client-run:client-pull
	sudo docker run -p 80:3000 --rm --name enerchest-client nikfred/enerchest:client
client-run-bg:client-pull
	sudo docker run -p 80:3000 -d --rm --name enerchest-client nikfred/enerchest:client
client-stop:
	sudo docker stop enerchest-client
client-update: client-stop client-run-bg prune

prune:
	sudo docker image prune

