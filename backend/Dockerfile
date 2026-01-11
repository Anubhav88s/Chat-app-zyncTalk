# Use Node.js 20 Alpine as base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
# Copy all backend source code into the container
COPY . .

# Expose the backend port
EXPOSE 5001

# Start the application
CMD ["npm", "run", "dev"]

# Why use Alpine?
# Alpine Linux is a security-oriented, lightweight Linux distribution.
# We use it to keep our Docker images as small and secure as possible by 
# including only the essential tools needed to run the application.
