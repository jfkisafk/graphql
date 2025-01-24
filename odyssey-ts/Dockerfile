# Use an official Node.js runtime as the base image
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install global dependencies and application dependencies
RUN npm install -g npm@latest && npm ci

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Use a non-root user for security
USER node

# Command to run the application in development mode
CMD ["npm", "run", "dev"]
