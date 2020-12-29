# Docker environment
FROM node:14.15.3-alpine as build-stage
# Designate work directory
WORKDIR /app
# Copy configuration files
COPY package*.json ./
# Install dependencies
RUN npm install --silent
# Copy project files
COPY ./ .

# Build
CMD ["npm", "run", "start"]