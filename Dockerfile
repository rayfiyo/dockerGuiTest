FROM debian:latest
#RUN export DISPLAY=:0 &&\
RUN	apt update -y &&\
	apt-get install x11-apps -y ;
CMD xeyes
