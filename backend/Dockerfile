# Use an official Node runtime as the base image
FROM node:18-bullseye

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install bcrypt with --build-from-source and other dependencies
RUN npm install bcrypt --build-from-source && npm ci

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run the app
CMD ["npm", "start"]
