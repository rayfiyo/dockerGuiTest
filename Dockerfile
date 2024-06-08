FROM debian:12.5-slim
RUN	apt update -y &&\
	apt-get install x11-apps -y ;
CMD xeyes
