# Use an official Node.js runtime as the base image
# Use an LTS version for stability
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install global dependencies and application dependencies
RUN npm install -g npm@latest \
    && npm ci --only=production

# Copy the rest of the application code
COPY . .

# Install development dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 4000

# Set environment to development
ENV NODE_ENV=development

# Use a non-root user for security
USER node

# Command to run the application in development mode
CMD ["npm", "run", "dev"]
