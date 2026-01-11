# Stage 1: Build the React application
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy all source code from your local folder into the /app folder in the container
COPY . .
# Run 'vite build' to convert JSX into standard JavaScript, bundle files, 
# and optimize your code for production inside the 'dist' folder.
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output from Stage 1 to Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

# Why use Alpine?
# Alpine Linux is a security-oriented, lightweight Linux distribution (~5MB base).
# We use the -alpine version of images because:
# 1. Size: It reduces the final image size significantly, making it faster to build and ship.
# 2. Security: It contains only the minimal necessary tools, which reduces the attack surface.
# 3. Performance: Smaller images lead to faster downloads and deployments in cloud environments.
