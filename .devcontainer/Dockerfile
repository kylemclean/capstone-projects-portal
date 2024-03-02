FROM debian:bookworm

RUN apt-get update \
    \
    && apt-get install -y \
    git \
    curl \
    python3 \
    python3-pip \
    pipenv \
    \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs
