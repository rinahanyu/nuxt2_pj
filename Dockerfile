# イメージ指定（debianの最新version/slim）
FROM node:16.17.0-bullseye-slim

# 必要なパッケージのインストール
RUN apt-get update && \
    apt-get install -y git && \
    npm install -g @vue/cli nuxt create-nuxt-app
