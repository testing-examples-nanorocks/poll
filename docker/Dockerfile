FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Codebase
COPY ./ ./

# Port
EXPOSE 5000

# Exec
CMD ["npm", "run", "dev"]

# docker build -t nanorocks/node-poll -f docker/Dockerfile .
# docker run --rm -v $(pwd)/app:/usr/src/app --name node-poll -p 5000:5000 nanorocks/node-poll