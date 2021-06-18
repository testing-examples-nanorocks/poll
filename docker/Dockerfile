FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --from=build ./app/package*.json .

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./app .

RUN chown -R $USER:$(id -gn $USER) /root/.config

EXPOSE 5000
CMD ["npm", "run", "dev"]

# docker build -t nanorocks/node-poll -f docker/Dockerfile .

# docker run --rm -v $(pwd)/app:/usr/src/app --name node-poll -p 5000:5000 nanorocks/node-poll