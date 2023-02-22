FROM debian:latest
RUN	apt update -y &&\
	apt-get install x11-apps -y ;
CMD xeyes
