# Use the latest Node.js image as the base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on (default is 3000)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
