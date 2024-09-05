# ChatAPI
ChatAPI is a **full-stack chat application** built with the *MERN stack* and deployed on Render. The app allows users to message their friends, retrieve weather and news details according to user preference with a click, and choose their own themes and notification sounds for a personalized web interface.

## Features
- **User Authentication**: Users can register and log in using JWT authentication and maintain the login state across page reloads through cookies.
- **User Profiles**: Each user has a profile with a username they enter upon siging up and a default profile picture according to their gender.
- **Conversations**: Users can text other users effortlessly and get instantanious updates thanks to real-time messages, customizable notification sounds and stylish chat bubbles.
- **API Integration**: Beside the conversation panel is the API section, where users can enter their city/location to get real-time weather updates and/or read the latest news articles according to the topic and country code of interest, thanks to OpenWeather API and NewsAPI respectively.

## Installation

### Clone the repository:
```bash
git clone https://github.com/Hari-1-0/ChatAPI.git
cd ChatAPI
```

### Set up the backend:
```bash
npm install
```

### Set up the frontend:
```bash
cd frontend
npm install
```

### Create a .env file for environment variables:
```bash
MONGO_URI=your_mongo_db_uri
WEATHER_API_KEY=your_weather_api_key
NEWS_API_KEY=your_news_api_key
```

### Run the app:
In the root directory, run:
```bash
npm start
```
In the frontend directory, start the React development server:
```bash
npm start
```

#### Access the app:
Open your browser and go to http://localhost:5000

##Technologies Used:
**Frontend**: React, CSS
**Backend**: Node.js, Express.js, MongoDB
**APIs**: OpenWeather, News API, OpenAI API
**Authentication**: JWT
