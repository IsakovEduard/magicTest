docker images;
for i in $(docker images -q);
 do read -p "would you like to delete image with ID $i Y/N? "  answer;
 if [ ${answer^} == "Y" ]; then
	docker rmi $i
	echo "Image with ID $i was succesfully deleted"
fi
 done