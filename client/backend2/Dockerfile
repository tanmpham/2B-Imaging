FROM ubuntu:latest
LABEL maintainer="tanphamminh2002@gmail.com"
RUN apt-get update -y && \
apt-get install -y python3 python3-pip
COPY ./requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip3 install -r requirements.txt
COPY . /app
RUN python3 create_prodID.py
ENTRYPOINT [ "python3" ]
CMD [ "app.py" ]
