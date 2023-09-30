# Establece la imagen base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json, yarn.lock al directorio de trabajo
COPY package.json ./
COPY yarn.lock ./

# Instala las dependencias utilizando yarn
RUN yarn install

# Recompila bcrypt
RUN yarn add bcrypt --force

# Copia el código de la aplicación al directorio de trabajo
COPY . .

# Expone el puerto que tu aplicación usa
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD [ "node", "index.js" ]
