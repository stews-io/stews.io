FROM node
WORKDIR /stews
COPY package.json ./
COPY preact.config.js ./
COPY tsconfig.base.json ./
COPY yarn.lock ./
ENTRYPOINT ["bash"]