[English type is here](https://github.com/rayfiyo/DockerGuiTest#what-is-this-repository)
# このレポジトリは何？
Dockerでguiを描画する試験をした結果、成功したので公開。

# 利用方法は？
方法は2通りあります。
どちらでも結果は同じです。
## 方法A: compose
DockerGuiTest/ 内で、コマンドを実行
~~~
docker-compose up -d
~~~
## 方法B: build & run
DockerGuiTest/notCompose/ 内で、コマンドを実行
~~~
docker build \
	--build-arg DISPLAY=$DISPLAY \
	--build-arg PULSE_SERVER=$PULSE_SERVER \
	--build-arg WAYLAND_DISPLAY=$WAYLAND_DISPLAY \
	--build-arg XDG_RUNTIME_DIR=$XDG_RUNTIME_DIR \
	. -t image-name 
docker run \
	-v /mnt/wslg:/mnt/wslg \
	-v /tmp/.X11-unix:/tmp/.X11-unix \
	-it --rm image-name
~~~
## 補足: compose.yml
compose.yml は docker-compose.yml と同じ役割です。
こちらに関しては [公式ドキュメント](https://docs.docker.jp/compose/compose-file/#compose-spec-compose-file) を参照してください。

# 最後に
日本語で記事を書きました。
時間かけた? かかった? ので読んでもらえると嬉しいです。
[wslのDockerでGUI操作 | qiita.com](https://qiita.com/rayfiyo/items/17842dcf258b4d585531)

---

# What is this repository?
I tested drawing gui with Docker and it was successful, so I published the file.

# I'd like to try it too.
There are two methods.
The result is the same in both cases.
## Method A: compose
In DockerGuiTest/, execute the command
~~~
docker-compose up -d
~~~
## Method B: build & run
In DockerGuiTest/notCompose/, run the command
~~~
docker build \
	--build-arg DISPLAY=$DISPLAY \
	--build-arg PULSE_SERVER=$PULSE_SERVER \
	--build-arg WAYLAND_DISPLAY=$WAYLAND_DISPLAY \
	--build-arg XDG_RUNTIME_DIR=$XDG_RUNTIME_DIR \
	. -t image-name 
docker run \
	-v /mnt/wslg:/mnt/wslg \
	-v /tmp/.X11-unix:/tmp/.X11-unix \
	-it --rm image-name
~~~
## Supplemental: compose.yml
compose.yml has the same role as docker-compose.yml.
See [official documentation](https://docs.docker.com/compose/compose-file/#compose-file) for more information.

# Lastly
I wrote an article about what is related to this repository, though it is in Japanese.
I took time to write it, and I hope you will read it.
[wslのDockerでGUI操作 | qiita.com](https://qiita.com/rayfiyo/items/17842dcf258b4d585531)
