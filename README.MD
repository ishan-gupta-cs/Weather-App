# Weather Application

This README provides instructions for setting up and running the weather application, which consists of a client and server component.

## Prerequisites

- Node.js and npm installed
- An API key from OpenWeather

## Setup Instructions

### Client Setup

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the client application:
   ```
   npm start
   ```

### Server Setup

1. Create a `.env` file in the server directory with your OpenWeather API key:
   ```
   api_key = "YOUR_API_KEY"
   ```
   
   You can obtain an API key from: https://openweathermap.org/appid

2. Open a new terminal and navigate to the server directory:
   ```
   cd server
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

Once both client and server are running, the application should be fully functional.